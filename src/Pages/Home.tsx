import Accordions from "../Components/Accordions"
import GalleryHome from "../Components/Home/GalleryHome"
import NewsHome from "../Components/Home/NewsHome"

const Home = () => {
    return (
        <div className="w-full">

            <div className="bghome h-[400px] overflow-hidden relative flex justify-center items-center ">
                <div className="flex flex-col gap-[20px] items-center">
                    <h1 data-aos="fade-up" className="text-white h11 text-center font2 leading-none">Профессиональная школа <br /> города Самарканд</h1>
                    <p data-aos="fade-up" data-aos-delay="500" className="text-white h12 text-center font-extralight max-w-[700px] noxs1000:leading-normal font2 leading-8">Профессиональная школа, созданная указом президента Республики Узбекистан от 6 сентября 2019 года № ПФ – 5812, обучает 700+ учащихся по 11 направлениям, 81 инженерно-педагогический коллектив</p>
                </div>
            </div>



            <div>
                <NewsHome />
            </div>



            <div>
                <GalleryHome />
            </div>

           

            <div className="w-full mb-[150px] mt-[50px] flex justify-center">
                <div className='container max-w-[900px] flex flex-col gap-[20px] noxs658:p-[20px]'>
                    <div className={`py-[20px] flex justify-between noxs658:flex-col noxs1000:gap-[20px] items-center`}>
                        <p className="text-2xl font-bold noxs658:text-center">Часто задаваемые вопросы</p>
                    </div>
                    <Accordions />
                </div>
            </div>




        </div>

    )
}

export default Home