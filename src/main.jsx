import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage'
import SignUp from './landing_page/singnup/SingnUp'
import AboutPage from './landing_page/about/AboutPage'
import Pricing from './landing_page/pricing/PricingPage'
import Support from './landing_page/support/Support'
import ProductPage from './landing_page/products/productpage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './landing_page/footer'
import Navbar from './landing_page/Navbar'
import Notfound from './landing_page/Notfound'
import './main.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/'element={<HomePage/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/about'element={<AboutPage/>}></Route>
    <Route path='/support'element={<Support/>}></Route>
    <Route path='/pricing'element={<Pricing/>}></Route>
    <Route path='/product'element={<ProductPage/>}></Route>
    <Route path='*'element={<Notfound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
