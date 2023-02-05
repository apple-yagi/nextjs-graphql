import { useAllUsersWithVariablesQuery } from "@generated/urql-codegen/graphql";
import gql from "graphql-tag";

gql(`
  query AllUsersWithVariables {
    users {
      id,
      name,
      email
    }
  }
`);

export default function Home() {
  const [res] = useAllUsersWithVariablesQuery();

  return (
    <ul>
      {res.data?.users?.map((user) => (
        <li key={user?.id}>{user?.name}</li>
      ))}
    </ul>
  );
}
