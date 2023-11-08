"use client";

import { revalidateTag } from "next/cache";
import { FormEvent } from "react";

export default function StocksCreatePage() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");

    await fetch("http://localhost:3000/api/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
      }),
    });
  }

  return (
    <div>
      <h1>Stocks Create Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="text-black"
        />
        <br />
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          className="text-black"
        />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
