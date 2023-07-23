import { Book } from "../../types/interfaces";
import Books from "@/components/Books";

async function getBooks() {
  const url = "http://localhost:8080/api/books";
  const response = await fetch(url);
  const data: Book[] = await response.json();
  return data
}

export default async function BooksPage() {
  const books = await getBooks();
  return (
    <main>
      <h1>Here are the Books</h1>
      <Books books={books} />
    </main>
  );
}