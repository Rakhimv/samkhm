import { useEffect, useState } from 'react'
import { GetNewsArray } from '../Admin/GetNewsArray';
import { Button, Card, Image, Skeleton } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { formatTimestamp } from '../../Utils/Utils';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NewsHome = () => {
    const [newsArray, setNewsArray] = useState<any>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetNewsArray(4);
                setNewsArray(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);



    return (
        <div className='w-full flex justify-center mt-[50px] mb-[0px] noxs1000:p-[20px]' data-aos="fade-up">
            <div className='container max-w-[900px] '>
                <div className={`py-[20px] flex justify-between noxs658:flex-col noxs1000:gap-[20px] items-center`}>
                    <p className="text-2xl font-bold">Последние новости</p>

                    <Link to={'/news'}>
                        <Button variant='light' color='primary' endContent={<NavigateNextIcon />}>Смотреть все</Button>
                    </Link>
                </div>
                {!newsArray ?
                    <div className='flex w-full mt-[20px] gap-[10px] noxs1000:flex-wrap '>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <>
                                <Card key={index} className="w-full  noxs480:w-full noxs1000:w-[calc((100%/2)-10px)] space-y-5 p-4" radius="lg" data-aos="flip-up" data-aos-delay={index * 200}>
                                    <Skeleton className="rounded-lg">
                                        <div className="h-24 rounded-lg bg-default-300"></div>
                                    </Skeleton>


                                    <div className="space-y-3">
                                        <Skeleton className="w-4/5 rounded-lg">
                                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                        </Skeleton>
                                        <Skeleton className="w-full rounded-lg">
                                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                                        </Skeleton>


                                        <div className='pt-[10px]'>
                                            <Skeleton className="w-4/5 rounded-lg">
                                                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                            </Skeleton>
                                        </div>
                                    </div>


                                </Card>
                            </>
                        ))}

                    </div>
                    :


                    newsArray.length > 0 ?
                        <div className='flex w-full mt-[20px] gap-[10px] noxs1000:flex-wrap'>
                            {newsArray.map((news: any, index: any) =>
                                <Link key={index} to={'/news/' + news.key} className='flex noxs480:w-full noxs1000:w-[calc((100%/2)-10px)] flex-col w-[calc((100%/4)-5px)] gap-[5px] p-[5px] rounded-md hover:text-primary cursor-pointer hover:bg-gray-100'>
                                    <Card className="w-full space-y-5 p-4" radius="lg">
                                        {news.media && news.media[0][0]
                                            ?
                                            <Image className='h-24 w-[200px] rounded-lg' isZoomed src={news.media[0][0]} />
                                            :
                                            <Image className='h-24 w-[200px] rounded-lg' isZoomed src={'/emp.png'} />
                                        }


                                        <div className="space-y-1 ">
                                            <p className='tsis max-w-[150px]'>{news.title}</p>
                                            <p className='tsis opacity-60'>{news.desc}</p>


                                            <div className='pt-[10px]'>
                                                <p>{formatTimestamp(news.ctime)}</p>
                                            </div>
                                        </div>

                                    </Card>
                                </Link>
                            )}
                        </div>
                        :
                        <p>пусто</p>
                }

            </div>
        </div>
    )
}

export default NewsHome