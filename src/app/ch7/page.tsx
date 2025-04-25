"use client";

import { useState } from "react";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="space-y-4">
      <div>
        <h1>1. 간단한 다크모드 구현 (OS 설정에 따라 라이트/다크모드가 바뀜)</h1>
        <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 text-white shadow-lg">
              아이콘
            </span>
          </div>
          <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
      <div>
        <h1>2. 수동으로 다크모드 처리하는 법 (state)</h1>
        <div className={`${isDark ? "dark" : ""}`}>
          <h1 className="dark:bg-black dark:text-white">다크모드</h1>
          <button
            className="rounded-md border border-gray-300 p-2"
            onClick={() => setIsDark(!isDark)}
          >
            다크모드 토글
          </button>
        </div>
      </div>
      <div>
        <h1>3. </h1>
      </div>
    </div>
  );
};

export default Home;
