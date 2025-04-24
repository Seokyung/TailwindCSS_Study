import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Input from "@/components/Input";

const Home = () => {
  return (
    <div className="">
      <div className="space-y-4 bg-gray-200 px-2 py-4">
        <h1 className="text-2xl font-bold">
          [실습1] 재사용 가능한 Card 컴포넌트 만들기
        </h1>
        <Card variant="default" padding="sm" radius="sm" className="max-w-md">
          <h2 className="mb-4 text-xl font-bold">제목</h2>
          <p className="text-gray-600">내용</p>
        </Card>
        <Card variant="outlined" padding="md" radius="md" className="max-w-md">
          <h2 className="mb-4 text-xl font-bold">제목</h2>
          <p className="text-gray-600">내용</p>
        </Card>
        <Card variant="elevated" padding="lg" radius="lg" className="max-w-md">
          <h2 className="mb-4 text-xl font-bold">제목</h2>
          <p className="text-gray-600">내용</p>
        </Card>
      </div>
      <div className="space-y-4 bg-green-100 px-2 py-4">
        <h1 className="text-2xl font-bold">
          [실습2] 재사용 가능한 Input 컴포넌트 만들기
        </h1>
        <Input label="이름" placeholder="홍길동" />
        <Input
          label="이메일"
          type="email"
          error="올바른 이메일 형식이 아닙니다"
          variant="filled"
        />
        <Input
          label="전화번호"
          size="lg"
          disabled
          variant="outlined"
          placeholder="010-0000-0000"
        />
        <Input label="주소" fullWidth variant="outlined" />
      </div>
      <div className="bg-gray-200 px-2 py-4">
        <h1 className="text-2xl font-bold">
          [실습3] 재사용 가능한 Badge 컴포넌트 만들기
        </h1>
        <div className="space-y-4 space-x-3">
          <Badge>기본</Badge>
          <Badge variant="success" size="md">
            완료
          </Badge>
          <Badge variant="warning" outlined>
            주의
          </Badge>
          <Badge variant="danger" rounded size="xs">
            오류
          </Badge>
          <Badge variant="info" withDot>
            새 소식
          </Badge>
        </div>
      </div>
    </div>
  );
};
export default Home;
