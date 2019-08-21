<template>
    <div>
        <v-container text-center>
            <v-img :aspect-ratio="50/10" src="@/assets/kaktus_logo.jpg">
                <v-layout column fill-height  >
                    <v-spacer></v-spacer>
                    <v-flex shrink>
                        <span class="pa-0" style="float:right;">
                            <template v-if="userIsAuthenticated">
                                <span v-if="userDisplayName">Здравейте, {{userDisplayName}}!</span>
                                <v-btn tile outlined color="red" @click="onSignOutClick()">Logout</v-btn>
                            </template>

                            <template v-else>
                                <v-btn tile outlined color="cyan" @click.stop="showAuthDialog=true">Вход / Регистрация</v-btn>
                                <auth-form v-model="showAuthDialog"></auth-form>
                            </template> 

                        </span>
                    </v-flex>
                </v-layout>
            </v-img>
        </v-container>

        <v-tabs
            background-color="cyan"
            dark
            centered
        >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab to="/">Начало</v-tab>
            <v-tab to="/weeklyschedule">Седмична програма</v-tab>
            <v-tab to="/dailymenu">Дневно меню</v-tab>
            <v-tab to="/about">За групата</v-tab>
            <v-tab to="/prices">Цени</v-tab>
            
        </v-tabs>
    </div> 
</template>

<script>

import AuthForm from '@/components/Authentication/AuthForm'
import { authService, authenticate } from '@/services/AuthenticationServices'

export default {
    data () {
        return {
            showAuthDialog: false
        }
    },
    components: {
       AuthForm
    },
    mixins : [authService, authenticate],
    methods: {
        onSignOutClick () {
            this.signOut();
        }
    }
}
</script>

<style scoped>
 span {
    padding-right: 10px;
 }
</style>
