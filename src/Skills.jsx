import React from "react";
import asal from "./assets/icons/asal.jpg";
import rezimi from "./assets/icons/rezimi.jpg";
import sobhane from "./assets/icons/sobhane.jpg";
import sobhane1 from "./assets/icons/sobhane1.jpg";


export const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* Start Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            مطالب پیشنهادی
          </p>
          <p className="py-4"> به سایر مطالب ما سربزنید</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* asal */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={asal} alt="HTML Logo" />
            <p className="my-4">asal</p>
          </div>
    
       
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={rezimi} alt="HTML Logo" />
            <p className="my-4">رژیمی</p>
          </div>

          {/* sobhane */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sobhane} alt="HTML Logo" />
            <p className="my-4">صبحانه</p>
          </div>

         
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sobhane1} alt="HTML Logo" />
            <p className="my-4">پنیر</p>
          </div>

  
        </div>
      </div>
    </div>
  );
};
