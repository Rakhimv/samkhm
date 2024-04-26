import { useLocation } from "react-router"
import Accordions from "../Components/Accordions"
import DirecHome from "../Components/Home/DirecHome"
import GalleryHome from "../Components/Home/GalleryHome"
import NewsHome from "../Components/Home/NewsHome"
import Rating from "../Components/RatingBox"
import { getLang } from "../Utils/Utils"
import { useEffect } from "react"

const Home = () => {
    const langru = getLang()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const lang = queryParams.get('lang');

    useEffect(() => {
        if ((lang?.toLowerCase() == 'uz' || lang?.toLowerCase() == 'ru') && lang?.toLowerCase() !== localStorage.getItem('lang')) {
            localStorage.setItem('lang', lang.toLowerCase())
            window.location.reload()
        }
    }, []);
    return (
        <div className="w-full">

            <div className="bghome h-[400px] overflow-hidden relative flex justify-center items-center ">
                <div className="flex flex-col gap-[20px] items-center">
                    {langru ?
                        <h1 data-aos="fade-up" className="text-white h11 text-center font2 leading-none">
                            Профессиональная школа <br /> города Самарканд
                        </h1>
                        :
                        <h1 data-aos="fade-up" className="text-white h11 text-center font2 leading-none">
                            Samarqand shahar <br /> Kasb-hunar maktabi
                        </h1>
                    }






                    <p data-aos="fade-up" data-aos-delay="500" className="text-white h12 text-center font-extralight max-w-[700px] noxs1000:leading-normal font2 leading-8">
                        
                          {langru ? 'Профессиональная школа, созданная указом президента Республики Узбекистан от 6 сентября 2019 года № ПФ – 5812, обучает 700+ учащихся по 11 направлениям, 81 инженерно-педагогический коллектив' : 'Oʻzbekiston Respublikasi Prezidentining 2019-yil 6-sentabrdagi PF-5812 sonli farmoni bilan tashkil etilgan kasb-hunar maktabida 11 ta yoʻnalish boʻyicha 652-nafar oʻquvchi taxsil olmoqda, oʻquvchilarga 81 nafar muhandis pedagoglar taʼlim berib kelmoqda'}
                    '</p>


                </div>
            </div>



            <div>
                <DirecHome />
            </div>


            <div>
                <NewsHome />
            </div>



            <div>
                <GalleryHome />
            </div>



            <div className="w-full mb-[150px] mt-[50px] flex justify-center">
                <div className='container max-w-[900px] flex flex-col gap-[20px] noxs1000:p-[20px]'>
                    <div className={`py-[20px] pb-[0px] flex justify-between noxs658:flex-col noxs1000:gap-[20px] items-center`}>
                        <p className="text-2xl font-bold noxs658:text-center">FAQs</p>
                    </div>
                    <Accordions />
                </div>
            </div>



            <div>
                <Rating />
            </div>


        </div >

    )
}

export default Home