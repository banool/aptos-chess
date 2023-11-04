import argparse
import json
import logging
import subprocess
import time
import urllib.request


logging.basicConfig(level="INFO", format="%(asctime)s - %(levelname)s - %(message)s")


PRIVATE_KEY = "0xece937b5a5f1df41ba6a550e212492ee98573d3799d0035aa20c29674cd0ceff"
ACCOUNT_ADDRESS = "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30"
PROFILE_NAME = "local"

PLAYER2_PRIVATE_KEY = "0xece937b5a5f1df41ba6a550e212492ee98573d3799d0035aa20c29674cd0cefd"
PLAYER2_ADDRESS = "0xaf769425b319270f91768e8910ed4cde16c4cea32751062c9ab3f2b21adc27b4"
PLAYER2_PROFILE_NAME = "player2"


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--debug", action="store_true")
    parser.add_argument(
        "-f", "--force-restart", action="store_true", help="Start afresh"
    )
    parser.add_argument(
        "--offline",
        action="store_true",
        help="Set flags that make this work offline, assuming the deps are present",
    )
    parser.add_argument("--aptos-cli-path")
    args = parser.parse_args()
    return args


def main():
    args = parse_args()
    args.aptos_cli_path = args.aptos_cli_path or "aptos"

    if args.debug:
        logging.setLevel("DEBUG")

    # Kill any existing local testnet.
    kill_process_at_port(8080)

    # Run the local testnet.
    cmd = [args.aptos_cli_path, "node", "run-local-testnet", "--with-indexer-api"]
    if args.force_restart:
        cmd += ["--force-restart", "--assume-yes"]
    local_testnet_handle = subprocess.Popen(cmd)

    # Wait for the local testnet to start.
    print("[Local] Waiting for local testnet to start up...")
    while True:
        # Hit the ready server.
        logging.debug("Checking if local testnet up")
        try:
            response = urllib.request.urlopen("http://127.0.0.1:8070")
            if response.status == 200:
                break
        except:
            if local_testnet_handle.poll():
                print("[Local] Local testnet crashed on startup, exiting...")
                return
        time.sleep(1)
    print("[Local] Local testnet came up!")

    if args.force_restart:
        # Create an account.
        subprocess.run(
            [
                args.aptos_cli_path,
                "init",
                "--network",
                "local",
                "--private-key",
                # Use a predefined private key so the rest of the steps / tech stack
                # can use a predefined account address.
                PRIVATE_KEY,
                "--assume-yes",
                "--profile",
                PROFILE_NAME,
            ],
            check=True,
            universal_newlines=True,
            cwd="move/",
        )
        print("[Local] Created account on local testnet")

        move_cmd_extra = []
        if args.offline:
            move_cmd_extra.append("--skip-fetch-latest-git-deps")

        # Publish the Move module.
        subprocess.run(
            [
                args.aptos_cli_path,
                "move",
                "publish",
                "--named-addresses",
                "addr=local",
                "--assume-yes",
                "--profile",
                PROFILE_NAME,
            ]
            + move_cmd_extra,
            check=True,
            universal_newlines=True,
            cwd="move/",
        )
        print("[Local] Published the Local Move module")

        # Create an account for player 2.
        subprocess.run(
            [
                args.aptos_cli_path,
                "init",
                "--network",
                "local",
                "--private-key",
                # Use a predefined private key so the rest of the steps / tech stack
                # can use a predefined account address.
                PLAYER2_PRIVATE_KEY,
                "--assume-yes",
                "--profile",
                PLAYER2_PROFILE_NAME,
            ],
            check=True,
            universal_newlines=True,
            cwd="move/",
        )
        print("[Local] Created account for player 2 on local testnet")


    # Create a game with player 2.
    result = subprocess.run(
        [
            args.aptos_cli_path,
            "move",
            "run",
            "--assume-yes",
            "--profile",
            PROFILE_NAME,
            "--function-id",
            f"{ACCOUNT_ADDRESS}::chess::create_game",
            "--args",
            f"address:{PLAYER2_ADDRESS}"
        ],
        capture_output=True,
        check=True,
        universal_newlines=True,
        cwd="move/",
    )

    # Get the txn hash of the txn we just submitted.
    txn_hash = json.loads(result.stdout)["Result"]["transaction_hash"]

    # Get the data of the txn we just submitted.
    response = urllib.request.urlopen(f"http://127.0.0.1:8080/v1/transactions/by_hash/{txn_hash}")
    data = json.loads(response.read().decode("utf-8"))

    # Get and print the address of the object we just created.
    object_address = data["events"][0]["data"]["object_address"]
    print(f"[Local] Created a game at {object_address}")

    # Sit here while the local testnet runs.
    print("[Local] Setup complete, local testnet is ready and running")

    try:
        local_testnet_handle.wait()
    except KeyboardInterrupt:
        print("[Local] Received ctrl-c, shutting down local testnet")
        # No need to send another signal, the local testnet receives ctrl-c the first
        # time.
        local_testnet_handle.wait()
        print("[Local] Local testnet shut down")

    print("[Local] Done, goodbye!")


# Kill the process running at the given port.
def kill_process_at_port(port: int):
    out = subprocess.run(
        ["lsof", "-i", f":{port}"], capture_output=True, universal_newlines=True
    )
    pid = None
    for line in out.stdout.splitlines():
        if line.startswith("aptos"):
            pid = line.split()[1]
    if pid:
        subprocess.run(["kill", pid])
        print(f"[Local] Killed existing process occupying port {port} with PID {pid}")


if __name__ == "__main__":
    main()


"""
# Get all games that you created
## Query
query MyQuery($spec: jsonb) {
  events(where: {type: {_eq: "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::GameCreatedEvent"}, data: {_contains: $spec}}) {
    data
  }
}

## Variables
{
  "spec": {
    "creator_address": "0xaf769425b319270f91768e8910ed4cde16c4cea32751062c9ab3f2b21adc27b4"
  }
}

# Get all games where you are the opponent
## Query
query MyQuery($spec: jsonb) {
  events(where: {type: {_eq: "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::GameCreatedEvent"}, data: {_contains: $spec}}) {
    data
  }
}

## Variables
{
  "spec": {
    "opponent_address": "0xaf769425b319270f91768e8910ed4cde16c4cea32751062c9ab3f2b21adc27b4"
  }
}
"""
