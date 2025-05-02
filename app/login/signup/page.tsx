'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: "",
    userPassWord: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      // 회원가입 API 호출
      const response = await axios.post("http://localhost:3001/login/signup", formData);
      console.log("Signup successful:", response.data);

      if (response.data.success) {
        // 회원가입 성공 시 로그인 페이지로 이동
        router.push("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("회원가입에 실패했습니다. 다른 아이디를 사용해주세요.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">회원가입</h1>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
            아이디
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="아이디를 입력하세요"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="userPassWord" className="block text-sm font-medium text-gray-700 mb-2">
            비밀번호
          </label>
          <input
            type="password"
            id="userPassWord"
            name="userPassWord"
            value={formData.userPassWord}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="w-1/4 mr-2 bg-blue-500 text-white py-1 px-3 text-sm rounded hover:bg-blue-600 transition-colors"
          >
            회원가입
          </button>
          <button
            type="button"
            onClick={() => router.push(`/login`)}
            className="w-1/4 bg-gray-100 text-gray-700 py-1 px-3 text-sm rounded hover:bg-gray-200 transition-colors"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}