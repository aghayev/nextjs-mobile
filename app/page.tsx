import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </main>
  )
}
