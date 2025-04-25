"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  toggleDarkMode: (newTheme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme은 ThemeProvider 내부에서 사용해야 합니다.");
  }

  return context;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // 1. 테마 상태 관리
  const [isDark, setIsDark] = useState<boolean>(() => {
    // 2. 로컬스토리지에 theme 값이 존재한다면 그걸 초기값으로 한다.
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }

    // 3. 현재 OS 시스템이 다크모드라면
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }

    // 4. 모든 경우가 아니라면 라이트 모드를 기본값으로 한다.
    return false;
  });

  const toggleDarkMode = (newTheme: "light" | "dark" | "system") => {
    // 시스템 모드 선택 시
    if (newTheme === "system") {
      // 시스템 모드 선택 시 로컬스토리지에서 theme 값 제거
      localStorage.removeItem("theme");
      // 시스템 모드 선택 시 현재 OS 시스템의 모드를 따른다.
      setIsDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? true
          : false,
      );
    } else {
      // 라이트 또는 다크 모드 선택 시
      localStorage.setItem("theme", newTheme);
      setIsDark(newTheme === "dark");
    }
  };

  // theme 변경 시 루트 태그(html)에 dark 클래스 추가
  useEffect(() => {}, []);

  return (
    <ThemeContext.Provider value={{ toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
