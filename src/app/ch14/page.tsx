import FloatingLabelLoginForm from "@/components/FloatingLabelLoginForm";
import LoginForm from "@/components/LoginForm";

const Home = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습1] 로그인 폼에 hover, focus, dark 등 상태 실습하기
        </h1>
        <LoginForm />
      </div>
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습2] floating 라벨 실습하기
        </h1>
        <FloatingLabelLoginForm />
      </div>
    </div>
  );
};

export default Home;
