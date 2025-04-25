const Home = () => {
  return (
    <div className="m-2 space-x-1">
      {/* focus:클래스이름 으로 적용 */}
      <input
        type="text"
        className="rounded-md border p-2 focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:outline-none"
      />
      {/* hover:클래스이름 으로 적용 */}
      <button className="rounded-md border bg-sky-500 p-2 text-white hover:bg-sky-600">
        버튼
      </button>
    </div>
  );
};

export default Home;
