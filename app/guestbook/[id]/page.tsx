'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Guestbook } from "@/app/type/type";




export default function GuestbookCards() {
  const { id } = useParams(); // URL에서 id 추출
  const router = useRouter();
  const [guestbookDetails, setGuestbookDetails] = useState<Guestbook | null>(null); // 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

  useEffect(() => {
    const fetchGuestbook = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3001/users/${id}`); // id를 URL에 삽입
        setGuestbookDetails(response.data);
      } catch (error) {
        console.error("데이터를 불러오는 데 실패했습니다:", error);
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    if (id) {
      fetchGuestbook(); // 비동기 함수 호출
    }
  }, [id]);

  const handleDelete = async () => {
    const confirmed = confirm("정말로 삭제하시겠습니까?");
    if (confirmed && guestbookDetails) {
      try {
        await axios.delete(`http://13.124.55.250:3001/users/${guestbookDetails.id}`); // 삭제 API 호출
        console.log(`${guestbookDetails.id}번 방명록이 삭제되었습니다.`);
        router.push("/guestbook"); // 삭제 후 리디렉션
      } catch (error) {
        console.error("삭제 요청 실패:", error);
        alert("삭제에 실패했습니다.");
      }
    }
  };
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-center text-gray-500">로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  if (!guestbookDetails) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-center text-gray-500">방명록 데이터를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{guestbookDetails.author}</h3>
          <p className="text-sm text-gray-500">
            {new Date(guestbookDetails.createdAt).toLocaleDateString()}
          </p>
        </div>
        <span className="text-gray-500">{guestbookDetails.likes} ❤️</span>
      </div>
      <p className="text-gray-700">{guestbookDetails.content}</p>
      {/* 삭제 버튼 추가 */}
      <button
        onClick={handleDelete}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        삭제
      </button>
    </div>
  );
}