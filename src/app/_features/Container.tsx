"use client";
import { useRouter } from "next/navigation";
import { AnimatedIconsHome } from "../_components/animatedIconsHome";

export const Container = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-linear-to-br from-[#E8F5FF] via-[#F5F9FF] to-[#EEF2FF] relative overflow-">
      <div
        className="absolute top-0 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        style={{ animation: "float-3 20s ease-in-out infinite" }}
      ></div>
      <div
        className="absolute -top-40 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        style={{ animation: "float-2 25s ease-in-out infinite" }}
      ></div>
      <div
        className="absolute bottom-20 right-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"
        style={{ animation: "float-5 22s ease-in-out infinite" }}
      ></div>
      <div
        className="absolute bottom-40 -left-20 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl"
        style={{ animation: "float-4 18s ease-in-out infinite" }}
      ></div>

      <AnimatedIconsHome
        classname="absolute top-[8%] left-[6%]  sm:block"
        style="float-1 10s ease-in-out infinite"
        imgURL="./taobao.png"
      />
      <AnimatedIconsHome
        classname="absolute top-[22%] left-[15%] md:block"
        style="float-3 10s ease-in-out infinite"
        imgURL="./pinduoduo.png"
      />

      <AnimatedIconsHome
        classname="absolute top-[45%] left-[8%] lg:block"
        style="float-2 10s ease-in-out infinite"
        imgURL="./poizon.jpeg"
      />
      <AnimatedIconsHome
        classname="absolute top-[58%] left-[4%] sm:block"
        style="float-5 6.5s ease-in-out infinite"
        imgURL="./alibaba.jpeg"
      />

      <AnimatedIconsHome
        classname="absolute top-[75%] left-[12%] md:block"
        style="float-4 8s ease-in-out infinite"
        imgURL="./alipay.png"
      />
      <AnimatedIconsHome
        classname="absolute top-[85%] left-[6%] lg:block"
        style="float-1 6s ease-in-out infinite"
        imgURL="./pinduoduo.png"
      />

      <AnimatedIconsHome
        classname="absolute top-[12%] right-[8%] sm:block"
        style="float-4 8s ease-in-out infinite"
        imgURL="./poizon.jpeg"
      />
      <AnimatedIconsHome
        classname="absolute top-[6%] right-[16%] md:block"
        style="float-2 7s ease-in-out infinite"
        imgURL="./alibaba.jpeg"
      />

      <AnimatedIconsHome
        classname="absolute top-[38%] right-[5%] lg:block"
        style="float-5 6.5s ease-in-out infinite"
        imgURL="./taobao.png"
      />
      <AnimatedIconsHome
        classname="absolute top-[52%] right-[12%] sm:block"
        style="float-3 5s ease-in-out infinite"
        imgURL="./pinduoduo.png"
      />

      <AnimatedIconsHome
        classname="absolute top-[72%] right-[8%] md:block"
        style="float-1 6s ease-in-out infinite"
        imgURL="./poizon.jpeg"
      />
      <AnimatedIconsHome
        classname="absolute top-[82%] right-[14%] lg:block"
        style="float-2 7s ease-in-out infinite"
        imgURL="./alibaba.jpeg"
      />

      <AnimatedIconsHome
        classname="absolute top-[10%] left-[42%] xl:block"
        style="float-5 6.5s ease-in-out infinite"
        imgURL="./taobao.png"
      />

      <AnimatedIconsHome
        classname="absolute top-[78%] left-[48%] xl:block"
        style="float-4 8s ease-in-out infinite"
        imgURL="./poizon.jpeg"
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 max-w-6xl w-full">
          <div className="flex flex-col justify-center items-center gap-3 sm:gap-4">
            <p
              className="text-transparent bg-clip-text bg-linear-to-r from-[#0b4ce5] via-[#4a90e2] to-[#00d4ff] font-black text-[56px] sm:text-[88px] md:text-[110px] lg:text-[140px] tracking-tight text-center leading-none"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-shift 3s ease infinite",
                WebkitTextStroke: "1.5px rgba(11, 76, 229, 0.15)",
                textShadow:
                  "0 10px 40px rgba(11, 76, 229, 0.3), 0 0 60px rgba(74, 144, 226, 0.2)",
              }}
            >
              AgentBuy
            </p>
            <div className="flex flex-col items-center gap-2">
              <p
                className="text-gray-800 font-semibold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] tracking-tight text-center px-4 leading-tight"
                style={{
                  animation: "fade-in 1.2s ease-out",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                системд тавтай морил
              </p>
              <p
                className="text-gray-500 font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center px-6 max-w-2xl"
                style={{
                  animation: "fade-in 1.5s ease-out",
                  letterSpacing: "0.02em",
                }}
              >
                Таны найдвартай хятадын онлайн худалдааны партнер
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
            <button
              className="group relative bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] rounded-2xl flex justify-center items-center w-full sm:w-52 h-14 sm:h-16 px-8 py-4 cursor-pointer border-2 border-white/20 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105 overflow-hidden"
              onClick={() => router.push("/user")}
            >
              <div className="absolute inset-0 bg-linear-to-r from-[#4a90e2] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-white font-bold text-[18px] sm:text-[20px] tracking-wide">
                Хэрэглэгч
              </span>
            </button>
            <button
              className="group relative bg-linear-to-r from-[#4a90e2] to-[#00d4ff] rounded-2xl flex justify-center items-center w-full sm:w-52 h-14 sm:h-16 px-8 py-4 cursor-pointer border-2 border-white/20 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-600/50 hover:scale-105 overflow-hidden"
              onClick={() => router.push("/admin")}
            >
              <div className="absolute inset-0 bg-linear-to-r from-[#00d4ff] to-[#0b4ce5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-white font-bold text-[18px] sm:text-[20px] tracking-wide">
                Агент
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
