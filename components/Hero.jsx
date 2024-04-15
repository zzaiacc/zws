"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import heroIllustrion from "../public/hero_illustration.svg";
import Link from "next/link";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="  bg-gradient-to-bl from-blue-50 to-blue-100 mt-[-115px]">
      <div className="max-w-[85vw] flex justify-between mx-auto items-center my-auto h-screen">
        <div>
          <h1 className="uppercase lg:text-[100px] leading-[0.9] font-semibold text-cyan-600">
            Zaiac Tecnologia
          </h1>
          <h3 className="text-[20px] py-[30px] max-w-[55%]">
            {t("heroSubTitle")}
          </h3>
          <div className="w-fit">
            <Link href={"/"}>
              <p className="bg-orange-500 py-[12px] px-[28px]  text-white hover:bg-orange-400 duration-300">
                {t("contactUs")}
              </p>
            </Link>
          </div>
        </div>
        <div>
          <Image src={heroIllustrion} />
        </div>
      </div>
    </div>
  );
}
