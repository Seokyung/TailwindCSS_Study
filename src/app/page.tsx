import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4 flex flex-col gap-2">
      <h1 className="mb-2 text-3xl font-bold">TailwindCSS Study</h1>
      <ul>
        <li>
          <Link
            href={`/day1`}
            className="text-lg font-bold text-blue-700 underline"
          >
            Day1
          </Link>
        </li>
      </ul>
    </div>
  );
}
