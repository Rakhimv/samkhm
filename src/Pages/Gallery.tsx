import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../Api/firebase";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Button, Image, Skeleton } from "@nextui-org/react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const Gallery = () => {
  const [imgs, setImgs] = useState<any>([])
  const [load, setLoad] = useState<boolean>(true)
  const filesRef = ref(storage, '/gallery');


  async function getImgs() {
    setLoad(true)
    try {
      const res = await listAll(filesRef);
      await res.items.forEach(async (itemRef) => {
        try {
          const url = await getDownloadURL(itemRef);
          console.log('URL файла:', url);
          setImgs((pim: any) => [...pim, url])
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

  useEffect(() => {
    getImgs()
  }, [])



  return (
    <div className="w-full flex justify-center min-h-[70vh] mb-[50px] noxs658:pt-[10px]">
      <div className="container  p-[20px] flex flex-col">
        <div className={`py-[20px] mb-[10px] flex ${localStorage.getItem('admin') ? 'justify-between noxs658:flex-col noxs658:gap-[20px] noxs658:justify-center' : 'justify-center'} items-center`}>
          <p className="text-3xl font-bold noxs658:text-center">Студенческая галерея</p>
          {localStorage.getItem('admin') &&
            <Link to={'/admin'}>
              <Button startContent={<AddIcon />}>Добавить</Button>
            </Link>
          }
        </div>
        {!load
          ?
          imgs.length > 0 ?

            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="20px">
                {imgs.map((item: any, index: number) => (
                  <Zoom>
                    <Image loading="lazy" src={item} key={index} className="w-full" />
                  </Zoom>
                ))}
              </Masonry>
            </ResponsiveMasonry>

            :
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="20px">
                {Array.from({ length: 9 }).map((_) =>
                  <Skeleton className="rounded-lg">
                    <div className="w-full h-[200px]"></div>
                  </Skeleton>
                )}
              </Masonry>
            </ResponsiveMasonry>



          :
          <div className="w-full h-[400px] flex justify-center items-center">
            <CircularProgress size={50} />
          </div>
        }
      </div>
    </div>
  )
}

export default Gallery