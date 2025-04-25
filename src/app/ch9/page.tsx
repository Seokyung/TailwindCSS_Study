import Image from "next/image";

const Home = () => {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 p-4 shadow-md">
      {/* 모바일: 세로 배치, 태블릿 이상: 가로 배치 */}
      <div className="flex flex-col gap-4 md:flex-row">
        {/* md 사이즈 이상에선 높이 h-62, 너비 w-1/2 */}
        <div className="relative h-48 w-full md:h-62 md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            objectFit="cover"
            fill
            alt="샘플 이미지"
          />
        </div>
        {/* md 사이즈 이상에선 너비 w-1/2 */}
        <div className="w-full md:w-1/2">
          {/* md 사이즈 이상에선 글자 크기 text-2xl, lg 사이즈에선 text-3xl */}
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
            반응형 카드 제목
          </h2>
          {/* md 사이즈 이상에선 글자 크기 text-base, lg 사이즈에선 text-lg */}
          <p className="mt-2 text-sm md:text-base lg:text-lg">
            화면 크기에 따라 달라지는 내용입니다!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
