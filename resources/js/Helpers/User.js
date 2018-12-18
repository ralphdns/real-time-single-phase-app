import Token from './Token' //now we can use the Token.payload fxn here
import AppStorage from './AppStorage'

class User {

    login(data){
    // to connect to the api route, we use axios. tis fxn is used in Login.vue
    axios.post('/api/auth/login',data)

    //if the form is connected to the api link, then, console.log the data, else , catch the error
    // .then(res => console.log(res.data))
    // .then(res => {
    //     Token.payload(res.data.access_token)
    // })
    .then(res => this.responseAfterLogin(res))
    .catch(error => console.log(error.response.data))
    }

    //after login, if token is valid, save it in the AppStorage.store. this we can see in our browser(inspection element->Appication).
    //once the token is stored, the login btn shld display:none
    //now we store the token and username. goto auth controller to add username as an object ppty to get after login.
    responseAfterLogin(res){
      
        const access_token = res.data.access_token
        const username = res.data.user
        if(Token.isValid(access_token)){
            AppStorage.store(username,access_token)
            window.location = '/forum';
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        // console.log(storedToken)
        if(storedToken){
            return !!Token.isValid(storedToken);
        }
        return false
    }

    loggedIn(){
        return this.hasToken()
    }

    logout(){
        AppStorage.clear()
        window.location = '/forum';
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
           const payload = Token.payload(AppStorage.getToken())
           return payload.sub
        }
    }

}

export default User = new User();