<!-- 用户详情页 -->
<template>
    <div class="detail-info">
        <p>姓名：<span>{{userInfo.name}}</span></p>
        <p>日期：<span>{{userInfo.date}}</span></p>
        <p>地址：<span>{{userInfo.address}}</span></p>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            };
        },
        components: {},
        mounted() {
        },
        methods: {},
        computed: {
            userInfo () {
                return this.$store.state.userInfo;
            }
        },
        watch: {}
    };
</script>

<style lang="scss" scope>
    .detail-info {
        p:first-child{
            margin-top: 0;
        }
    }
</style>
