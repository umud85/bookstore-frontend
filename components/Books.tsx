import { Book } from "../types/interfaces";


export default function Books({ books }: { books: Book[] }) {
  return (
    <section>
      <ul>
        {books.map((book) => <li key={book.id.timestamp}>{book.title}</li>)}
      </ul>
    </section>
  );
}