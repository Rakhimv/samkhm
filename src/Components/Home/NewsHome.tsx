import { useEffect, useState } from 'react'
import { GetNewsArray } from '../Admin/GetNewsArray';
import { Button, Card, Chip, Divider,   Skeleton } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { formatTimestamp, getLang } from '../../Utils/Utils';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useMediaQuery } from '@mui/material';
import { matches658 } from '../../Utils/Sizes';

const NewsHome = () => {
    const [newsArray, setNewsArray] = useState<any>(null);
    const ismb = useMediaQuery(matches658)
    const langru = getLang()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetNewsArray(3);
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
        <div className='w-full flex justify-center py-[50px] pt-[20px] mt-[50px] mb-[0px] noxs1000:p-[20px]' data-aos="fade-up">
            <div className='container max-w-[900px] '>
                <div className={`py-[20px] flex justify-between noxs658:flex-col noxs1000:gap-[20px] items-center`}>
                    <p className="text-2xl font-bold">{langru === 'en' ? 'Last news' : langru === 'ru' ? "Последние новости" : "So'nggi yangiliklar"}</p>

                    {ismb && < Link to={'/news'}>
                        <Button variant='light' color='primary' endContent={<NavigateNextIcon />}>{langru === 'en' ? "See all" : langru === 'ru' ? "Смотреть все" : "Hammasini ko'rish"}</Button>
                    </Link>}
                </div>
                <Divider />
                {!newsArray ?
                    <div className='flex w-full mt-[20px] gap-[20px] noxs658:flex-wrap'>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <>
                                <Card key={index} className="w-full space-y-5 p-4" radius="lg">
                                    <Skeleton className="rounded-lg">
                                        <div className="h-[150px] rounded-lg bg-default-300"></div>
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
                        <>
                            <div className='flex w-full mt-[20px] gap-[10px] noxs658:flex-wrap'>
                                {newsArray.map((news: any, index: any) =>
                                    <Link key={index} to={'/news/' + news.key} className='flex w-full flex-col gap-[5px] p-[5px] rounded-md hover:text-primary cursor-pointer hover:opacity-75'>


                                        <Card key={index} className="w-full noxs480:w-full space-y-5 p-4" radius="lg" data-aos="flip-up" data-aos-delay={index * 200}>
                                            <div className="h-24 w-full rounded-lg bg-default-300"

                                                style={{
                                                    backgroundImage: `url(${news.media && news.media[0][0]
                                                        ?
                                                        news.media[0][0] :
                                                        '/emp.png'
                                                        })`,
                                                    backgroundPosition: '50%',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    height: '100px',
                                                    paddingBottom: '56%',
                                                    width: '100%',
                                                }}

                                            ></div>


                                            <div className="space-y-3">
                                                <p className='maxp'>{news.title}</p>

                                                <Chip className='mt-[10px]' variant='flat'>
                                                    {formatTimestamp(news.ctime)}
                                                </Chip>
                                            </div>


                                        </Card>
                                    </Link>
                                )}

                            </div>



                            {!ismb && < Link to={'/news'} className='flex justify-center mt-[30px]'>
                                <Button variant='light' color='primary' endContent={<NavigateNextIcon />}>{langru === 'en' ? "See all" : langru === 'ru' ? "Смотреть все" : "Hammasini ko'rish"}</Button>
                            </Link>}
                        </>
                        :
                        <p>{langru === 'en' ? 'Empty' : langru === 'ru' ? 'пусто' : 'boş'}</p>
                }

            </div>
        </div >
    )
}

export default NewsHome
