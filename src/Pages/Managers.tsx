import { Image } from "@nextui-org/react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Managers = () => {


  return (
    <div className="w-full flex justify-center mb-[50px]">
      <div className="container  max-w-[900px]  p-[20px] flex flex-col">
        <div className="flex flex-col py-[50px] gap-[50px]">


          <div className="flex gap-[30px] items-center">
            <Zoom>
              <Image loading="lazy" width={100} className="max-h-[100px]" src="/director.jpg" />
            </Zoom>
            <div>
              <p className="text-[20px] opacity-80 font-medium">Директор</p>
              <p className="text-[27px] font-medium">Талибов Шухрат Насриддинович</p>
            </div>
          </div>



          <div className="flex gap-[30px] items-center">
            <Zoom>
              <Image loading="lazy" width={100} className="max-h-[100px]" src="/zam.jpg" />
            </Zoom>
            <div>
              <p className="text-[20px] opacity-80 font-medium">Заместитель директора по работе с молодежью</p>
              <p className="text-[27px] font-medium">Саидов Зафар Сайфиддинович</p>
            </div>
          </div>





          <div className="flex gap-[30px] items-center">
            <Image loading="lazy" width={100} className="max-h-[100px]" src="/user.jpg" />
            <div>
              <p className="text-[20px] opacity-80 font-medium">Заместитель директора по учебной работе</p>
              <p className="text-[27px] font-medium">Абдухаликова Дилафруз Мусиновна</p>
            </div>
          </div>


          <div className="flex gap-[30px] items-center">
            <Image loading="lazy" width={100} className="max-h-[100px]" src="/user.jpg" />
            <div>
              <p className="text-[20px] opacity-80 font-medium">Заместитель директора по профессиональной подготовке</p>
              <p className="text-[27px] font-medium">Хужаназаров Икром Уктамович</p>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Managers