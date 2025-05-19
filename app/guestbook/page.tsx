'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import GuestbookCard from "@/components/GuestbookCard";
import { Guestbook } from "../type/type";



export default function GuestBook() {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/users")
      .then((response) => {
        console.log("✅ 서버 응답:", response.data);

        const data = response.data;
        if (Array.isArray(data)) {
          setGuestbooks(data);
        } else if (Array.isArray(data.guestbooks)) {
          setGuestbooks(data.guestbooks);
        } else {
          console.error("⚠️ 예상과 다른 데이터 형식:", data);
        }
      })
      .catch((error) => console.error("❌ 데이터 요청 실패:", error));
  }, []);



  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-3xl font-bold mb-8 flex justify-between mr-4 ml-4">
        <h1>방명록</h1>
        <Link href="/guestbook/register">+</Link>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 border border-gray-300 rounded-lg shadow-md">
        {guestbooks.map((guestbook) => (
          <div key={guestbook.id}>
            <Link href={`/guestbook/${guestbook.id}`}>
              <GuestbookCard guestbook={guestbook} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
