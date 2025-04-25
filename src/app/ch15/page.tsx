import Image from "next/image";

const Home = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습1] unsplash, pinterest와 같은 이미지 나열하기
        </h1>
        <div className="columns-2 gap-6 space-y-5 md:columns-3 lg:columns-4">
          <Image
            alt="Image 1"
            width={300}
            height={500}
            className="aspect-3/2 rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1742943679521-f4736500a471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          />
          <Image
            alt="Image 2"
            width={300}
            height={500}
            className="aspect-2/3 rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1742925602178-0f5939ee6845?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          />
          <Image
            alt="Image 3"
            width={300}
            height={500}
            className="aspect-3/2 rounded-xl shadow-lg"
            src="https://plus.unsplash.com/premium_photo-1742202420319-e933c71d4495?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
          />
          <Image
            alt="Image 4"
            width={300}
            height={500}
            className="aspect-3/5 rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1743031031851-bffbe65f338f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
          />
          <Image
            alt="Image 5"
            width={300}
            height={500}
            className="aspect-2/3 rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1743010768826-cc10a67e3b3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Image
            alt="Image 6"
            width={300}
            height={500}
            className="aspect-square rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1741812191037-96bb5f12010a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
          />
          <Image
            alt="Image 7"
            width={300}
            height={500}
            className="aspect-2/3 rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1742576948659-3c630862a38d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습2] 그라디언트 아이콘 연습하기
        </h1>
        <div className="flex h-screen items-center justify-center">
          <span className="h-[30px] w-[30px] rounded-full bg-linear-45 from-[#096cde] via-[#096cde] via-30% to-[#ddf1ff] shadow-xl/60 shadow-gray-500" />
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          [실습3] 그라디언트 텍스트 연습하기
        </h1>
        <div className="flex h-screen items-center justify-center">
          <span className="bg-linear-to-r from-[#15c064] to-[#00d1ff] bg-clip-text py-2.5 text-9xl font-extrabold text-transparent">
            Codify
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
