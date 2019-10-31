import { async } from "q";

const config = {
    base: 'http://localhost:63889/api/users/',
    login: 'authenticate',
    register: 'register'
    
}
class LoginUser
{
constructor(username, password)
    {
        this.username = username;
        this.password = password;
    }
}
class RegisterUser
{
constructor(username, password, firstName, lastName)
    {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const LoginServices = {
    signInUser: async (username, password) => {
        const userObj = new LoginUser(username, password);
        const response = await fetch(`${config.base}${config.login}`, {
            method: 'post',
            
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json',
              }
        })
        const user = await response.json();
        return user;
    },
    signUpUser: async (username, password, firstName, lastName) => {
        const userObj = new RegisterUser(username, password, firstName, lastName);
        const response = await fetch(`${config.base}${config.register}`, {
            method: 'post',
            
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json',
              }
        })
        const data = await response.json();
        return data;
    }

}
export default LoginServices;