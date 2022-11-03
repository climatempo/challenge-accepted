import { useState } from "react";

export function UserContext() {
  const [name, setName] = useState("");

  return {
    name,
    setName,
  };
}
