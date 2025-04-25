"use client";

import { ReactNode, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // context api를 사용하셔도 됩니다.
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    // localStorage를 추가해도 됩니다.
    setIsDark(!isDark);
  };

  return (
    // <div className={`${isDark ? "dark" : ""} max-w-md`}>
    <div data-theme={isDark ? "dark" : ""} className="max-w-md">
      {children}
      <button
        className="rounded-md border border-gray-300 p-2"
        onClick={toggleDarkMode}
      >
        다크모드 버튼
      </button>
    </div>
  );
};

export default ThemeProvider;
