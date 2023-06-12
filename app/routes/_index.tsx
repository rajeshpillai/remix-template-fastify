import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

 import userLoader from "../../api/user-loader.server";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data =  await resp.json();
  console.log("loader: Data: ", data[0]);
  console.log("userloader: Data: ", userLoader[0]);
  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log("Render: Data: ", data[0]);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>

    </div>
  );
}
