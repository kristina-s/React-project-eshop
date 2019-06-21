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
    getData: async function(type){
        const url = `${config.baseUrl}${type}.json`;
        const response = await fetch(url);
        const result = await response.json();
        const flowers = result.map(flower => 
            new Flower (flower.id, flower.name, flower.latinName, flower.titleImage, flower.humidity, flower.light, flower.description, flower.bloomTime, flower.price, flower.images) 
        );
		return flowers;
	},
	SortData : function (array, target) {
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
    }
}



export default services;