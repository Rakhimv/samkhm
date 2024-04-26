

import { Accordion, AccordionItem } from "@nextui-org/react";
import { getLang } from "../Utils/Utils";
import HelpIcon from '@mui/icons-material/Help';
export default function Accordions() {
  let tit1 = getLang() ? 'На каком языке осуществляется обучение в профессиональной школе г. Самарканд' : `Samarqand shahridagi kasb-hunar maktabida qaysi tilda ta'lim olib boriladi?`
  let con1 = getLang() ? 'Занятия проводятся на узбекском и русском языках' : `Darslar o'zbek va rus tillarida olib boriladi`


  let tit2 = getLang() ? 'Каковы условия для поступления в вашу школу?' : 'Maktabingizga kirish uchun qanday shartlar mavjud?'
  let con2 = getLang() ? 'Для поступления в нашу школу необходимо предоставить аттестат, подтверждающий завершение среднего образования. Мы также принимаем учеников только из города Самарканд или с пропиской в Самарканде.' : `
  Maqtobimizga kirish uchun orta ma'lumotni tug'atuvchi attestat kerak. Biz Samarqand shahridan faqat yoki Samarqandda royhatga kirgan talabarni qabul qilamiz.
`

  let tit3 = getLang() ? 'Каков срок обучения в вашей профессиональной школе?' : `Sizning kasb hunar maktabingizda o'qish davomiyligi qancha?`
  let con3 = getLang() ? 'Обучение в нашей профессиональной школе длится 2 года. По завершении программы обучения выдаётся сертификат, подтверждающий успешное завершение обучения.' : `
  Bizning kasb hunar maktabimizda o'qish 2 yil davom etadi. O'qish dasturini yakunlagandan so'ng, o'qishni muvaffaqiyatli tugatganligingizni tasdiqlovchi sertifikat beriladi.`
  
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
