import { Button, Divider } from "@nextui-org/react"
import { FaTelegramPlane } from "react-icons/fa";
import { phone, phone2, phone3 } from "../Utils/Global";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoColorWand } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MenuItems } from "./Menu";
import { Link } from "react-router-dom";
import { getLang } from "../Utils/Utils";


const Footer = () => {
    const date = new Date
    const langru = getLang()
    return (
        <div className="w-full p-[40px] py-[50px] bg-primary ">
            <div className="flex flex-col justify-between  items-center gap-5">

                <div className="w-full flex justify-between noxs1000:flex-col-reverse">

                    <div className="flex gap-[40px] items-center">


                        <div className="flex flex-col gap-[10px] justify-between noxs658:hidden">
                            {MenuItems.map((item: any) =>
                                <Link className="text-white opacity-80 font-medium hover:opacity-100 hover:underline transition-all" to={item.link}>{item.text}</Link>
                            )}
                        </div>

                        <div className="h-full w-[1px] bg-white noxs658:hidden"></div>

                        <div className="flex flex-col gap-[20px] justify-center noxs658:flex-col">

                            <div className="flex flex-col gap-[20px]">
                                <div className="flex gap-[20px] noxs658:justify-center noxs658:mb-[10px]">
                                    <a href="https://t.me/samarkand_shahar_khm">
                                        <Button isIconOnly className="bg-white"><FaTelegramPlane className="text-primary" size={25} /></Button>
                                    </a>
                                    <a href={`tel:${phone}`}>
                                        <Button isIconOnly className="bg-white"><FaPhoneAlt className="text-primary" size={25} /></Button>
                                    </a>
                                </div>
                            </div>


                            <p className="text-white text-center max-w-[600px] noxs658:justify-center flex items-center gap-[5px]"><IoLocation />{langru ? 'Самарканд, ул. Мирзы Бедила, 16' : "Samarqand, Mirza Bedil ko'chasi, 16"}</p>

                            <div className="flex gap-[20px] noxs658:flex-wrap noxs658:justify-center noxs658:items-center noxs658:mt-[20px]">
                                <a href={`tel:${phone}`} className="text-white text-center max-w-[600px] flex items-center gap-[5px]"><FaPhoneAlt />{phone}</a>
                                <a href={`tel:${phone2}`} className="text-white text-center max-w-[600px] flex items-center gap-[5px]"><FaPhoneAlt />{phone2}</a>
                                <a href={`tel:${phone3}`} className="text-white text-center max-w-[600px] flex items-center gap-[5px]"><FaPhoneAlt />{phone3}</a>
                            </div>
                        </div>

                    </div>




                    <div className="p-[0px] pb-[20px] noxs658:flex noxs658:justify-center">
                        <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A8f221026734bbc0a1641eb622c49013311106ddc8e07823df5b53e031e5a5efc&amp;source=constructor" width="400" height="200" ></iframe>
                    </div>


                </div>

                <Divider className="bg-white" />

                <div className="w-full  flex justify-between items-center noxs658:flex-col noxs658:gap-[20px]">

                    <div className="flex flex-col-reverse gap-[10px] opacity-65">

                        <p className="text-white noxs658:text-center max-w-[600px]">{!langru ? `Barcha huquqlar himoyalangan © ${date.getFullYear()} Samarqand shahar kasb-hunar maktabi | Sayt materiallaridan foydalanilganda www.samcli.uz manbasi ko'rsatilishi sahrt` : `Все права защищены © ${date.getFullYear()} Самаркандская городская профессиональная школа | при использовании материалов сайта www.samcli.uz источник должен быть указан`}</p>
                    </div>


                    <div className="flex flex-col gap-[10px]">
                        <a href={`https://t.me/azjson`}><p className="hover:underline text-white flex items-center justify-end noxs658:justify-center gap-[5px] text-right noxs658:text-center max-w-[600px]"><FaCode />Code by Aziz</p></a>
                        <a href={`https://t.me/azesXa`}><p className="hover:underline flex items-center justify-end noxs658:justify-center gap-[5px] text-white text-right noxs658:text-center max-w-[600px]"><IoColorWand />Design by Azes</p></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer