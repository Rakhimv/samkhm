import { Button, Card, Input, Textarea, User } from '@nextui-org/react'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form"
import axios from "axios"
import { Rating } from '@mui/material';
import { formatTimeDetal } from '../Utils/Utils';


function RatingBox() {
    const [value, setValue] = useState<any>(0)
    const { register, handleSubmit } = useForm();
    const [ratings, setRatings] = useState<any>(null)


    const [loadcom, setLoadcom] = useState<boolean>(false)


    async function getRatings() {
        try {
            const req = await axios.get('https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json')
            if (req.data) {
                const ratingsArray = Object.keys(req.data).map(key => {
                    const newsItem = req.data[key];
                    newsItem.key = key;
                    return newsItem;
                }).reverse();
                setRatings(ratingsArray)
                console.log(ratingsArray);
            }
        } catch {
            console.log('Error');
        }
    }


    useEffect(() => {
        AOS.init(
            {
                duration: 1000,
                easing: 'ease-in-out-cubic',
                once: true
            }
        )
        getRatings()
    }, [])



    async function submitR(data: any) {
        setLoadcom(true)
        try {

            if (value == 0) {
                data.rating = 5;
            } else {
                data.rating = value;
            }
            data.ctime = Date.now()
            console.log(data);
            const req = await axios.post('https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json', data)
            console.log(req);
            localStorage.setItem('rating', data.rating)
            setLoadcom(false)
            getRatings()
        } catch {
            console.log('Error');
            setLoadcom(false)
        }
    }


    return (
        <>

            <div className='w-full flex justify-center py-[50px] pt-[20px] mt-[50px] mb-[0px] noxs1000:p-[20px]'>
                <div className='container max-w-[900px] '>
                    <div className={`py-[20px] flex justify-between noxs658:flex-col noxs1000:gap-[20px] items-center`}>
                        <p className="text-2xl font-bold">Отзывы</p>
                    </div>



                    <div className='comms py-[50px] pt-[0px] gap-[20px] flex flex-col'>
                        {ratings &&
                            ratings.map((item: any, index: number) =>
                                <Card onContextMenu={(e: any) => {
                                    e.preventDefault();
                                    if (localStorage.getItem('admin')) {
                                        let promt = confirm('Удалить комментарий?')
                                        if (promt) {
                                            axios.delete('https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app/rating/' + item.key + '.json')
                                            getRatings()
                                        }
                                    }
                                }} key={index} className='p-[20px] flex gap-[20px] '>
                                    <div className='flex gap-[20px] items-start justify-between noxs658:flex-col-reverse'>
                                        <User name={item.name} className='flex justify-start' description={formatTimeDetal(item.ctime)} />
                                        <Rating size='medium' readOnly value={item.rating} />
                                    </div>
                                    <p>{item.text}</p>
                                </Card>
                            )
                        }
                    </div>

                    {!localStorage.getItem('rating') &&
                        <form onSubmit={handleSubmit(submitR)} className='flex flex-col mb-[50px] gap-[20px]'>
                            <div className='flex noxs658:justify-center'>
                                <Rating value={value}
                                    onChange={(_, newValue) => {
                                        setValue(newValue);
                                    }} size='large' />
                            </div>
                            <Input
                                variant='bordered'
                                label="Ваше имя"
                                {...register('name', { required: true })}
                            />
                            <Textarea
                                variant='bordered'
                                placeholder="Отзыв"
                                {...register('text', { required: true })}
                            />
                            <Button isLoading={loadcom} color='primary' size='lg' type='submit' variant='solid'>Отправить</Button>


                        </form>

                    }


                </div>
            </div>
        </>
    )
}

export default RatingBox
