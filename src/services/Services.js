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
		this.images = images;
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
    baseUrl : "https://raw.githubusercontent.com/kristina-s/Frontend-project-resourses/master/json/",   
}
const typeOfSort = {
    NameAsc : 'name-asc',
    NameDesc : 'name-desc',
    PriceAsc : 'price-asc',
    PriceDesc : 'price-desc'
}
const services = {
    getData: async (type) => {
        const url = `${config.baseUrl}${type}.json`;
        const response = await fetch(url);
        const result = await response.json();
        const flowers = result.map(flower => 
            new Flower (flower.id, flower.name, flower.latinName, flower.titleImage, flower.humidity, flower.light, flower.description, flower.bloomTime, flower.price, flower.images) 
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
    }
}



export default services;