import Link from "next/link";

type PageLink = {
  id: number;
  name: string;
};

const day1List: PageLink[] = [
  {
    id: 1,
    name: "1. Tailwind css 사용 이유와 사용법",
  },
  {
    id: 2,
    name: "2. 기본 utility 클래스를 활용한 실습",
  },
  {
    id: 4,
    name: "4. 지저분한 Tailwind css를 깔끔하게 작성하는 법",
  },
];

export default function Home() {
  return (
    <div className="m-4 flex flex-col gap-2">
      <h1 className="mb-2 text-3xl font-bold">TailwindCSS Study</h1>
      <ul>
        {day1List.map((item: PageLink) => (
          <li key={item.id}>
            <Link
              href={`/ch${item.id}`}
              className="font-bold text-blue-700 underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
