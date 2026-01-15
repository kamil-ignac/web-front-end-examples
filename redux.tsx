import React from "react";
import { useSelector } from "react-redux";

type RootState = {
  users: { id: number; name: string }[];
  ui: { selectedId: number | null };
};

export default function UserName() {
  const user = useSelector((s: RootState) =>
    s.users.find((u) => u.id === s.ui.selectedId)
  );

  console.log("UserName render");

  return <div>{user ? user.name : "No user selected"}</div>;
}
