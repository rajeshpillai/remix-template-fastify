import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data =  await resp.json();
  console.log("loader: Data: ", new Date(), data[0]);
  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log("Render: DataXX: ", new Date().toISOString(), data[0]);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix 🎉 118</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
