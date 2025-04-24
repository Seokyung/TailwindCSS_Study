export default function Home() {
  return (
    <div>
      <div className="bg-mint-500 text-mycolor-400">
        <h1>@theme 지시어를 활용하여 이미 존재하는 유틸리티 클래스 조작하기</h1>
      </div>
      <p className="my-class">
        @utility 지시어를 활용한 나만의 유틸리티 클래스 만들기
      </p>
      <p className="my-element">
        @variants 지시어를 활용한 다크모드, 호버 등 상태 변화 시 css 적용하기
      </p>
      <div>
        <p className="text-3xl font-bold">utility 클래스 직접 사용해보기</p>
        <p className="text-s">Text Size: s</p>
        <p className="text-xl">Text Size: xl</p>
        <div className="h-80 w-80 border-2 bg-blue-500">w-80</div>
        <div className="m-8 h-24 w-24 bg-yellow-700 p-16">w-24</div>
      </div>
    </div>
  );
}
