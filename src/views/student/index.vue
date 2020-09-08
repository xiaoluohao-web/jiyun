<template>
    <div>

    </div>
</template>

<script>
import StudebtApi from "../..api/student"
export default {
    data() {
        return {
            searchInfo:{
                limit:10,
                page:1,
                status:"",
                nickname:"",
                mobile:""
            }
        };
    },
    created() {
        this.fetchData()
    },
    mounted() {

    },
    methods: {
        fetchData(){
            StudentApi.getStudentList(this.searchInfo).then(res=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
};
</script>

<style scoped lang="scss">

</style>
