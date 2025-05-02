import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { SiKakaotalk } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        {/* 이름 섹션 */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-400 mt-2 italic">
            &quot;작은 디테일이 큰 차이를 만듭니다. 함께 성장할 준비가 되어 있습니다.&quot;
          </p>
        </div>

        {/* 연락처 섹션 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 bg-gray-800 p-8 rounded-lg">
          {/* 인스타그램 */}
          <div className="flex flex-col items-center gap-2 text-center">
            <IoLogoInstagram size={30} className="text-pink-500" />
            <span className="text-lg font-medium">a_som_ing</span>
          </div>

          {/* 이메일 */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 whitespace-nowrap">
              <TfiEmail /> Email
            </h2>
            <div className="text-sm">
              <p>asom2002@naver.com</p>
              <p>asom8650@gmail.com</p>
            </div>
          </div>

          {/* 깃허브 주소 */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 whitespace-nowrap">
              <FaGithub /> gitHub
            </h2>
            <div className="text-sm">
              <p>https://github.com/dashboard</p>
            </div>
          </div>

          {/* 카카오톡 */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 whitespace-nowrap">
              <SiKakaotalk /> 카카오톡
            </h2>
            <img
              src="/kakao.jpg"
              alt="카카오톡 QR코드"
              className="w-24 h-24 rounded-md shadow-md"
            />
          </div>
        </div>

        {/* 하단 문구 */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>© 2025 유가영. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
