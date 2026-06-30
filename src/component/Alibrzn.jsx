import myPHOTO from "../assets/myPHOTO.png";
import iconWeb from "../assets/iconWeb.svg";
import iconTelegram from "../assets/iconTelegram.svg";
import iconPhoneMe from "../assets/iconPhoneMe.svg";

export default function Alibrzn() {
  return (
    <div>
      <div className="div-alibrzn">
        <p className="text-gray-50">طراحی توسط Ali.B</p>
        <div className="-rotate-90 flex flex-col items-center justify-center">
          <img
            className="w-20 rounded-full shadow-2xl shadow-gray-950"
            src={myPHOTO}
            alt="myphoto"
          />
          <p className="flex flex-col items-center">
            علی برزنونی
            <div className="flex flex-row justify-center gap-2 items-center w-full">
              <a href="https://mavvi.ir">
                <img className="icon-social" src={iconWeb} alt="" />
              </a>
              <a href="https://t.me/alib_r">
                <img className="icon-social" src={iconTelegram} alt="" />
              </a>
              <a href="tel:09055513278">
                <img className="icon-social" src={iconPhoneMe} alt="" />
              </a>
            </div>
            برنامه‌نویس فرانت‌اند
          </p>
        </div>
      </div>
    </div>
  );
}
