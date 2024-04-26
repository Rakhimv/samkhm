import { Divider } from "@mui/material";
import { Image } from "@nextui-org/react";
import { getLang } from "../Utils/Utils";


export const professions = getLang() ? [
  {
    description: "Специалисты этого направления в совершенстве владеют методами диагностики и ремонта автомобильных двигателей, обеспечивая надежную и эффективную работу транспортных средств.",
    image: "image20.png",
    title: "Диагностика и ремонт автомобильных двигателей"
  },
  {
    description: "Эксперты данного направления заботятся о надежности и безопасности автомобилей, проводя техническое обслуживание и ремонт шасси, подвески и тормозных систем.",
    image: "image21.png",
    title: "Техническое обслуживание и ремонт шасси автомобиля"
  },
  {
    description: "Мастера этого направления воплощают в жизнь соединение металлических деталей с высокой точностью и качеством, обеспечивая прочность и долговечность конструкций.",
    image: "image22.png",
    title: "Сварщик (электрогазосварочные работы)"
  },
  {
    description: "Эксперты создают уникальные модели одежды, проявляя творческий подход и мастерство в работе с различными тканями.",
    image: "image23.png",
    title: "Портной (Модельер)"
  },
  {
    description: "Профессионалы данного направления создают и модифицируют одежду с умением и вниманием к деталям, обеспечивая высокое качество и стиль в каждом шве.",
    image: "image24.png",
    title: "Швея"
  },
  {
    description: "Специалисты профессионально укладывают различные типы напольных покрытий, обеспечивая прочность, эстетичность и функциональность помещений.",
    image: "image25.png",
    title: "Работник по укладке полов и покрытий"
  },
  {
    description: "Эксперты строят и ремонтируют различные объекты, соблюдая высокие стандарты безопасности и эффективности, обеспечивая качество и надежность каждого проекта.",
    image: "image26.png",
    title: "Строитель"
  },
  {
    description: "Специалисты обеспечивают правильную работу систем водоснабжения и отопления, гарантируя комфорт и безопасность в жилых и коммерческих помещениях.",
    image: "image27.png",
    title: "Мастер по эксплуатации и монтажу систем водоснабжения и отопления"
  },
  {
    description: "Эксперты обеспечивают высокий уровень обслуживания клиентов в торговых точках, осуществляя операции с денежными средствами и контролируя ценности.",
    image: "image28.png",
    title: "Продавец, кассир-контролер"
  },
  {
    description: "Специалисты обеспечивают контроль и надзор за операциями в банковской сфере, следя за соблюдением правил и процедур, обеспечивая безопасность и надежность финансовых операций.",
    image: "image29.png",
    title: "Банковский контролер"
  },
  {
    description: "Эксперты в создании уникальных визуальных концепций и графических элементов, используя программное обеспечение для создания эстетических и инновационных проектов.",
    image: "image30.png",
    title: "Операторы компьютерной графики и дизайна"
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
    description: "Bu yo'nalish mutaxassislar har xil turlarda pol va qoplamalarni samarali tarzda joylashadi, mehmonxonalarning, turar joylarining va xizmat ko'rsatish joylarining kuchli, estetik va funktsional qilishadi.",
    image: "image25.png",
    title: "Duradgorlik va pol yotqizish ishlari ishchisi"
  },
  {
    description: "Bu yo'nalish ekspertlar murakkabotlarni qurish va ta'mirlash bilan shug'ullanishadi, yuqori xavfsizlik va samarali standartlarni saqlab qolishadi, har bir loyihaning sifat va ishonchliligini ta'minlashadi.",
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
]



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

export default Directions