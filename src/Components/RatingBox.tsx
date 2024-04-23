// import { Navigate, Route, Routes } from 'react-router'
// import './App.scss'
// import { ThemeProviderWrapper } from './Utils/ThemeContext'
// import { Button, Input, Textarea } from '@nextui-org/react'
// // import Zoom from 'react-medium-image-zoom'
// // import 'react-medium-image-zoom/dist/styles.css'
// import { Rating } from '@mui/material'
// import { useEffect, useState } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css';
// import { useForm } from "react-hook-form"
// import axios from "axios"


// function App() {
//   const [value, setValue] = useState<any>(0)
//   const { register, handleSubmit } = useForm();
//   const [ratings, setRatings] = useState<any>(null)


//   async function getRatings() {
//     try {
//       const req = await axios.get('https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json')
//       if (req.data) {
//         const ratingsArray = Object.keys(req.data).map(key => req.data[key]);
//         setRatings(ratingsArray)
//         console.log(ratingsArray);
        
//       }
//     } catch {
//       console.log('Error');

//     }
//   }


//   useEffect(() => {
//     AOS.init(
//       {
//         duration: 1000,
//         easing: 'ease-in-out-cubic',
//         once: true
//       }
//     )


//     getRatings()
//   }, [])


//   const submitRating = (data: any) => {
//     try {
//       data.rating = value;
//       console.log(data);
//       const req = axios.post('https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json', data)
//     } catch {
//       console.log('Error');

//     }
//   }




//   return (
//     <ThemeProviderWrapper>

//       <Routes>
//         <Route index element={<>



//           <div className='max-w-[200px]'>
//             <Rating data-aos="fade-up" defaultValue={0} size='large' value={value} onChange={(event, newValue) => {
//               setValue(newValue);
//             }} />


//             <form onSubmit={handleSubmit(submitRating)}>


//               <Input
//                 variant='bordered'
//                 label="Ваше имя"
//                 {...register('name', { required: true })}
//               />

//               <Textarea
//                 variant='bordered'
//                 placeholder="Отзыв"
//                 {...register('text', { required: true })}
//               />



//               <Button color='primary' type='submit' variant='solid'>Отправить</Button>
//             </form>


//             {ratings && 
            
//               <div>
//                 {ratings.map((item: any, index: number) => 
//                   <p>{item.name}</p>
//                 )}
//               </div>

//             }


//           </div>

//         </>} />

//         <Route path="*" element={<Navigate to="/404" />} />
//         <Route path="/404" element={<p>404</p>} />
//       </Routes >
//     </ThemeProviderWrapper >
//   )
// }

// export default App
