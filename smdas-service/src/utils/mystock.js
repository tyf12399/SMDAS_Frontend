import api from "./api"

const mystock = {
    getMyStock(data){
        return api.post('api/mystock/get_my_stock',data)
    },
    addMyStock(data){
        return api.post('api/mystock/add_my_stock',data)
    },
    delMyStock(data){
        return api.post('api/mystock/del_my_stock',data)
    },
    getAdvice(data){
        return api.post('api/mystock/get_advice',data)
    },
    getAddStock(data){
        return api.post('api/mystock/get_ad_stock',data)
    },      
}

export default mystock



