import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ashpaz from "./assets/icons/ashpaz.jpg";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0b0a2f]">
      {/* Start Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">من یک سراشپز هستم</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          میخوام در مورد غذاهای گیاهی براتون توضیح بدم
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          غذا های گیاهی غذاهای سالمی هستند
        </h2>
        <img className="w-full " src={ashpaz} alt="اشپزی" />
        <p className="text-[#8892b0] py-4 max-w-[700px]">
         دستور گیاه خواری
همانطور که گفته شد دستور گیاه خواری گاه از جانب پزشک برای ارتقای سلامتی صادر می‌شود؛ اما بسیاری از افراد به دلایل فلسفی همچون حمایت از حیوانات و یا جلوگیری از آلودگی محیط زیست اقدام به پیروی از رژیم گیاه خواری می‌نمایند. به‌صورت کلی رژیم‌هایی که در آن‌ها مصرف برخی مواد غذایی محدود می‌شود ویا برخی مواد غذایی از آن حذف می‌شوند، رژیم‌های کامل و درستی برای انسان نیستند و تنها برای مدت محدود و تحت نظر پزشک قابل انجام هستند. به همین دلیل باید پیش از اقدام به گرفتن رژیم با فواید و مضرات آن آشنا شویم. در ادامه فواید و مضرات گیاه خواری را برای شما گفته‌ایم.
گیاه خواری می‌تواند فواید بسیاری داشته باشد و به همین دلیل افراد زیادی اقدام به رژیم گرفتن می‌نمایند. موارد زیر از مهم‌ترین فواید گیاهخواری هستند:

کاهش فشار خون: گیاه خواری می‌تواند برای بسیاری از افراد که مشکل فشار خون دارند، مفید باشد و با محدود کردن غذاهای گوشتی و فرآوری شده، به کاهش فشار خون آن‌ها کمک کند.
کاهش اوره: یکی از دلایل مهمی که ممکن است پزشکان برای برخی افراد دستور گیاه خواری تجویز کنند، افزایش اوره و اسید اوریک در بدن آن‌هاست. البته در این صورت نیز اغلب مصرف گوشت محدود می‌شود و پزشک تغذیه، آن را به‌طور کامل حذف نمی‌کند.
سبک زندگی سالم و طول عمر طولانی‌تر: مواد غذایی فرآوری شده، انواع چربی اشباع و کلسترول در این رژیم غذایی به‌واسطه حذف گوشت و تخم مرغ کاهش پیدا می‌کند و به همین دلیل در سلامتی افراد نقش موثری دارد.
حمایت از حیوانات و محیط زیست: بسیاری از افراد به دلیل علاقه‌ای که به حیوانات دارند و برای ممانعت از کشته شدن آنها به رژیم گیاهخواری روی می‌آورند. این رژیم غذایی همچنین به دلیل کاهش آزاد شدن گازهای گلخانه‌ای ناشی از کشتار دام به حفظ محیط زیست کمک بسیاری می‌کند.
کنترل دیابت رژیم غذایی: گیاه خواری همچنین در بسیاری از افراد به کنترل علائم دیابت و کمک به کاهش مصرف داروهای دیابت منجر شده است.
کنترل چاقی و اضافه وزن: بسیاری از افراد به کمک رژیم گیاه خواری به روند لاغری خود کمک کرده‌اند و در حقیقت از این رژیم غذایی به عنوان یک رژیم لاغری استفاده می‌کنند
        </p>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Home;
