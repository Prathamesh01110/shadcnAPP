'use client';

import Header from "@/component/header";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function Student() {
  const [count, setCount] = useState("this is a string");
  const [user, setUser] = useState("");

  function submit() {
    setCount("i changed the string");
    console.log("button pressed");
  }

  function handleChange(e) {
    setUser(e.target.value);
  }

  return (
    <>
      <Header />
      <p>{count}</p>
{user}
      <h1 style={{ margin: "5px" }}>Student1</h1>
      <h1 className="m-5">Student2</h1>

      <Button onClick={submit}>click me</Button>

      <input
        type="text"
        value={user}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="Enter your name"
      />
    </>
  );
}
