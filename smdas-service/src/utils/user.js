import api from "./api"

const user = {

    login(data){
        return api.post('api/user/login',data)
    },

    register(data){
        return api.post('api/user/reg',data)
    },
    changePass(data){
        return api.post('api/user/chan_pass',data)
    },
    getQ(data){
        return api.post('api/user/get_security_question',data)
    },
    getA(data){
        return api.post('api/user/get_security_answer',data)
    },

}

export default user



