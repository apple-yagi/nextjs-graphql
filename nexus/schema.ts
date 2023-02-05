import { DateTimeResolver } from "graphql-scalars";
import { asNexusMethod, makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

export const schema = makeSchema({
  types: [types, asNexusMethod(DateTimeResolver, "datetime", "Date")],
  outputs: {
    typegen: join(process.cwd(), "generated", "nexus-typegen", "index.d.ts"),
    schema: join(process.cwd(), "generated", "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "nexus", "context.ts"),
  },
});
