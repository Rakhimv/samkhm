import { Button } from "@nextui-org/react"
import { FaTelegramPlane } from "react-icons/fa";
import { phone } from "../Utils/Global";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
    const date = new Date

    return (
        <div className="w-full p-[20px] py-[50px] bg-primary mt-[100px]">
            <div className="flex justify-between flex-col-reverse items-center gap-5">


                <div className="flex flex-col-reverse gap-[10px]">
                    <a href={`https://t.me/azjson`}><p className="hover:underline text-white text-center max-w-[600px]">Made by Aziz</p></a>
                    <p className="text-white text-center max-w-[600px]">Barcha huquqlar himoyalangan © {date.getFullYear()} Samarqand shahar kasb-hunar maktabi | Sayt materiallaridan foydalanilganda www.samcli.uz manbasi ko`rsatilishi sahrt</p>
                </div>

                <div className="flex">
                    <div className="flex gap-[20px]">
                        <a href="https://t.me/samarkand_shahar_khm">
                            <Button isIconOnly className="bg-white"><FaTelegramPlane className="text-primary" size={25} /></Button>
                        </a>
                        <a href={`tel:${phone}`}>
                            <Button isIconOnly className="bg-white"><FaPhoneAlt className="text-primary" size={25} /></Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer