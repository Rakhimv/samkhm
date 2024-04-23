import NewsHome from "../Components/Home/NewsHome"

const Home = () => {
    return (
        <div className="w-full">

            <div className="bghome h-[400px] overflow-hidden relative flex justify-center items-center ">
                <div className="flex flex-col gap-[20px] items-center">
                    <h1 data-aos="fade-up" className="text-white h11 text-center font2 leading-none">Профессиональная школа <br /> города Самарканд</h1>
                    <p data-aos="fade-up" data-aos-delay="500" className="text-white h12 text-center font-extralight max-w-[700px] noxs1000:leading-normal font2 leading-8">Профессиональная школа, созданная указом президента Республики Узбекистан от 6 сентября 2019 года № ПФ – 5812, обучает 652 учащихся по 11 направлениям, 81 педагог-инженер</p>
                </div>
            </div>



            <div>
                <NewsHome />
            </div>



            {/* <div>
                <UploadFiles />
            </div> */}


            {/* <div className="p-[50px]">
                <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A8f221026734bbc0a1641eb622c49013311106ddc8e07823df5b53e031e5a5efc&amp;source=constructor" width="100%" height="500" ></iframe>

            </div> */}
        </div>

    )
}

export default Home