"use client";

import { useTranslation } from "react-i18next";

export default function AboutDesc() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-center items-center  bg-sky-100 mt-[100px] mb-[130px]">
        <div className=" max-w-[85vw] mx-auto   mb-[130px] ">
          <div className="text-left  flex flex-col">
            <h1 className="text-cyan-600 font-semibold text-[30px] mb-[15px] mt-[70px]">
              {t("whoWeAre")}
            </h1>
            <p className="max-w-[444px] font-medium text-[25px]">
              {t("whoWeAreDesc")}
            </p>
            <div className="flex text-[18] text-gray-500 mt-[40px] gap-10">
              <p className="w-[530px]"> {t("whoWeAreText1")}</p>
              <p className="w-[530px]"> {t("whoWeAreText2")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" flex flex-col justify-center items-center">
          <div>
            <h2 className="mb-[100px] text-[50px] text-cyan-600 font-semibold mt-[50px]">
              {t("ourMissionValues")}
            </h2>
          </div>
          {/* //! INOVAÇÃO */}
          <div className="flex items-center justify-between w-[85vw]">
            <div className="flex flex-col gap-[40px]">
              <h2 className="font-semibold text-[40px] text-gray-600">
                {t("inovation")}
              </h2>

              <p className="max-w-[650px] tracking-[0.17rem] leading-8 text-gray-500">
                {" "}
                {t("inovationDesc")}
              </p>
            </div>
            <div>
              <img
                src="/inovation_illustration.svg"
                alt="aboutUs_Illustration"
                className="max-w-[25vw]"
              />
            </div>
          </div>
          {/* //! QUALIDADE */}
          <div className="flex items-center justify-between w-[85vw] flex-row-reverse mt-[100px]">
            <div className="flex flex-col gap-[40px]">
              <h2 className="font-semibold text-[40px] text-gray-600 text-right">
                {t("quality")}
              </h2>

              <p className="max-w-[650px] tracking-[0.17rem] leading-8 text-gray-500 text-right">
                {" "}
                {t("qualityDesc")}
              </p>
            </div>
            <div>
              <img
                src="/quality_illustration.svg"
                alt="aboutUs_Illustration"
                className="max-w-[25vw]"
              />
            </div>
          </div>
          {/* //! MISSÃO */}
          <div className="flex items-center justify-between w-[85vw]  mt-[100px]">
            <div className="flex flex-col gap-[40px]">
              <h2 className="font-semibold text-[40px] text-gray-600 ">
                {t("mission")}
              </h2>

              <p className="max-w-[650px] tracking-[0.17rem] leading-8 text-gray-500 ">
                {t("missionDesc")}
              </p>
            </div>
            <div>
              <img
                src="/mission_illustration.svg"
                alt="aboutUs_Illustration"
                className="max-w-[25vw]"
              />
            </div>
          </div>
          {/* //! DIFERENCIAIS */}
          <div className="flex items-center justify-between bg-orange-50 mt-[100px] w-screen">
            <div className="w-[85vw] mx-auto py-[70px]">
              <h2 className="text-center text-[50px] text-gray-600">
                {" "}
                {t("ourDiff")}{" "}
              </h2>
              <div className="flex justify-around items-center">
                <div className="flex flex-col justify-center items-center  max-w-[500px]">
                  <img
                    src="/ourDiffMission_illustration.svg"
                    alt="aboutUs_Illustration"
                    className="max-h-[50vh]"
                  />

                  <h2 className="mt-[30px] text-[50px] font-semibold">
                    {" "}
                    {t("experience")}{" "}
                  </h2>
                  <p className="text-[14px]  mt-[20px] ">
                    {t("experienceDesc")}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center max-w-[500px]">
                  <img
                    src="/partners_illustration.svg"
                    alt="aboutUs_Illustration"
                    className="max-h-[50vh]"
                  />

                  <h2 className="mt-[30px] text-[50px] font-semibold">
                    {" "}
                    {t("partners")}{" "}
                  </h2>
                  <p className="text-[14px]  mt-[20px] ">{t("partnersDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
