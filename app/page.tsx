import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to The Bookstore</h1>
      <Link href="/books">Books</Link>
    </main>
  )
}
