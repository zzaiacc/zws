"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import InstagramIcon from "../public/instagram.svg";
import LinkedinIcon from "../public/linkedin.svg";
import WhatsAppIcon from "../public/whatsapp.svg";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center bg-blue-100 py-[100px] pb-[260px]">
      <div className="  max-w-[85vw] mx-auto ">
        <div className="text-center items-center flex flex-col">
          <h1 className="text-[50px] font-semibold text-cyan-600">
            {t("contact")}
          </h1>
          <p className="w-[70%] text-gray-500 font-semibold">
            {t("contactDesc")}
          </p>
        </div>

        <div className="md:flex mt-[100px] md:justify-between  md:items-start  gap-[150px] ">
          <div className="flex flex-col md:justify-center gap-[20px]  md:items-start xs:justify-center xs:items-center ">
            <div className="xs:text-center  md:text-left">
              <h2 className="text-cyan-600 font-medium text-[20px] mb-[5px]">
                {t("phone")}
              </h2>
              <h2 className="text-gray-500 font-semibold text-[15px]">
                +55 11 4305-3661
              </h2>
            </div>
            <div className="xs:text-center  md:text-left">
              <h2 className="text-cyan-600 font-medium text-[20px] mb-[5px] ">
                Email
              </h2>
              <h2 className="text-gray-500 font-semibold text-[15px] mb-[15px]">
                contato@zaiac.com.br
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center  md:items-start xs:items-center">
            <div className="xs:text-center md:text-left">
              <h2 className="text-cyan-600 font-medium text-[20px] mb-[5px]">
                {t("address")}
              </h2>
              <h2 className="text-gray-500 font-semibold text-[15px]">
                Rua Orlando Calixto, 92
              </h2>
              <h2 className="text-gray-500 font-semibold text-[15px]">
                Jardim Indepêndencia
              </h2>
              <h2 className="text-gray-500 font-semibold text-[15px] mb-[15px]">
                03236-000
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center  md:items-start xs:items-center">
            <h2 className="text-cyan-600 font-medium text-[20px] mb-[5px]">
              {t("socials")}
            </h2>
            <div>
              <ul className="flex gap-[30px]">
                <li>
                  <Link href="#">
                    <Image src={LinkedinIcon} className="hover:scale-90" />
                  </Link>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <Image src={InstagramIcon} className="hover:scale-90" />
                  </a>
                </li>
                <li>
                  <Link href="#">
                    <Image src={WhatsAppIcon} className="hover:scale-90" />
                  </Link>
                </li>
              </ul>
              <div className="mt-[30px] xs:text-center">
                <Link href={"/"}>
                  <p className="bg-orange-500 py-[8px] px-[28px] rounded-full text-white hover:bg-orange-400 duration-300">
                    {t("contactUs")}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
