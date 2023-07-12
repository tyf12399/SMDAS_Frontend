import api from "./api"

const hotspot = {
        getCompanyNotices(){
        return api.get('api/hotspot/get_company_notices')
    },
        getNews(){
        return api.get('api/hotspot/get_news')
    },

}

export default hotspot



