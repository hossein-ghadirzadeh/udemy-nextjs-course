import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  const clients = [
    {
      id: "hossein",
      name: "Hossein",
    },
    {
      id: "ali",
      name: "Ali",
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* Try to use an alternative way of building the link as follows: */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
