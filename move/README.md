# Aptos Chess: Move

## Manual invocation
To use the contract directly, vs via the web UI, use these commands.

Create a game:
```
aptos move run --assume-yes --function-id `yq .profiles.default.account < .aptos/config.yaml`::`cat Move.toml | grep -o 'chess[0-9]*'`::create_game --args address:0xb078d693856a65401d492f99ca0d6a29a0c5c0e371bc2521570a86e40d95f823
```
