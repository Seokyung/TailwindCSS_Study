const Home = () => {
  return (
    <div className="space-y-4">
      <div className="bg-applemint-500 h-48 w-48 px-2 py-1">
        <h1 className="text-mint-500 text-3xl font-extrabold">
          Custom Mint Color
        </h1>
      </div>
      {/* 임의 값 사용: 속성-[] */}
      <div className="typography bg-[#c7cce6]">
        <h1>Typo!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae
          autem esse, ipsum inventore, numquam incidunt saepe consectetur aut
          odit neque reprehenderit sed. Nemo velit quasi alias optio corporis
          dolorem.
        </p>
      </div>
    </div>
  );
};

export default Home;
