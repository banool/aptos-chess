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



#Query like this:

{
  "moduleId": "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::GameCreatedEvent",
  "creatorSpec": {
    "creator_address": "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30"
  },
  "opponentSpec": {
    "opponent_address": "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30"
  }
}
"""

## Notes
Be careful about updating the GraphQL codegen deps because of this issue: https://github.com/dotansimha/graphql-code-generator/issues/9046.
