# Aptos Chess Frontend

## Development
Run the development server:
```bash
pnpm start
```

## Codegen
To generate types based on the indexer API queries we use, run this:

```bash
pnpm generate-from-indexer-queries
```

## Surf

We use [Surf](https://github.com/ThalaLabs/surf). Surf requires the ABI of the Move module in the JSON format that comes from the node API. First, spin up the local test environment (run this from the root):
```
python scripts/start_local_env.py -f
```

Run this to get the ABI as JSON:
```
curl -s http://127.0.0.1:8080/v1/accounts/0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30/module/chess | jq .abi | pbcopy
```

Paste that into this file:
```
src/types/abis.ts
```
