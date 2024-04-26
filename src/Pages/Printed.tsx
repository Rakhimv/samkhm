import { useEffect, useState } from "react"
import { formatTimeDetal } from "../Utils/Utils"

const Printed = () => {
    const [news] = useState<any>(JSON.parse(localStorage.getItem('news') || "null"))


    async function start() {
        await window.print();

        setTimeout(() => {
            if (window.confirm('Закрыть страницу?')) {
                window.close();
            }
        }, 1000);

    }

    useEffect(() => {
        start()
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="container max-w-[900px] p-[20px] py-[50px]">
                <div className='flex flex-col w-full gap-[20px]'>

                    <p className='font-bold opacity-60 mt-[20px] noxs658:mt-[20px]'>{formatTimeDetal(news?.ctime)}</p>
                    <h1 className='text-[30px] noxs658:text-[20px] font-bold'>{news.title}</h1>
                    {(news.media && news.media[0].length > 0) &&
                        <div className='photo-container gap-[15px] my-[20px]'>
                            {news.media[0].map((item: any, index: any) => (

                                <div key={index}>
                                    <img src={item} />
                                </div>

                            ))}
                        </div>
                    }

                    <p className='text-[18px] text-justify' style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: news.desc.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") }}></p>

                </div>

            </div>
        </div>
    )
}

export default Printed
