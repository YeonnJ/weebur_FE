"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

const testQueryKeys = {
  all: ["test"] as const,
};

const fetchTest = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
};

const TestPage = () => {
  const testQuery = useQuery({
    queryKey: testQueryKeys.all,
    queryFn: fetchTest,
  });

  return <div>{testQuery?.data?.title || ""}</div>;
};

export default TestPage;
