import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { burl } from '../Utils/Global';
import { BreadcrumbItem, Breadcrumbs, Card, Skeleton } from '@nextui-org/react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { CircularProgress, Divider } from '@mui/material';
import { formatTimeDetal } from '../Utils/Utils';
import { GetNewsArray } from '../Components/Admin/GetNewsArray';



function NewsOne() {
    let { id } = useParams();
    const [newsArray, setNewsArray] = useState<any>(null);
    const [news, setNews] = useState<any>(null)
    const [isLoad, setIsLoad] = useState<boolean>(true)


    const GetNews = async () => {
        try {
            const req = await axios.get(burl + 'news/' + id + '.json')
            setNews(req.data)
            setIsLoad(false)
            console.log(news);

        } catch {
            console.log('Error');
            setIsLoad(false)
        }
    }



    useEffect(() => {
        setIsLoad(true)
        setNews(null)
        GetNews()
    }, [id])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetNewsArray(6);
                setNewsArray(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();
    }, [id]);


    return (
        <div className='w-full flex justify-center'>
            <div className='container p-[20px] py-[50px]'>{news ?
                <div className="w-full flex justify-between gap-[50px] noxs1000:flex-col">


                    <div className='flex flex-col w-full gap-[20px]'>
                        <div className='flex'>
                            <div className="flex flex-col flex-wrap gap-4">
                                <Breadcrumbs variant={'bordered'}>
                                    <BreadcrumbItem><Link to={'/news'}>Новости</Link></BreadcrumbItem>
                                    <BreadcrumbItem className='dsis max-w-[200px]'>{news.title}</BreadcrumbItem>
                                </Breadcrumbs>
                            </div>
                        </div>
                        <p className='font-bold opacity-60 mt-[20px] noxs658:mt-[20px]'>{formatTimeDetal(news?.ctime)}</p>
                        <h1 className='text-[30px] noxs658:text-[20px] font-bold'>{news.title}</h1>
                        {(news.media && news.media[0].length > 0) &&
                            <div className='photo-container gap-[15px] my-[20px]'>
                                {news.media[0].map((item: any, index: any) => (
                                    <Zoom >
                                        <div
                                            key={index}
                                            aria-label={news.title}
                                            role="img"
                                            style={{
                                                borderRadius: 10,
                                                backgroundColor: '#fff',
                                                backgroundImage: `url("${item}")`,
                                                backgroundPosition: '50%',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                                height: '0',
                                                paddingBottom: '56%',
                                                width: '100%',
                                            }}
                                        />
                                    </Zoom>
                                ))}
                            </div>
                        }

                        <p className='text-[18px] text-justify' style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: news.desc.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") }}></p>

                    </div>


                    <div className='min-w-[280px] w-[280px] noxs1000:w-full'>
                        <Card className='w-full flex flex-col p-[20px]'>
                            <p className='text-center mb-[30px] font-bold'>Недавние публикации</p>

                            {!newsArray ?
                                <div className='flex flex-col mt-[20px] gap-[10px]'>
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <>
                                            {index !== 0 && <Divider />}
                                            <div key={index} className="max-w-[300px] w-full flex items-center gap-3">
                                                <div className="w-full flex flex-col gap-2">
                                                    <Skeleton className="h-3 w-full rounded-lg" />
                                                    <Skeleton className="h-3 w-2/3 rounded-lg" />
                                                </div>
                                            </div>
                                        </>
                                    ))}

                                </div>
                                :
                                newsArray.length > 0 ?
                                    newsArray.map((news: any, index: any) =>
                                        <>
                                            {index !== 0 && <div className='my-[10px]'><Divider /></div>}
                                            <Link to={'/news/' + news.key} className='flex flex-col gap-[5px] p-[5px] rounded-md hover:text-primary cursor-pointer hover:bg-gray-100'>

                                                <p className='max-h-[300px] overflow-hidden'>{news.title}</p>
                                                <p className='opacity-60 text-[14px] text-black'>{formatTimeDetal(news?.ctime)}</p>
                                            </Link>
                                        </>
                                    )
                                    :
                                    <p>пусто</p>
                            }

                        </Card>
                    </div>
                </div>
                :
                isLoad ?
                    <div className="w-full h-[400px] flex items-center justify-center">
                        <CircularProgress size={100} />
                    </div>
                    :
                    <Navigate to={'/404'} />

            }</div>
        </div>
    );
}

export default NewsOne;
