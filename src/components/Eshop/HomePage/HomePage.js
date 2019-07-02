import React from 'react';
import HomePageItemLeft from './HomePageItem/HomePageItemLeft';
import HomePageItemRight from './HomePageItem/HomePageItemRight';
import'./HomePage.module.css';
import Pic01 from '../../../assets/flower-03.jpg';
import Pic02 from '../../../assets/flower-02.jpg';
import Pic03 from '../../../assets/flower-01.jpg';


const homePage = () => (
    <div>
        <HomePageItemLeft 
            image={Pic01}
            text="Click and see our carefully selected collections of potted flowers" />
        <HomePageItemRight 
            image={Pic02}
            text="Our vase flowers are grown with love and care" />
        <HomePageItemLeft 
            image={Pic03}
            text="The production process is precise but rewarding at the end" />

    </div>
)
export default homePage;