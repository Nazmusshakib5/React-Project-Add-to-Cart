class Helper {


    static isLogin(){
        return false
    }

    static API_BASE='https://cart-api.teamrabbil.com/api'

    static isEmpty(email){
        return email.length===0;
    }
}

export default Helper;