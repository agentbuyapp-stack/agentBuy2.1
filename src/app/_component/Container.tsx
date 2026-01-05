import { ChevronsRight } from "lucide-react";
// import { useRef } from 'react';
// import VariableProximity from './VariableProximity';
export const Container = () => {
  return (
    <div className="w-full h-screen bg-linear-to-br from-[#E8F5FF] via-[#F5F9FF] to-[#EEF2FF] relative overflow-">
      {/* Animated gradient orbs */}
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

      {/* Floating images - scattered across the screen like Mobbin.com */}

      {/* Top left area */}
      <div
        className="absolute top-[8%] left-[6%]  sm:block"
        style={{ animation: "float-1 10s ease-in-out infinite" }}
      >
        <img
          src="./taobao.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>
      <div
        className="absolute top-[22%] left-[15%] md:block"
        style={{ animation: "float-3 10s ease-in-out infinite" }}
      >
        <img
          src="./pinduoduo.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>

      {/* Left middle area */}
      <div
        className="absolute top-[45%] left-[8%] lg:block"
        style={{ animation: "float-2 10s ease-in-out infinite" }}
      >
        <img
          src="./poizon.jpeg"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>
      <div
        className="absolute top-[58%] left-[4%] sm:block"
        style={{ animation: "float-5 6.5s ease-in-out infinite" }}
      >
        <img
          src="./alibaba.jpeg"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>

      {/* Bottom left area */}
      <div
        className="absolute top-[75%] left-[12%] md:block"
        style={{ animation: "float-4 8s ease-in-out infinite" }}
      >
        <img
          src="./taobao.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>
      <div
        className="absolute top-[85%] left-[6%] lg:block"
        style={{ animation: "float-1 6s ease-in-out infinite" }}
      >
        <img
          src="./pinduoduo.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>

      {/* Top right area */}
      <div
        className="absolute top-[12%] right-[8%] sm:block"
        style={{ animation: "float-4 8s ease-in-out infinite" }}
      >
        <img
          src="./poizon.jpeg"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>
      <div
        className="absolute top-[6%] right-[16%] md:block"
        style={{ animation: "float-2 7s ease-in-out infinite" }}
      >
        <img
          src="./alibaba.jpeg"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>

      {/* Right middle area */}
      <div
        className="absolute top-[38%] right-[5%] lg:block"
        style={{ animation: "float-5 6.5s ease-in-out infinite" }}
      >
        <img
          src="./taobao.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>
      <div
        className="absolute top-[52%] right-[12%] sm:block"
        style={{ animation: "float-3 5s ease-in-out infinite" }}
      >
        <img
          src="./pinduoduo.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>

      {/* Bottom right area */}
      <div
        className="absolute top-[72%] right-[8%] md:block"
        style={{ animation: "float-1 6s ease-in-out infinite" }}
      >
        <img
          src="./poizon.jpeg"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>
      <div
        className="absolute top-[82%] right-[14%] lg:block"
        style={{ animation: "float-2 7s ease-in-out infinite" }}
      >
        <img
          src="./alibaba.jpeg"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
        />
      </div>

      {/* Top center area */}
      <div
        className="absolute top-[10%] left-[42%] xl:block"
        style={{ animation: "float-5 6.5s ease-in-out infinite" }}
      >
        <img
          src="./taobao.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-80"
        />
      </div>

      {/* Bottom center area */}
      <div
        className="absolute top-[78%] left-[48%]  xl:block"
        style={{ animation: "float-4 8s ease-in-out infinite" }}
      >
        <img
          src="./poizon.jpeg"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-80"
        />
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 max-w-6xl w-full">
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-3">
            <p
              className="text-transparent bg-clip-text bg-linear-to-r from-[#0b4ce5] via-[#4a90e2] to-[#00d4ff] font-black text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] tracking-wider drop-shadow-lg text-center"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-shift 3s ease infinite",
              }}
            >
              AgentBuy
            </p>
            <p
              className="text-gray-700 font-bold text-[18px] sm:text-[24px] md:text-[30px] lg:text-[35px] tracking-tight text-center px-4"
              style={{ animation: "fade-in 1s ease-out" }}
            >
              системд тавтай морил
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full sm:w-auto px-4 sm:px-0">
            <button className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-3xl flex justify-center items-center w-full sm:w-40 h-12 sm:h-10 py-2 px-4 gap-2 cursor-pointer hover:opacity-80 border transition-all hover:scale-105">
              <p className="text-white font-bold text-[15px] sm:text-[22px] lg:text-[25px]">
                USER
              </p>
            </button>
            <button className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-3xl flex justify-center items-center w-full sm:w-40 h-12 sm:h-10 py-2 px-4 gap-2 cursor-pointer hover:opacity-80 border transition-all hover:scale-105">
              <p className="text-white font-bold text-[15px] sm:text-[22px] lg:text-[25px]">
                AGENTS
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
