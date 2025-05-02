import { Guestbook } from "@/app/type/type";


interface GuestbookCardProps {
  guestbook?: Guestbook; // guestbook를 선택적으로 처리
}

export default function GuestbookCard({ guestbook }: GuestbookCardProps) {
  if (!guestbook) {
    return <div>Loading...</div>; // guestbook이 undefined일 때 처리
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{guestbook.author}</h3>
          <p className="text-sm text-gray-500">{new Date(guestbook.createdAt).toLocaleDateString()}</p>
        </div>
        <span className="text-gray-500">{guestbook.likes} ❤️</span>
      </div>
      <p className="text-gray-700">{guestbook.content}</p>
    </div>
  );
}