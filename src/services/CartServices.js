const config = {
    base: 'http://localhost:63889/api/orders/',    
}
class Order
{
constructor(fullName, address, city, creditCardNumber)
    {
        this.fullName = fullName;
        this.address = address;
        this.city = city;
        this.creditCardNumber = creditCardNumber;
    }
}
const OrderServices = {
    completeOrder: async (fullName, address, city, creditCardNumber, token) => {
        const orderObj = new Order(fullName, address, city, creditCardNumber);
        const response = await fetch(`${config.base}`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderObj),
            
        });
        const data = await response.json();
        console.log(data);
        
    }
}
export default OrderServices;