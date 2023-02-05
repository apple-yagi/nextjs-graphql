import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "generated/graphql/schema.graphql",
  documents: "src/**/*.{ts,tsx}",
  generates: {
    "./generated/urql-codegen/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
  },
};

export default config;
