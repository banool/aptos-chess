# Aptos Chess

## Developing
To set up a local testnet, create an account on it, and deploy the Move module, run this:
```
python scripts/start_local_env.py
```

We use a consistent private key locally to make it easier to test.

Run a local testnet:
```
aptos node run-local-testnet --with-indexer-api --force-restart --assume-yes
```

Create a testing account:
```
aptos init --profile local
```

Deploy the Move module:
```
cd move
aptos move publish --addr
```
