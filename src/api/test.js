import request from "../utils/request"

export default {
    login(){
        return request({
            url:"http://mengxuegu.com:7300/mock/5f509f648d90085e5b584089/v1/api/user/login",
            method:"post",
            data:{
                username:"name",
                userpass:"pass",
            }})
    },
    getUserInfo(){
        return request({
            url:"http://mengxuegu.com:7300/mock/5f509f648d90085e5b584089/v1/api/user/info"
        })
    }
}