<template>
    <div>
        <toolbar></toolbar>

        <!-- router-views holds all linked components -->
        <router-view></router-view>
        <!-- <login></login> -->
        <app-footer></app-footer>
    </div>

</template>

<script>
    import toolbar from './Toolbar'
    import AppFooter from './AppFooter'
    import login from './login/Login'
    import signup from './login/Signup'

    export default {
        components:{toolbar,AppFooter,login,signup}
    }
</script>

<style>

</style>
