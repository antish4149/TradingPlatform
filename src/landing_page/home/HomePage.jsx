import Reac from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Footer from '../footer';
import OpenAccount from '../OpenAccount';
function HomePage(){
    return(
        <div>
            <Hero/>
            <Award/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </div>
    )
}

export default HomePage;