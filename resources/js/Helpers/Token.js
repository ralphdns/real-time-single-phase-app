class Token{

    //validate payload
    isValid(token){
        const payload = this.payload(token);
        // console.log(payload)
        if(payload){
            return payload.iss == "http://localhost:8000/api/auth/login" || "http://localhost:8000/api/auth/signup" ? true : false 
        }
        return false;
    }

    //split payload
    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    //decode payload, using atob, a base64 fxn
    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()