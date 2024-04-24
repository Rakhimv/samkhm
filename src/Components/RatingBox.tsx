import { Button, Input, Textarea } from '@nextui-org/react'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form"
import axios from "axios"
import { Rating } from '@mui/material';


function RatingBox() {
    const [value, setValue] = useState<any>(0)
    const { register, handleSubmit } = useForm();
    const [ratings, setRatings] = useState<any>(null)

    console.log(setValue);
    
    async function getRatings() {
        try {
            const req = await axios.get('https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json')
            if (req.data) {
                const ratingsArray = Object.keys(req.data).map(key => req.data[key]);
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



    const submitRating = (data: any) => {
        try {
            data.rating = value;
            console.log(data);
            const req = axios.post('https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json', data)
            console.log(req);
            
        } catch {
            console.log('Error');

        }
    }


    return (
        <>
            <div className='w-full flex justify-center py-[50px] pt-[20px] mt-[50px] mb-[0px] noxs1000:p-[20px]' data-aos="fade-up">
                <div className='container max-w-[900px] '>

                    <form onSubmit={handleSubmit(submitRating)}>
                        <Rating />
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
                        <Button color='primary' type='button' onClick={() => window.location.href = 'https://www.roblox.com/download/client?os=win'} variant='solid'>Отправить</Button>
                    </form>



                    {ratings &&

                        <div>
                            {ratings.map((item: any, index: number) =>
                                <p key={index}>{item.name}</p>
                            )}
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default RatingBox
