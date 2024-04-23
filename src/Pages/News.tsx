import { Button, Card, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { formatTimeDetal } from "../Utils/Utils";
import axios from "axios";
import { burl } from "../Utils/Global";



const News = () => {

    const [news, setNews] = useState<any>(null)
    const [isLoad] = useState<boolean>(true)
    const [visibleItems, setVisibleItems] = useState<any>(news);
    const nextShow = 10


    const [itemsToShow, setItemsToShow] = useState<number>(nextShow * 2);

    // Показать следующие элементы
    const showMoreItems = () => {
        setItemsToShow(prev => prev + nextShow);
        setVisibleItems(news.slice(0, itemsToShow));
        console.log(itemsToShow, visibleItems);

    };



    const fetchData = async () => {
        try {


            const req = await axios.get(burl + 'news.json')
            const elems = Object.keys(req.data).map(key => {
                const newsItem = req.data[key];
                newsItem.key = key;
                return newsItem;
            }).reverse()

            setNews(elems)
            setVisibleItems(elems.slice(0, nextShow))


        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);




    return (
        <div className="w-full flex justify-center">
            <div className="container p-[20px]">
                <div className={`py-[20px] flex ${localStorage.getItem('admin') ? 'justify-between' : 'justify-center'} items-center`}>
                    <p className="text-3xl font-bold">Новости</p>
                    {localStorage.getItem('admin') &&
                        <Link to={'/admin'}>
                            <Button startContent={<AddIcon />}>Добавить</Button>
                        </Link>
                    }
                </div>
                {news ?
                    <div className="w-full flex flex-col gap-[10px]">
                        {visibleItems.map((item: any, index: number) => (
                            <Link to={'/news/' + item.key}>
                                <Card className="p-[20px] w-full flex flex-row gap-[20px] noxs1000:flex-col hover:bg-gray-100 cursor-pointer">

                                    {(item.media && item.media[0].length > 0) ? <div
                                        key={index}
                                        aria-label={news.title}
                                        role="img"
                                        className="w-[200px] noxs658:w-full noxs658:h-[200px] min-w-[200px] min-h-[100px] max-h-[300px]"
                                        style={{
                                            borderRadius: 10,
                                            backgroundColor: '#fff',
                                            backgroundImage: `url("${item.media[0][0]}")`,
                                            backgroundPosition: '50%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }}
                                    /> :
                                        <div
                                            key={index}
                                            aria-label={news.title}
                                            role="img"
                                            className="w-[200px] noxs658:w-full noxs658:h-[200px] min-w-[200px] min-h-[100px] max-h-[300px]"
                                            style={{
                                                borderRadius: 10,
                                                backgroundColor: '#fff',
                                                backgroundImage: `url("/emp.png")`,
                                                backgroundPosition: '50%',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            }}
                                        />
                                    }
                                    <div className="flex flex-col w-[calc(100%-200px)] noxs1000:w-full">
                                        <p className="text-[14px] font-bold opacity-60 mb-[20px]">{formatTimeDetal(item.ctime)}</p>
                                        <p className="text-[20px] tsis max-w-[100%]">{item.title}</p>
                                        <p className="text-[16px] opacity-60 tsis max-w-[90%]">{item.desc}</p>
                                    </div>
                                </Card>
                            </Link>
                        ))}


                        <div className="w-full flex justify-center pb-[50px] mt-[20px]">
                            {itemsToShow < news.length + nextShow && (
                                <Button color="primary" variant="shadow" className="max-w-[200px]" onClick={() => {
                                    showMoreItems()
                                }}>Показать ещё</Button>
                            )}
                        </div>
                    </div>
                    :
                    isLoad ?
                        <div className="w-full flex flex-col gap-[10px]">
                            {Array.from({ length: 4 }).map((_: any) =>
                                <Card className="p-[20px] w-full flex flex-row gap-[20px] noxs1000:flex-col hover:bg-gray-100 cursor-pointer">

                                    <Skeleton
                                        className="w-[200px] noxs658:w-full noxs658:h-[200px] min-w-[200px] min-h-[100px] max-h-[300px]"

                                    />

                                    <div className="flex flex-col w-[80%] noxs1000:w-full">
                                        <Skeleton className="text-[14px] min-w-[200px] w-[20%] h-[20px] font-bold opacity-60 mb-[20px]" />
                                        <Skeleton className="text-[20px] min-w-[200px] w-[80%] h-[20px]" />
                                        <Skeleton className="text-[16px] min-w-[200px] mt-[10px] w-[60%] h-[20px] opacity-60 tsis max-w-[90%]" />
                                    </div>
                                </Card>
                            )}
                        </div>
                        :
                        <div className="w-full h-[300px] flex items-center justify-center">
                            Пусто
                        </div>

                }
            </div>
        </div>
    )
}

export default News