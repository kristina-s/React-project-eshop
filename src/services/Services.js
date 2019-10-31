import sun1 from '../assets/small-images/sun-01.png';
import sun2 from '../assets/small-images/sun-02.png';
import sun3 from '../assets/small-images/sun-03.png';
import bu1 from '../assets/small-images/bucket-01.png';
import bu2 from '../assets/small-images/bucket-02.png';
import bu3 from '../assets/small-images/bucket-03.png';

class Flower
{
	constructor(id, name, latinName, titleImage, humidity, light, description, bloomTime, price, images)
	{
		this.id = id;
		this.name = name;
		this.latinName = latinName;
		this.titleImage = titleImage;
		this.description = description;
		this.bloomTime = bloomTime;
		this.humidity = humidity;
		this.light = light;
		this.price = price;
	}	
}
class CartItem
{
constructor(quantity, item)
    {
        this.quantity = quantity;
        this.item = item;
    }
}
const config = {
    baseUrl : "http://localhost:63889/api/flowers/",   
}
const typeOfSort = {
    NameAsc : 'name-asc',
    NameDesc : 'name-desc',
    PriceAsc : 'price-asc',
    PriceDesc : 'price-desc'
}
let typeOfLight = {
    sunHigh: 'sunlight',
    sunMedium: 'half-shadow',
    sunLow: 'shadow'
}
let typeOfHumidity = {
    humidityHigh: 'high',
    humidityMedium: 'medium',
    humidityLow: 'low'
}
const services = {
    getData: async (type, token) => {
        const url = `${config.baseUrl}${type}`;
        const response = await fetch(url, {method:'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        });
        const result = await response.json();
        const flowers = result.map(flower => 
            new Flower (flower.id, flower.name, flower.latinName, flower.titleImage, setBucketIcon(flower.humidity), setSunIcon(flower.light), flower.description, flower.bloomTime, flower.price) 
        );
		return flowers;
	},
	sortData : (array, target) => {
        switch (target) {
            case typeOfSort.NameAsc:
                array.sort((f, s) => f.name.localeCompare(s.name));
                return array;
            case typeOfSort.NameDesc:
                array.sort((f, s) => s.name.localeCompare(f.name))
                return array;
            case typeOfSort.PriceAsc:
                array.sort((f, s) => f.price - s.price);
                return array;
            case typeOfSort.PriceDesc:
                array.sort((f, s) => s.price - f.price);
                return array;
            default:
                break;
        }
    },
    mapIntoCartObjects : (array) => {
        return array.map(x => new CartItem (1, x))
    },

    checkIsInCart : (array, itemToAdd) => {
        let foundItem = array
            .filter(x => x.item.name === itemToAdd.name);
        if(foundItem.length !== 0){
            return true;
        }
        else{
            return false;
        }
    },

}

const setSunIcon = (type) => {
    switch(type){
        case typeOfLight.sunHigh:
            return sun1;
        case typeOfLight.sunMedium:
            return sun2;
        case typeOfLight.sunLow:
            return sun3; 
        default:
            break;
    }
}
const setBucketIcon = (type) => {
    switch(type){
        case typeOfHumidity.humidityHigh:
            return bu1;
        case typeOfHumidity.humidityMedium:
            return bu2;
        case typeOfHumidity.humidityLow:
            return bu3;   
        default:
            break;   
    }
}

export default services;




