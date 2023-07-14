import api from "./api"

const stockmarket = {
    gethuStocks(){
        return api.get('api/stockmarket/get_hu_stocks')
    },
    getshenStocks(){
        return api.get('api/stockmarket/get_shen_stocks')
    },
    getPrediction(data){
        return api.post('api/stockmarket/get_prediction',data)
    },
    getHisRecord(data){
        return api.post('api/stockmarket/get_his_record',data)
    },
    getKData(data){
        return api.post('api/stockmarket/get_k_data',data)
    },
    getTopStocks(){
        return api.get('api/stockmarket/get_top_stocks')
    }

}

export default stockmarket



