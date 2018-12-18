class AppStorage{
    //storing the token, so that user can refresh page
    storeToken(token){
        localStorage.setItem('token',token);
    }

    //store the user properties as well. e.g user->name. goto auth file to include the user->name as one of the attributes, we should get
    storeUser(user){
        localStorage.setItem('user',user);
    }

    //binding both mtds into one. optional
    store(user, token){
        this.storeUser(user)
        this.storeToken(token)
    }

    //onLogout, clearing the user attributes, and its token
    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');   
    }

    //getting anew token
    getToken(){
        return localStorage.getItem('token');
    }

     //getting anew user
     getUser(){
        return localStorage.getItem('user');
    }
}

export default AppStorage = new AppStorage();