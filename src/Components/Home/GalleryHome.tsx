import { useEffect, useState } from 'react'
import { Button, Divider } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useMediaQuery } from '@mui/material';
import { matches658 } from '../../Utils/Sizes';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../Api/firebase';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const GalleryHome = () => {
    const [imgs, setImgs] = useState<any>([])
    const [load, setLoad] = useState<boolean>(true)
    const filesRef = ref(storage, '/gallery');

    const ismb = useMediaQuery(matches658)

    async function getImgs() {
        setLoad(true);
        try {
            const res = await listAll(filesRef);
            const urls = await Promise.all(res.items.map(async (itemRef) => {
                try {
                    return await getDownloadURL(itemRef);
                } catch (error) {
                    console.error('Ошибка при получении URL файла:', error);
                    return null;
                }
            }));

            const lastFiveImgs = urls.slice(-5);
            setImgs(lastFiveImgs.filter(url => url !== null));
            setLoad(false);
        } catch (error) {
            setImgs([]);
            setLoad(false);
            console.error('Ошибка при получении списка файлов:', error);
        }
    }


    useEffect(() => {
        getImgs()
    }, [])

    return (
        <div className='w-full flex justify-center py-[50px] pt-[20px] mt-[50px] mb-[0px] noxs1000:p-[20px]' data-aos="fade-up">
            <div className='container max-w-[900px] '>
                <div className={`py-[20px] flex justify-between noxs658:flex-col noxs1000:gap-[20px] items-center`}>
                    <p className="text-2xl font-bold">Фотогалерея</p>

                    {ismb && < Link to={'/news'}>
                        <Button variant='light' color='primary' endContent={<NavigateNextIcon />}>Перейти</Button>
                    </Link>}
                </div>
                <Divider />
                {load ?
                    <div className='gallery-grid mt-[20px]'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className='gallery-item rounded-[10px] overflow-hidden'>

                            </div>

                        ))}

                    </div>
                    :


                    imgs.length > 0 ?
                        <>
                            <div className='gallery-grid mt-[20px]'>
                                {imgs.map((item: any, index: any) =>

                                    <div className='gallery-item rounded-[10px] overflow-hidden'>
                                        <Zoom >
                                            <div
                                                className='pb-[58%]'
                                                key={index}
                                                role="img"
                                                style={{
                                                    borderRadius: 10,
                                                    backgroundColor: '#fff',
                                                    backgroundImage: `url("${item}")`,
                                                    backgroundPosition: '50%',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    height: '100%',
                                                    width: '100%',
                                                }}
                                            />
                                        </Zoom>
                                    </div>


                                )}

                            </div>



                            {!ismb && < Link to={'/gallery'} className='flex justify-center mt-[30px]'>
                                <Button variant='light' color='primary' endContent={<NavigateNextIcon />}>Перейти</Button>
                            </Link>}
                        </>
                        :
                        <p>пусто</p>
                }

            </div>
        </div >
    )
}

export default GalleryHome