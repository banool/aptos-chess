# Aptos Chess: Move

## Manual invocation
To use the contract directly, vs via the web UI, use these commands.

### Local

Create a game:
```
aptos move run --profile local --assume-yes --function-id 0x`yq .profiles.local.account < .aptos/config.yaml`::chess::create_game --args address:0xb078d693856a65401d492f99ca0d6a29a0c5c0e371bc2521570a86e40d95f823
```

Move a piece as player 1 (profile = local), in this case the white pawn from d2 to d4:
```
aptos move run --profile local --assume-yes --function-id 0x`yq .profiles.local.account < .aptos/config.yaml`::`cat Move.toml | grep -o 'chess[0-9]*'`::make_move --args address:0x7aed0bc67027a8dc2b0de6de707b6a4e4d870bafab794502ea72fbe99d44d9ae u8:3 u8:1 u8:3 u8:3 u8:1
```

Move a piece as player 2 (profile = player2), in this case the black pawn from e7 to e5:
```
aptos move run --profile player2 --assume-yes --function-id 0x`yq .profiles.local.account < .aptos/config.yaml`::`cat Move.toml | grep -o 'chess[0-9]*'`::make_move --args address:0x7aed0bc67027a8dc2b0de6de707b6a4e4d870bafab794502ea72fbe99d44d9ae u8:4 u8:6 u8:4 u8:4 u8:1
```

### Testnet

To publish to testnet at a new address:
```
yes '' | aptos init --profile testnetpublish --assume-yes --network testnet && aptos move publish --profile testnetpublish --assume-yes --named-addresses addr=testnetpublish
```

Create a game:
```
aptos move run --profile testnet --assume-yes --function-id 0x`yq .profiles.testnetpublish.account < .aptos/config.yaml`::chess::create_game --args address:0x123
```
