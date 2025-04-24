import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center gap-2">
        <button className="rounded-lg border-1 border-gray-300 bg-blue-800 px-4 py-2 text-white">
          Default
        </button>
        <button className="rounded-lg border-1 border-gray-300 bg-white px-4 py-2 text-black">
          Alternative
        </button>
        <button className="rounded-lg border-1 border-gray-300 bg-gray-800 px-4 py-2 text-white">
          Dark
        </button>
        <button className="rounded-lg border-1 border-gray-300 bg-white px-4 py-2 text-black">
          light
        </button>
        <button className="rounded-lg border-1 border-gray-300 bg-green-700 px-4 py-2 text-white">
          Green
        </button>
        <button className="rounded-lg border-1 border-gray-300 bg-red-700 px-4 py-2 text-white">
          Red
        </button>
        <button className="rounded-lg border-1 border-gray-300 bg-yellow-300 px-4 py-2 text-white">
          Yellow
        </button>
        <button className="rounded-lg border-1 border-gray-300 bg-purple-700 px-4 py-2 text-white">
          Purple
        </button>
      </div>
      <div>
        <div className="h-md bg-white-400 flex max-w-md flex-col items-center justify-center overflow-hidden rounded-lg border-1 border-gray-200 shadow-md">
          <div className="object-cover">
            <Image
              className="object-fill"
              alt="기술동향 이미지"
              width={1200}
              height={500}
              src={`/card.JPG`}
            />
          </div>
          <div className="px-4 py-5">
            <h3 className="mb-2 text-2xl font-bold">2025년 기술 동향</h3>
            <p className="mb-2 text-gray-700">
              최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를
              탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리 생활에
              미치는 영향을 다룹니다.
            </p>
            <button className="rounded-lg border-1 border-gray-300 bg-blue-800 px-4 py-2 text-white">
              더보기
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <form className="flex w-full max-w-sm flex-col">
          <div className="mb-4">
            <label className="block text-sm font-semibold">이메일</label>
            <input
              id="email"
              type="email"
              placeholder="abc@email.com"
              className="w-full rounded-md border-1 border-gray-200 bg-gray-50 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">비밀번호</label>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border-1 border-gray-200 bg-gray-50 p-2"
            />
          </div>
          <div className="mb-4">
            <input id="loginCheck" type="checkbox" className="mr-2" />
            <label htmlFor="loginCheck" className="text-sm font-semibold">
              로그인 상태 유지
            </label>
          </div>
          <button className="rounded-lg border-1 border-gray-300 bg-blue-800 px-4 py-2 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
