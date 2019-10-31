import React from 'react';
import HomePageItemLeft from './HomePageItem/HomePageItemLeft';
import HomePageItemRight from './HomePageItem/HomePageItemRight';
import'./HomePage.module.css';
import Pic01 from '../../../assets/flower-03.jpg';
import Pic02 from '../../../assets/flower-02.jpg';
import Pic03 from '../../../assets/flower-01.jpg';


const homePage = (props) => (
    <div>
        
        <div>
            
        </div>

        <div>
        <HomePageItemLeft 
            image={Pic01}
            text="This is our carefully selected collection of potted flowers" 
            eventValue="Potted"
            clickItem={props.clickItem}/>
        <HomePageItemRight 
            image={Pic02}
            text="Our vase flowers are grown with love and care"
            eventValue="Branch"
            clickItem={props.clickItem} />
        <HomePageItemLeft 
            image={Pic03}
            text="The production process is precise but rewarding at the end"
            />
        </div>
        

    </div>
)
export default homePage;