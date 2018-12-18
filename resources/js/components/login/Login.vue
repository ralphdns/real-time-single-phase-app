<template>
<v-container>

    <!-- onclick of submit btn, prevent other actions, but login -->
    <v-form @submit.prevent="login">

    <v-text-field
        v-model="form.email"
        type="email"
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
        v-model="form.password"
        type="password"
        label="Password"
        required
        ></v-text-field>

        <v-btn type="submit" color="green">
            Login
        </v-btn>

         <router-link to="/signup">
        <!-- this will goto route.js, pick login link, then render its components -->
        <v-btn type="submit" color="blue">SIGN UP</v-btn>
      </router-link>
        
    </v-form>
</v-container>
</template>

<script>
export default {
    data(){
        return{
            form :{
                email:null,
                password:null
            }
        }
    },
    created(){
        //so login route doesnt run, once user is logged in
        if(User.loggedIn()){
            this.$router.push({name:'forum'})
        }
    },

            methods :{
                login(){
                    //form User.js
                    User.login(this.form)
                    // this.$router.push({name:'forum'})
                }
            }

}
</script>

<style>

</style>
