import React, { useEffect, useState } from "react";

function Panel({ label }: { label: string }) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Panel mounted:", label);
    return () => console.log("Panel unmounted:", label);
  }, [label]);

  console.log("Panel render:", label);

  return (
    <div style={{ border: "1px solid #ccc", padding: 8 }}>
      <div>{label}</div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState<"A" | "B">("A");

  return (
    <div>
      <button onClick={() => setTab("A")}>Tab A</button>
      <button onClick={() => setTab("B")}>Tab B</button>

      <Panel key={tab} label={tab === "A" ? "First" : "Second"} />
    </div>
  );
}
