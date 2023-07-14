import api from "./api"

const user = {

    login(data){
        return api.post('api/user/login',data)
    },

    register(data){
        return api.post('api/user/register',data)
    },
    changePass(data){
        return api.post('api/user/chan_pass',data)
    },
    getSecurityQuestion(data){
        return api.post('api/user/get_security_question',data)
    },
    checkAnswer(data){
        return api.post('api/user/check_answer',data)
    },

}

export default user



