import Image from "next/image";
import Link from "next/link";

const Hamburger = () => {
  return (
    <svg
      className="h-6 w-6 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 17 14"
    >
      <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
    </svg>
  );
};

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const Home = async () => {
  // 무료 상품 API 문서: https://fakestoreapi.com/docs
  let products: [];
  let product;

  try {
    const response1 = await fetch("https://fakestoreapi.com/products");
    products = await response1.json();
  } catch {
    throw Error("상품 목록 조회 중 에러 발생");
  }

  try {
    const response3 = await fetch("https://fakestoreapi.com/products/1");
    product = await response3.json();
  } catch {
    throw Error("상품 상세 조회 중 에러 발생");
  }

  return (
    <div className="mb-20 space-y-8">
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습1] 상품 목록 반응형 적용하기
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: Product) => (
            <div key={product.id} className="border shadow-sm">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
              <h1>{product.title}</h1>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습2] 네비게이션바 반응형 적용하기
        </h1>
        <div className="bg-blue-200">
          {/* 태블릿 이상 버전 메뉴 */}
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/">코드잇 단기심화</Link>
            <Link href="/bootcamp">부트캠프</Link>
            <Link href="/job-support">취업 지원</Link>
            <Link href="/blog">후기&블로그</Link>
          </div>
          {/* 모바일 버전 메뉴 */}
          <div className="block md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습3] 상품 상세 반응형 적용하기
        </h1>
        <div className="flex flex-col items-center gap-4 border-2 border-gray-200 px-2 py-4 shadow-md md:flex-row">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <div>
            <h1 className="text-xl font-bold md:text-2xl">{product.title}</h1>
            <p className="md:text-md text-sm text-gray-500">
              {product.description}
            </p>
            <p className="text-md font-bold md:text-lg">$ {product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
