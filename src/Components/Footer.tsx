import { Button, Divider } from "@nextui-org/react"
import { FaTelegramPlane } from "react-icons/fa";
import { phone, phone2, phone3 } from "../Utils/Global";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
    const date = new Date

    return (
        <div className="w-full p-[40px] py-[50px] bg-primary ">
            <div className="flex flex-col justify-between  items-center gap-5">

                <div className="w-full flex justify-between noxs658:flex-col-reverse">

                    <div className="flex flex-col gap-[20px] justify-center noxs658:flex-col-reverse">

                        <p className="text-white text-center max-w-[600px] noxs658:justify-center flex items-center gap-[5px]"><IoLocation />Самарканд, ул. Мирзы Бедила, 16</p>

                        <div className="flex gap-[20px] noxs658:flex-wrap noxs658:justify-center noxs658:items-center noxs658:mt-[20px]">
                            <a href={`tel:${phone}`} className="text-white text-center max-w-[600px] flex items-center gap-[5px]"><FaPhoneAlt />{phone}</a>
                            <a href={`tel:${phone2}`} className="text-white text-center max-w-[600px] flex items-center gap-[5px]"><FaPhoneAlt />{phone2}</a>
                            <a href={`tel:${phone3}`} className="text-white text-center max-w-[600px] flex items-center gap-[5px]"><FaPhoneAlt />{phone3}</a>
                        </div>
                    </div>


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
                </div>

                <Divider className="bg-white" />

                <div className="w-full  flex justify-between items-center noxs658:flex-col noxs658:gap-[20px]">

                    <div className="flex flex-col-reverse gap-[10px] opacity-65">

                        <p className="text-white noxs658:text-center max-w-[600px]">Barcha huquqlar himoyalangan © {date.getFullYear()} Samarqand shahar kasb-hunar maktabi | Sayt materiallaridan foydalanilganda www.samcli.uz manbasi ko`rsatilishi sahrt</p>
                    </div>


                    <div className="flex flex-col  gap-[20px]">
                        <a href={`https://t.me/azjson`}><p className="hover:underline text-white text-center max-w-[600px]">Made by Aziz</p></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer