"use client";

import { useState } from "react";

export function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Client Component</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
}
