import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="m-4">
      <h1 className="title">안녕~~</h1>
      <div className="space-y-4 bg-gray-200 p-4">
        <Button>기본 버튼</Button>
        <Button variant="secondary" size="lg">
          큰 보조 버튼
        </Button>
        <Button variant="outline" size="sm">
          작은 윤곽선 버튼
        </Button>
        <Button variant="ghost" fullWidth>
          전체 너비 고스트 버튼
        </Button>
        <Button variant="link">링크 버튼</Button>
        <Button disabled>비활성화 버튼</Button>
        <Button className="bg-purple-600 hover:bg-purple-700">
          사용자 정의 스타일 버튼
        </Button>
      </div>
    </div>
  );
};

export default Home;
