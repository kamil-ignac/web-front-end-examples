import React, { useEffect, useState, memo } from "react";

const Child = memo(function Child({
  userId,
  onSelect,
  options,
}: {
  userId: number;
  onSelect: (id: number) => void;
  options: { showDetails: boolean };
}) {
  useEffect(() => {
    console.log("Child effect: userId changed ->", userId);
    return () => console.log("Child cleanup for userId ->", userId);
  }, [userId]);

  console.log("Child render");

  return (
    <div>
      <button onClick={() => onSelect(userId)}>Select</button>
      {options.showDetails ? <div>Details for {userId}</div> : null}
    </div>
  );
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(1);

  const options = { showDetails: count % 2 === 0 };

  const onSelect = (id: number) => {
    console.log("Selected", id);
  };

  console.log("Parent render");

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setUserId((u) => u + 1)}>Next user</button>

      <Child userId={userId} onSelect={onSelect} options={options} />
    </>
  );
}
