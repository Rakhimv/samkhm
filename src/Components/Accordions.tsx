

import { Accordion, AccordionItem } from "@nextui-org/react";
import { getLang } from "../Utils/Utils";
import HelpIcon from '@mui/icons-material/Help';
export default function Accordions() {



  let tit1 = getLang() === 'en'
    ? 'What language is used for education in the vocational school in Samarkand?'
    : getLang() === 'ru'
      ? 'На каком языке осуществляется обучение в профессиональной школе г. Самарканд'
      : `Samarqand shahridagi kasb-hunar maktabida qaysi tilda ta'lim olib boriladi?`;

  let con1 = getLang() === 'en' ? 'Classes are conducted in Uzbek and Russian languages' : getLang() === 'ru' ? 'Занятия проводятся на узбекском и русском языках' : `Darslar o'zbek va rus tillarida olib boriladi`;

  let tit2 = getLang() === 'en' ? 'What are the admission requirements for your school?' : getLang() === 'ru' ? 'Каковы условия для поступления в вашу школу?' : 'Maktabingizga kirish uchun qanday shartlar mavjud?';
  let con2 = getLang() === 'en' ? 'To enter our school, you need to provide a certificate confirming the completion of secondary education. We also accept students only from Samarkand city or with registration in Samarkand.' : getLang() === 'ru' ? 'Для поступления в нашу школу необходимо предоставить аттестат, подтверждающий завершение среднего образования. Мы также принимаем учеников только из города Самарканд или с пропиской в Самарканде.' : 'Maqtobimizga kirish uchun orta ma\'lumotni tug\'atuvchi attestat kerak. Biz Samarqand shahridan faqat yoki Samarqandda royhatga kirgan talabarni qabul qilamiz.';

  let tit3 = getLang() === 'en' ? 'What is the duration of study at your vocational school?' : getLang() === 'ru' ? 'Каков срок обучения в вашей профессиональной школе?' : `Sizning kasb hunar maktabingizda o'qish davomiyligi qancha?`;
  let con3 = getLang() === 'en' ? 'Study at our vocational school lasts for 2 years. Upon completion of the training program, a certificate confirming successful completion of the training is issued.' : getLang() === 'ru' ? 'Обучение в нашей профессиональной школе длится 2 года. По завершении программы обучения выдаётся сертификат, подтверждающий успешное завершение обучения.' : 'Bizning kasb hunar maktabimizda o\'qish 2 yil davom etadi. O\'qish dasturini yakunlagandan so\'ng, o\'qishni muvaffaqiyatli tugatganligingizni tasdiqlovchi sertifikat beriladi.';




  return (
    <Accordion variant="splitted" defaultSelectedKeys={'1'} className="!px-0" style={{ gap: 15 }} >
      <AccordionItem key="1" title={tit1} startContent={<HelpIcon color="primary" />}>
        <p className="mb-[20px]">{con1}</p>
      </AccordionItem>
      <AccordionItem key="2" title={tit2} startContent={<HelpIcon color="primary" />}>
        <p className="mb-[20px]">{con2}</p>
      </AccordionItem>
      <AccordionItem key="3" title={tit3} startContent={<HelpIcon color="primary" />}>
        <p className="mb-[20px]">{con3}</p>
      </AccordionItem>
    </Accordion>
  );
}
