import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4 flex flex-col gap-2">
      <h1 className="mb-2 text-3xl font-bold">Day1</h1>
      <ul>
        <li>
          <Link
            href={`/day1/ch1`}
            className="font-bold text-blue-700 underline"
          >
            1. Tailwind css 사용 이유와 사용법
          </Link>
        </li>
        <li>
          <Link
            href={`/day1/ch2`}
            className="font-bold text-blue-700 underline"
          >
            2. 기본 utility 클래스를 활용한 실습
          </Link>
        </li>
      </ul>
    </div>
  );
}
