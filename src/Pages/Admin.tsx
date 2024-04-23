import { Button, Card, Chip, Image, Input, Modal, ModalContent, Progress, Tab, Tabs, Textarea } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DropZone from "../Components/Admin/DropZone";
import { CircularProgress } from "@mui/material";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../Api/firebase";
import { burl } from "../Utils/Global";
import { useNavigate } from "react-router";
import GetNews from "../Components/Admin/GetNews";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CollectionsIcon from '@mui/icons-material/Collections';
import { enqueueSnackbar } from "notistack";
import AdminGallery from "../Components/Admin/AdminGallery";


const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState<any>(null)
    const [photoUrls, setPhotoUrls] = useState<string[]>([]);
    const [loadNews, setLoadNews] = useState<boolean>(false)
    const [alod, setAlod] = useState<boolean>(false)
    const [Rel, setRel] = useState<any>(null)
    const navigate = useNavigate()




    const [loading, setLoading] = useState<any>(null)
    const [galleryUrl, setGalleryUrl] = useState<string[]>([]);


    const handleUpload = (urls: string[]) => {
        setPhotoUrls(prevUrls => [...prevUrls, ...urls]);
    };

    const handleDelete = (index: number) => {
        setPhotoUrls(prevUrls => prevUrls.filter((_, i) => i !== index));
    };

    const handleUpload2 = (urls: string[]) => {
        setGalleryUrl(prevUrls => [...prevUrls, ...urls]);
    };

    const handleDelete2 = (index: number) => {
        setGalleryUrl(prevUrls => prevUrls.filter((_, i) => i !== index));
    };

    async function postImgs(arr: string[], dir: string) {
        const promises: Promise<string>[] = [];
        let totalBytes = 0;
        let totalBytesTransferred = 0;
    
        const blobPromises = arr.map(async (url: string) => {
            const response = await fetch(url);
            const blob = await response.blob();
            totalBytes += blob.size; // Увеличиваем общее количество байтов
            return blob;
        });
    
        const blobs = await Promise.all(blobPromises);
    
        for (let index = 0; index < blobs.length; index++) {
            const blob = blobs[index];
            const timestamp = Date.now();
            const fileName = `f${timestamp}.jpg`;
            const storageRef = ref(storage, `${dir}/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, blob);
    
            let lastBytesTransferred = 0;
    
            const promise = new Promise<string>((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        // Обновляем общее количество байтов, переданных для всех изображений
                        totalBytesTransferred -= lastBytesTransferred;
                        totalBytesTransferred += snapshot.bytesTransferred;
                        lastBytesTransferred = snapshot.bytesTransferred;
    
                        const progress = Math.round((totalBytesTransferred / totalBytes) * 100);
                        setLoading(progress);
                        console.log(progress);
    
                    },
                    reject,
                    async () => {
                        try {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve(downloadURL);
                        } catch (error) {
                            reject(error);
                        }
                    }
                );
            });
    
            promises.push(promise);
            await promise;
        }
    
        return Promise.all(promises);
    }
    



    const submitAdm = async (data: any) => {
        setAlod(true)
        setMessage('')
        try {
            console.log(data);
            const req = await axios.post('https://pokiza.fun/api/khm/login.php', data)
            if (req.data.success) {
                setMessage(req.data.message)
                localStorage.setItem('admin', 'true')
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
                setAlod(false)
            } else {
                setAlod(false)
                setMessage(req.data.message)
            }
        } catch {
            setAlod(false)
            console.log('Error');

        }
    }

    const submitNews = async (data: any) => {
        setLoadNews(true)


        postImgs(photoUrls, 'files')
            .then(async (downloadURLs) => {
                try {
                    let imgs = []
                    imgs.push(downloadURLs)
                    data.media = imgs
                    data.ctime = Date.now()
                    const req = await axios.post(burl + 'news.json', data)
                    setLoadNews(false)
                    navigate('/news/' + req.data.name);

                } catch {
                    console.log('Error');
                    setLoadNews(false)
                }
            })
            .catch(error => {
                console.log(error);
                setLoadNews(false)
            });
        console.log(photoUrls);


    }


    const submitGallery = async () => {
        setLoadNews(true)
        console.log('wdwd');


        postImgs(galleryUrl, 'gallery')
            .then(async (downloadURLs) => {
                console.log(downloadURLs);
                setLoadNews(false)
                enqueueSnackbar('Картинки успешно загружены!', { variant: 'success' });
                setGalleryUrl([])
                setRel(Date.now())
            })
            .catch(error => {
                console.log(error);
                setLoadNews(false)
                enqueueSnackbar('Ошибка при загрузке!', { variant: 'error' });
            });


    }







    return (
        localStorage.getItem('admin') ?
            <>
                <div className="w-full min-h-screen flex justify-center noxs658:p-[20px]">

                    <div className="flex w-max noxs658:w-full flex-col mt-[50px]">

                        <Tabs aria-label="Options" onSelectionChange={(key: React.Key) => {
                            if (key == 'back') {
                                navigate('/')
                            }
                        }} defaultSelectedKey={'photos'} color="primary" variant="bordered">
                            <Tab
                                key={'back'}
                                title={
                                    <div className="flex items-center space-x-2">
                                        <ArrowBackIcon />
                                    </div>
                                }
                            />
                            <Tab
                                key="photos"
                                title={<AddIcon />
                                }
                            >
                                <Card className="py-[30px] px-[20px] w-[650px] noxs658:w-full flex flex-col gap-[20px]">
                                    <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit(submitNews)}>

                                        <Input
                                            label="Название"
                                            size="sm"
                                            {...register('title', { required: true })}
                                        />
                                        <Textarea
                                            label="Описание"
                                            size="sm"
                                            maxRows={100}
                                            {...register('desc', { required: true })}
                                        />


                                        <DropZone
                                            handleDelete={handleDelete}
                                            handleUpload={handleUpload}
                                            photoUrls={photoUrls}
                                            setPhotoUrls={setPhotoUrls} />


                                        <Button type="submit" fullWidth variant="shadow" color="primary">
                                            Добавить
                                        </Button>
                                    </form>
                                </Card>
                            </Tab>
                            <Tab
                                key="music"
                                title={
                                    <EditIcon />
                                }
                            >

                                <Card className="py-[30px] px-[20px] w-[650px] noxs658:container flex flex-col gap-[20px]">
                                    <GetNews />
                                </Card>
                            </Tab>
                            <Tab
                                key="gallery"
                                title={<CollectionsIcon />}
                            >
                                <Card className="py-[30px] px-[20px] w-[650px] noxs658:w-full flex flex-col gap-[20px]">
                                    <form className="flex flex-col gap-[20px]" >

                                        <DropZone
                                            handleDelete={handleDelete2}
                                            handleUpload={handleUpload2}
                                            photoUrls={galleryUrl}
                                            setPhotoUrls={setGalleryUrl} />


                                        <Button onClick={() => {
                                            if (galleryUrl.length > 0) {
                                                submitGallery()
                                            }
                                        }} fullWidth variant="shadow" color="primary">
                                            Добавить
                                        </Button>
                                    </form>

                                    <h1 className="text-[30px] mt-[20px] text-center">Галлерея</h1>
                                    <AdminGallery rel={Rel} />
                                </Card>
                            </Tab>
                        </Tabs>

                    </div>


                </div>



                <Modal backdrop={'blur'} hideCloseButton placement={"center"} isOpen={loadNews} onClose={() => { }}>


                    <ModalContent className="flex justify-center items-center bg-transparent shadow-none">

                        {loading ?
                            <Card className="p-[20px] min-w-[300px] ">
                                <p className="text-center font-bold text-[20px]">{loading}%</p>
                                <Progress
                                    aria-label="Downloading..."
                                    size="lg"
                                    value={loading}
                                    color="primary"
                                    className="max-w-md"
                                />
                            </Card>

                            :

                            <CircularProgress size={100} />
                        }



                    </ModalContent>

                </Modal>

            </>
            :
            <div className="w-full min-h-screen flex items-center justify-center">
                <Card className="py-[30px] px-[20px] w-[280px] flex flex-col gap-[20px]">
                    <div className="flex w-full justify-center">
                        <Image
                            src="/sublogo.png"
                            alt="logo"
                            width={100}
                        />
                    </div>
                    <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit(submitAdm)}>

                        {message &&
                            <div className="w-full flex justify-center">
                                <Chip color="primary" variant="dot">{message}</Chip>
                            </div>
                        }

                        <Input
                            label="Логин"
                            size="sm"
                            {...register('login', { required: true })}
                        />
                        <Input
                            label="Пароль"
                            size="sm"
                            {...register('password', { required: true })}
                        />

                        <Button type="submit" isLoading={alod} fullWidth variant="shadow" color="primary">
                            Вход
                        </Button>
                    </form>
                </Card>
            </div>







    )
}

export default Admin