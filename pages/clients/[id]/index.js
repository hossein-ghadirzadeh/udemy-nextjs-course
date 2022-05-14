import React from "react";
import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    // navigate programmatically
    // router.push("/clients/hossein/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "hossein", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
