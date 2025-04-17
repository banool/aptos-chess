import type { CodegenConfig } from "@graphql-codegen/cli";

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY is not set");
}

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "https://api.testnet.staging.aptoslabs.com/nocode/v1/api/cm9lbaypy000as6011st0h404/v1/graphql":
      {
        headers: {
          authorization: `Bearer ${API_KEY}`,
        },
      },
  },
  documents: "src/codegen/indexer/queries/**/*.graphql",
  generates: {
    "src/codegen/indexer/generated/types.ts": {
      config: {
        emitLegacyCommonJSImports: false,
        namingConvention: "keep",
        avoidOptionals: true,
        strictScalars: true,
        scalars: {
          Any: "any",
          U8: "number",
          U16: "number",
          U32: "number",
          U64: "string",
          U128: "string",
          U256: "string",
          Address: "string",
          bigint: "bigint",
          jsonb: "any",
          numeric: "number",
          timestamp: "string",
          timestamptz: "string",
        },
      },
      plugins: ["typescript"],
    },
    "src/codegen/indexer/generated/operations.ts": {
      preset: "import-types-preset",
      presetConfig: {
        typesPath: "./types",
      },
      plugins: ["typescript-operations"],
    },
    "src/codegen/indexer/generated/queries.ts": {
      preset: "import-types-preset",
      presetConfig: {
        typesPath: "./operations",
      },
      plugins: ["typescript-graphql-request"],
      config: {
        documentMode: "string",
        documentVariableSuffix: "",
      },
    },
  },
};

export default config;
