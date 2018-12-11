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

            methods :{
                login(){
                    // to connect to the api route, we use axios
                    axios.post('/api/auth/login', this.form)

                    //if the form is connected to the api link, then, console.log the data, else , catch the error
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error.response.data))
                }
            }

}
</script>

<style>

</style>
