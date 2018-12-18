<template>
<v-container>

    <!-- onclick of submit btn, prevent other actions, but goto login fxn -->
    <v-form @submit.prevent="signup">

    <v-text-field
        v-model="form.name"
        type="name"
        label="Name"
        required
        ></v-text-field>
         <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

        <v-text-field
        v-model="form.email"
        type="email"
        label="E-mail"
        required
        ></v-text-field>
        <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

        <v-text-field
        v-model="form.password"
        type="password"
        label="Password"
        required
        ></v-text-field>
         <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

        <v-text-field
        v-model="form.password_confirmation"
        type="password"
        label="Confirm Password"
        required
        ></v-text-field>
         

        <router-link to="/login">
        <!-- this will goto route.js, pick login link, then render its components -->
        <!-- remove the flat in btn tag, to get a real btn background -->
        <v-btn type="submit" color="green">LOGIN</v-btn>
        </router-link>

        <v-btn type="submit" color="blue">
            Sign Up
        </v-btn>
        
    </v-form>
</v-container>
</template>


<script>
export default {
    data(){
        return{
            form :{
                name:null,
                email:null,
                password:null,
                password_confirmation:null
            },
            errors:{}
        }
    },

            methods :{
                signup(){
                     axios.post('/api/auth/signup', this.form)
                     //after signup, goto responseAfterLogin(storing username and token) fxn frm User.js.
                     //after which we push to the route_name called forum 
                     .then(res => { User.responseAfterLogin(res)
                        this.$router.push({name:'forum'})
                     })
                    //  .catch(error => console.log(error.response.data))
                    .catch(error => this.errors = error.response.data.errors)
                }
            }

}
</script>

<style>

</style>
