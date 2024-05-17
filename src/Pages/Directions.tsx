import { Divider } from "@mui/material";
import { Image } from "@nextui-org/react";
import { getLang } from "../Utils/Utils";

export const professions = getLang() === 'en' ? [
  {
    description: "Specialists in this field are proficient in methods of diagnosing and repairing car engines, ensuring reliable and efficient operation of vehicles.",
    image: "image20.png",
    title: "Car Engine Diagnostics and Repair"
  },
  {
    description: "Experts in this field ensure the reliability and safety of vehicles by conducting technical maintenance and repair of chassis, suspension, and braking systems.",
    image: "image21.png",
    title: "Technical Maintenance and Repair of Car Chassis"
  },
  {
    description: "Masters in this field accurately and qualitatively weld metal parts, ensuring the strength and durability of structures.",
    image: "image22.png",
    title: "Welder (Electrogas Welding)"
  },
  {
    description: "Experts create unique clothing models, demonstrating a creative approach and skill in working with various fabrics.",
    image: "image23.png",
    title: "Tailor (Fashion Designer)"
  },
  {
    description: "Professionals in this field create and modify clothing with skill and attention to detail, ensuring high quality and style in every stitch.",
    image: "image24.png",
    title: "Seamstress"
  },
  {
    description: "Specialists professionally install various types of flooring, ensuring the strength, aesthetics, and functionality of premises.",
    image: "image25.png",
    title: "Flooring and Covering Installer"
  },
  {
    description: "Experts build and repair various structures, adhering to high standards of safety and efficiency, ensuring quality and reliability in each project.",
    image: "image26.png",
    title: "Builder"
  },
  {
    description: "Specialists ensure the proper functioning of water supply and heating systems, guaranteeing comfort and safety in residential and commercial premises.",
    image: "image27.png",
    title: "Master of Operation and Installation of Water Supply and Heating Systems"
  },
  {
    description: "Experts provide a high level of customer service in retail outlets, carrying out cash operations and controlling valuables.",
    image: "image28.png",
    title: "Seller, Cashier-Controller"
  },
  {
    description: "Specialists ensure control and supervision over operations in the banking sector, ensuring compliance with rules and procedures, ensuring the safety and reliability of financial transactions.",
    image: "image29.png",
    title: "Bank Controller"
  },
  {
    description: "Experts in creating unique visual concepts and graphic elements, using software to create aesthetic and innovative projects.",
    image: "image30.png",
    title: "Computer Graphics and Design Operators"
  }
] : [
  {
    description: "Bu yo'nalish mutaxassislar avtomobil motorlarini diagnos qilish va ta'mirlash usullarini mukammal ravishda bilishadi, transport vositalarining ishonchlilik va samarali ishlashi ta'minlaydi.",
    image: "image20.png",
    title: "Avtomobil dvigatellarini tashxislash va taʼmirlash"
  },
  {
    description: "Bu yo'nalish ekspertlar avtomobillarning ishonchliligini va xavfsizligini ta'minlash, shassi, tormoz va g'ildirak tizimlarini ta'mirlash va xizmat ko'rsatishni ta'minlashadi.",
    image: "image21.png",
    title: "Avtomobil shassisiga texnik xizmat koʻrsatish va tamirlash"
  },
  {
    description: "Bu yo'nalish ustalar metaldan qilingan qismlarni yuqori darajada to'g'ri va sifat bilan birlashtirishadi, konstruksiyalarni kuchli va uzunmuddatli qilishadi.",
    image: "image22.png",
    title: "Payvandlovchi (elektrgazpayvandlash ishlari)"
  },
  {
    description: "Bu yo'nalish ekspertlar mo'ljallangan kiyim modellarini yaratishadi, har xil to'qima materiallari bilan ishlashda ijodiy yondashuv va hunarmandlikni ko'rsatishadi.",
    image: "image23.png",
    title: "Sartarosh (Modelyer)"
  },
  {
    description: "Bu yo'nalish mutaxassislar har bir tigida sifat va uslubni ta'minlash uchun kiyimlarni yaratish va o'zgartirishadi.",
    image: "image24.png",
    title: "Tikuvchi"
  },
  {
    description: "Bu yo'nalish mutaxassislar har xil turlarda pol va qoplamalarni samaralish uslubda joylashadi, mehmonxonalarning, turar joylarining va xizmat ko'rsatish joylarining kuchli, estetik va funktsional qilishadi.",
    image: "image25.png",
    title: "Duradgorlik va pol yotqizish ishlari ishchisi"
  },
  {
    description: "Bu yo'nalish mutaxassislar qurilish va ta'mirlash bilan shug'ullanishadi, yuqori xavfsizlik va samarali standartlarni saqlab qolishadi, har bir loyihaning sifat va ishonchliligini ta'minlashadi.",
    image: "image26.png",
    title: "Qurilish ishlari ishchisi"
  },
  {
    description: "Bu yo'nalish mutaxassislar suv ta'minoti va issiqlovchi tizimlarini samarali ishga solishadi, yashash joylari va tijorat joylarida qulaylik va xavfsizlikni ta'minlashadi.",
    image: "image27.png",
    title: "Oqava suv va suv taʼminoti tizimlaridan foydalanish va montaj qilish ustasi"
  },
  {
    description: "Bu yo'nalish mutaxassislar savdo nuqtalarida mijozlarga yuqori darajada xizmat ko'rsatishadi, naqd pul mablag'larini operatsiyalarni amalga oshirish va qimmatbaho qimmatbaho qimmatbaho qimmatbaho.",
    image: "image28.png",
    title: "Sotuvchi, nazoratchi-kassir"
  },
  {
    description: "Bu yo'nalish mutaxassislar bank sohasidagi operatsiyalar va nazoratni ta'minlashadi, qoida va tartiblarni muhokama qilish, moliyaviy operatsiyalarni xavfsiz va ishonchliligini ta'minlashadi.",
    image: "image29.png",
    title: "Bank nazoratchisi"
  },
  {
    description: "Bu yo'nalish ekspertlar estetik va innovatsion loyihalarni yaratishda dasturiy ta'minotni qo'llaydigan, noyob vizual konsepsiyalarni va grafik elementlarni yaratishda namoyish etiladi.",
    image: "image30.png",
    title: "Kompyuter grafikasi va dizayn operatorlari"
  }
];

const Directions = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container p-[20px] w-full flex flex-col">

        <div className="flex w-full items-center noxs1000:flex-col gap-[50px]">
          <div >
            <Image src="/nap.png" />
          </div>
          <div className="xs1000:w-[1000px] flex flex-col gap-[20px]">
            <h1 className="underline text-[30px] text-center capitalize">{getLang() ? 'Направления' : "yo'nalishlar"}</h1>
            <ul className="list-disc pl-[20px]">
              {professions.map((prof: any) =>
                <li>{prof.title}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="py-[50px]">
          <Divider />
        </div>

        <div className="flex flex-col gap-[20px]  ">
          {professions.map((prof: any, index: any) =>
            <div className="flex gap-[20px] items-center noxs658:flex-col pb-[50px]" data-aos="zoom-in">
              <div
                key={index}
                aria-label={prof.title}
                role="img"
                className="w-[250px] h-[150px] noxs658:h-[200px] min-w-[250px] noxs658:w-full"
                style={{
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  backgroundImage: `url("/${prof.image}")`,
                  backgroundPosition: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              />
              <div className="flex flex-col">
                <p className="text-[25px] font-medium">{prof.title}</p>
                <p>{prof.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Directions;

