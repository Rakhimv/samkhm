import { Route, Routes } from 'react-router'
import './App.scss'
import { ThemeProviderWrapper } from './Utils/ThemeContext'
// import { Button, Input, Textarea } from '@nextui-org/react'
// import Zoom from 'react-medium-image-zoom'


import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Home from './Pages/Home'
import MenuLayout from './Layouts/MenuLayout'
import Managers from './Pages/Managers'
import Directions from './Pages/Directions'
import Gallery from './Pages/Gallery'
import Admin from './Pages/Admin'
import NewsOne from './Pages/NewsOne'
import News from './Pages/News'


function App() {

  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true
      }
    )


  }, [])

  return (
    <ThemeProviderWrapper>

      <Routes>
        <Route element={<MenuLayout />}>
          <Route index element={<Home />} />
          <Route path='/managers' element={<Managers />} />
          <Route path='/directions' element={<Directions />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/news/:id' element={<NewsOne />} />
          <Route path='/news' element={<News />} />

          <Route path="*" element={<p>404</p>} />
          <Route path="/404" element={<p>404</p>} />
        </Route>


        <Route path='/admin' element={<Admin />} />
      </Routes >
    </ThemeProviderWrapper >
  )
}

export default App
