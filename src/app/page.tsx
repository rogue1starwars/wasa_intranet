import Link from "next/link";

export default function Page() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/map">map</Link>
        </li>
      </ul>
    </main>
  );
}
