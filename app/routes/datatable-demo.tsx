import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Ping" },
    { name: "description", content: "Ping!" },
  ];
};


export default function DataTabeDemo() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Data Table Demo</h1>
    </div>
  );
}
