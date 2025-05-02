'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [userId, setUserId] = useState<string | null>(null);


  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) setUserId(storedUserId);

    const handleStorageChange = () => {
      const newUserId = localStorage.getItem("userId");
      setUserId(newUserId);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
    window.location.href = "/";
  };

  return (
    <header className="bg-gradient-to-r from-indigo-800 via-blue-700 to-indigo-900 shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" className="text-white text-2xl font-bold tracking-wide hover:opacity-90 transition-opacity">
          YooGayeong
        </Link>

        {/* 우측 메뉴 */}
        <div className="flex items-center space-x-4">
          {userId && (
            <span className="text-white text-sm font-semibold tracking-wide opacity-90">
              {userId}님 환영합니다
            </span>
          )}

          <Link
            href="/guestbook"
            className="text-sm text-white underline hover:text-gray-200 transition"
          >
            방명록
          </Link>

          {userId ? (
            <button
              onClick={handleLogout}
              className="text-sm text-white underline bg-transparent border-none px-2 py-1 hover:text-red-300 transition"
            >
              로그아웃
            </button>
          ) : (
            <Link
              href="/login"
              className="text-sm text-white underline bg-transparent border-none px-2 py-1 hover:text-blue-300 transition"
            >
              로그인
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
