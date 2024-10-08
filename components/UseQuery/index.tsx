"use client";

import { useQuery } from "@tanstack/react-query";

const index = () => {
  const result = useQuery({
    queryKey: ["Posts"],
    queryFn: async function name() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      return data.json();
    },
  });
  console.log(result);
  return (
    <>
      {result.isPending ? (
        <p>Loading</p>
      ) : (
        result.data?.map((item: any) => {
          return <p key={item.id}>{item.title}</p>;
        })
      )}
    </>
  );
};

export default index;
