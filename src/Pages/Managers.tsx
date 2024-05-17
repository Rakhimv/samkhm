import { Image } from "@nextui-org/react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { getLang } from "../Utils/Utils";

const Managers = () => {
  const directors = getLang() === 'en' ? [
    {
      role: "Director",
      name: "Tolibov Shuhrat Nasriddinovich",
      imageSrc: "/director.jpg"
    },
    {
      role: "Deputy Director for Youth Affairs",
      name: "Saidov Zafar Sayfiddinovich",
      imageSrc: "/zam.jpg"
    },
    {
      role: "Deputy Director for Academic Affairs",
      name: "Abduhalikova Dilafruz Musinovna",
      imageSrc: "/zam2.jpg"
    },
    {
      role: "Deputy Director for Vocational Training",
      name: "Xo'janazarov Ikrom Uktamovich",
      imageSrc: "/ikrom.jpeg"
    }
  ] : getLang() === 'ru' ? [
    {
      role: "Директор",
      name: "Талибов Шухрат Насриддинович",
      imageSrc: "/director.jpg"
    },
    {
      role: "Заместитель директора по работе с молодежью",
      name: "Саидов Зафар Сайфиддинович",
      imageSrc: "/zam.jpg"
    },
    {
      role: "Заместитель директора по учебной работе",
      name: "Абдухаликова Дилафруз Мусиновна",
      imageSrc: "/zam2.jpg"
    },
    {
      role: "Заместитель директора по профессиональной подготовке",
      name: "Хужаназаров Икром Уктамович",
      imageSrc: "/ikrom.jpeg"
    }
  ] : [
    {
      role: "direktor",
      name: "Tolibov Shuhrat Nasriddinovich",
      imageSrc: "/director.jpg"
    },
    {
      role: "yoshlar bilan ishlash bo'yicha direktor o'rinbosari",
      name: "Saidov Zafar Sayfiddinovich",
      imageSrc: "/zam.jpg"
    },
    {
      role: "o'quv ishlari bo'yicha direktor o'rinbosari",
      name: "Abduhalikova Dilafruz Musinovna",
      imageSrc: "/zam2.jpg"
    },
    {
      role: "kasbiy tayyorgarlik bo'yicha direktor o'rinbosari",
      name: "Xo'janazarov Ikrom Uktamovich",
      imageSrc: "/ikrom.jpeg"
    }
  ];

  return (
    <div className="w-full flex justify-center mb-[50px]">
      <div className="container  max-w-[900px]  p-[20px] flex flex-col">
        <div className="flex flex-col py-[50px] gap-[50px]">
          {directors.map((director, index) => (
            <div key={index} className="flex gap-[30px] items-center">
              {director.imageSrc !== "/user.jpg" && (
                <Zoom>
                  <Image loading="lazy" className="max-h-[100px] w-[100px] noxs658:w-[70px] noxs658:min-w-[70px]" src={director.imageSrc} />
                </Zoom>
              )}
              {director.imageSrc === "/user.jpg" && (
                <Image loading="lazy" className="max-h-[100px] w-[100px] noxs658:w-[70px] noxs658:min-w-[70px]" src={director.imageSrc} />
              )}
              <div>
                <p className="text-[20px] noxs658:text-[12px] opacity-80 font-medium capitalize">{director.role}</p>
                <p className="text-[27px] noxs658:text-[16px] font-medium">{director.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Managers;
