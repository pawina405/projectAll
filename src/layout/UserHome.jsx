import React from 'react';
import Search from './Search';

export default function UserHome() {
  return (
<div className="w-1140 h-auto">
  <Search />
  <div className="text-center mt-5 ">
  <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
  <hr className="my-5 w-4/5 mx-auto mt-10" />
  <div className="flex justify-around">
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">ขายดี</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">แนะนำ</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">มาใหม่</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
  </div>
  <hr className="my-5 w-4/5 mx-auto mt-5" />
  <img src="/src/pic/pomote.png" alt="pomote" className="block mx-auto mt-10" />
</div>

<div className="flex mb-4">
<div className="flex-1 bg-gray-400 h-12"></div>
  <div className="flex-1 h-12">
  <a href="#" className="text-white hover:underline mb-2">หมวดหนังสือ</a>
  <a href="#" className="text-white hover:underline mb-2">นิยาย</a>
  <a href="#" className="text-white hover:underline mb-2">หนังสือวาย ยูริ</a>
  <a href="#" className="text-white hover:underline mb-2">นิยาแปล</a>
  <a href="#" className="text-white hover:underline mb-2">วรรณกรรม</a>
  <a href="#" className="text-white hover:underline mb-2">หนังสือบทความ สารคดี</a>
  <a href="#" className="text-white hover:underline mb-2">หนังสือเตรียมสอบ แนวข้อสอบ</a>
  <a href="#" className="text-white hover:underline mb-2">การ์ตูน</a>
  <a href="#" className="text-white hover:underline mb-2">หนังสือเด็ก</a>
  <a href="#" className="text-white hover:underline mb-2">แม่และเด็ก</a>
  <a href="#" className="text-white hover:underline mb-2">จิตวิทยา การพัฒนาตัวเอง</a>
  <a href="#" className="text-white hover:underline mb-2">สินค้าไลฟ์สไตล์</a>
  <a href="#" className="text-white hover:underline mb-2">บริหาร ธุรกิจ</a>
  <a href="#" className="text-white hover:underline mb-2">คอมพิวเตอร์</a>
  <a href="#" className="text-white hover:underline mb-2">หนังสือท่องเที่ยว</a>
  <a href="#" className="text-white hover:underline mb-2">ธรรมะ ศาสนา และปรัชญา</a>
  <a href="#" className="text-white hover:underline mb-2">บ้านและสวน</a>
  <a href="#" className="text-white hover:underline mb-2">สุขภาพ ความงาม</a>
  <a href="#" className="text-white hover:underline mb-2">งานอดิเรก งานฝีมือ</a>
  <a href="#" className="text-white hover:underline mb-2">โหราศาสตร์ ดูดวง ฮวงจุ้ย</a>
  <a href="#" className="text-white hover:underline mb-2">หนังสือต่างประเทศ</a>
  <a href="#" className="text-white hover:underline mb-2">หนังสือพระราชนิพนธ์</a>
</div>
<div className="flex-1 h-12">
  <img src="/src/pic/book.jpg" alt="book" className="w-48 h-auto" />
 
</div>
<div className="flex-1 bg-gray-400 h-12">
   <img src="/src/pic/book2.jpg" alt="book2" className="w-48 h-auto" />
   </div>
<div className="flex-1 bg-gray-400 h-12"></div>
<div className="flex-1 bg-gray-400 h-12"></div>
<div className="flex-1 bg-gray-400 h-12"></div>
<div className="flex-1 bg-gray-400 h-12"></div>


{/* <div className="flex flex-col mt-10 items-start max-w-[20%] ml-[10%]">
  <a href="#" className="text-white hover:underline mb-2">สำนักพิมพ์</a>
  <a href="#" className="text-white hover:underline mb-2">Rose , โรส</a>
  <a href="#" className="text-white hover:underline mb-2">อมรินทร์ How to ยูริ</a>
  <a href="#" className="text-white hover:underline mb-2">แพรวสำนักพิมพ์</a>
  <a href="#" className="text-white hover:underline mb-2">Springbooks</a>
  <a href="#" className="text-white hover:underline mb-2">Amarin Kids</a>
  <a href="#" className="text-white hover:underline mb-2">Piccolo</a>
  <a href="#" className="text-white hover:underline mb-2">Levon</a>
  <a href="#" className="text-white hover:underline mb-2">Shortcut</a>
  <a href="#" className="text-white hover:underline mb-2">Lilac</a>
  <a href="#" className="text-white hover:underline mb-2">Sophia</a>
  <a href="#" className="text-white hover:underline mb-2">Amarin Academy</a>
  <a href="#" className="text-white hover:underline mb-2">บ้านและสวน</a>
  <a href="#" className="text-white hover:underline mb-2">อมรินทร์ธรรมะ</a>
  <a href="#" className="text-white hover:underline mb-2">แพรวเยาวชน Academy</a>
  <a href="#" className="text-white hover:underline mb-2">แพรวเพื่อเด็ก</a>
  <a href="#" className="text-white hover:underline mb-2">อมรินทร์</a>
  <a href="#" className="text-white hover:underline mb-2">อมรินทร์ Cuisine</a>
</div> */}
</div>
</div>
  );
}
