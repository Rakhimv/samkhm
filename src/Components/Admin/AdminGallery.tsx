import { ref, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Button, Image } from "@nextui-org/react";
import { storage } from "../../Api/firebase";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import CloseIcon from '@mui/icons-material/Close';
import { enqueueSnackbar } from "notistack";

const AdminGallery = ({ rel }: any) => {
    const [imgs, setImgs] = useState<any>([])
    const [load, setLoad] = useState<boolean>(true)
    const filesRef = ref(storage, '/gallery');



    const ImgItem = ({ item, index }: { item: { src: string, path: string }, index: number }) => {
        const [it, setIt] = useState<number>(0);
        console.log(item);
    
        return (
            <div key={index} style={{ position: 'relative' }} className={`${it === 1 ? 'opacity-30' : ''} ${it === 2 ? 'hidden' : ''}`} >
                <Zoom>
                    <Image loading="lazy" src={item.src} key={index} className="w-full" />
                </Zoom>
                <Button isIconOnly className='absolute top-1 right-1 z-[10]' onClick={() => {
                    handleDelete(item.path);
                    setIt(1);
                    setTimeout(() => {
                        setIt(2);
                    }, 1000);
                }} size='sm'>
                    <CloseIcon />
                </Button>
            </div>
        );
    }
    


    async function getImgs() {
        setLoad(true)
        try {
            const res = await listAll(filesRef);
            await res.items.forEach(async (itemRef) => {
                try {
                    const url = await getDownloadURL(itemRef);
                    const path = itemRef.fullPath;
                    setImgs((pim: any) => [...pim, { src: url, path: path }])
                } catch (error) {
                    setImgs([])
                    console.error('Ошибка при получении URL файла:', error);
                }
            });
            setLoad(false)
        } catch (error) {
            setImgs([])
            setLoad(false)
            console.error('Ошибка при получении списка файлов:', error);
        }
    }


    async function handleDelete(url: string) {
        const storageRef = ref(storage, url);
        try {
            await deleteObject(storageRef);
            enqueueSnackbar('Файл успешно удален из хранилища.', { variant: 'success' });
        } catch (error) {
            console.error('Ошибка при удалении файла из хранилища:', error);
        }
    }



    useEffect(() => {
        getImgs()
    }, [rel])



    return (
        <div className="w-full flex justify-center mb-[50px]">
            <div className="container  max-w-[900px] flex flex-col">
                {!load
                    ?
                    imgs.length > 0 &&

                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry gutter="20px">
                            {imgs.map((item: any, index: number) => (
                                <ImgItem item={item} index={index} />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>

                    :

                    <div className="w-full h-[200px] flex justify-center items-center">
                        <CircularProgress size={50} />
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminGallery