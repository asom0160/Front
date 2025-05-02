"use client";

import { motion } from "framer-motion";

const Introduce: React.FC = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="px-6 py-20 sm:px-12 lg:px-32 bg-gradient-to-b from-white to-stone-100"
    >
      <div className="max-w-5xl mx-auto text-center text-stone-800 leading-relaxed space-y-6">
        {/* 타이틀 */}
        <h3 className="text-4xl sm:text-3xl font-extrabold mb-6 tracking-tight">
          안녕하세요,{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
            끊임없이 성장하는 웹 개발자 유가영
          </span>
          입니다
        </h3>

        {/* 본문 */}
        <p className="text-lg">
          비전공자이지만, 새로운 도전을 두려워하지 않고{" "}
          <span className="font-semibold text-stone-700">국비지원 교육을 통해 개발의 길</span>에 들어섰습니다.
          매일 성장하고자 하는 의지를 바탕으로 기초부터 차근차근 실력을 쌓아가며 개발자로서의 기반을 다졌습니다.
        </p>

        <p className="text-lg">
          현재는{" "}
          <span className="text-indigo-600 font-medium">
            React, Next.js, NestJS, JavaScript, Node.js, Express, MySQL
          </span>{" "}
          등의 기술을 활용해 프론트엔드부터 백엔드까지 웹 전반에 걸친 프로젝트를 수행하고 있습니다.
        </p>

        <p className="text-lg">
          사용자 중심의 경험을 설계하는 데에 깊은 관심을 갖고 있으며, 기술적 완성도와 더불어{" "}
          <span className="font-semibold">협업과 커뮤니케이션</span>의 중요성을 항상 고민합니다.
        </p>

        <p className="text-md pt-6 text-stone-700">
          아직 배워야 할 것이 많지만,{" "}
          <span className="text-indigo-600 font-semibold">꾸준한 학습과 도전</span>을 통해 한 걸음씩 성장 중입니다.
          앞으로는 사람들의 일상에 긍정적인 영향을 줄 수 있는{" "}
          <span className="text-indigo-600 font-semibold">가치 있는 서비스</span>를 만드는 개발자가 되고 싶습니다.
        </p>
      </div>
    </motion.section>
  );
};

export default Introduce;
