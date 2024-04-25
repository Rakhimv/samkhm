import { Divider } from "@mui/material";
import { Image } from "@nextui-org/react";

const Directions = () => {

  const professions = [
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
  ];



  return (
    <div className="w-full flex justify-center">
      <div className="container p-[20px] w-full flex flex-col">


        <div className="flex w-full items-center noxs1000:flex-col gap-[50px]">
          <div data-aos="zoom-out-up" >
            <Image src="/nap.png" />
          </div>
          <div className="xs1000:w-[1000px] flex flex-col gap-[20px]" data-aos="zoom-out-up">
            <h1 className="underline text-[30px] text-center">Направления</h1>
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