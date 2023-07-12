import api from "./api"

const stockmarket = {
    getHuStocks(){
        return api.get('api/stockmarket/get_hu_stocks')
    },
    getshenStocks(){
        return api.get('api/stockmarket/get_shen_stocks')
    },
    getAnalysis(data){
        return api.post('api/stockmarket/get_analysis',data)
    },
    getHisRecord(data){
        return api.post('api/stockmarket/get_his_record',data)
    },


}

export default stockmarket



