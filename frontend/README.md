# Aptos Chess

## Development
Run the development server:
```bash
bun dev
```

## Codegen
Compile the CLI from this branch in aptos-core: banool/rust-move-codegen.

Run this from the `move/` directory to generate the schema from the Move module:
```bash
aptos move generate abi
```

Run this from the `frontend/` directory:
```bash
bun run generate-from-move
```

## Old

We use [Surf](https://github.com/ThalaLabs/surf). Surf requires the ABI of the Move module in the JSON format that comes from the node API. First, spin up the local test environment:
```
python scripts/start_local_env.py -f --aptos-cli-path ~/a/core/target/debug/aptos
```

Run this to get the ABI as JSON:
```
curl http://127.0.0.1:8080/v1/accounts/0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30/module/chess | jq .abi | pbcopy
```

Paste that into this file:
```
src/types/abis.ts
```

I tried to use typemove but I had issues: https://github.com/sentioxyz/typemove/issues/52.

I also had issues with Surf: https://github.com/ThalaLabs/surf/issues/67. Beyond just this I found that it's up to you to add all the ABIs, which is painful if you rely on modules outside of 0x1.
