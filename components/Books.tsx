"use client";

import { Book } from "../types/interfaces";
import { useSession } from "next-auth/react";


export default function Books({ books }: { books: Book[]; }) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <section>
        <ul>
          {books.map((book) => <li key={book.id.timestamp}>{book.title}</li>)}
        </ul>
      </section>
    );
  }

  return (
    <>
      <p>You are not signed in.</p>
      <a href="/api/auth/signin">Sign in</a>
      </>
  );
}