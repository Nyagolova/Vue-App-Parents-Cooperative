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
            
            <v-tab 
                v-for="(tab,index) in tabsData" 
                :key="index"
                :to="tab.tabRoute"
            > {{tab.tabName}}
            </v-tab>
            
            <v-tab 
                v-if="userIsAuthenticated" 
                to="/admin" 
                class="admin-tab"
            >
                Admin 
                <v-icon right class="admin-icon">mdi-settings</v-icon>
            </v-tab>
            
        </v-tabs>
    </div> 
</template>

<script>

import AuthForm from '@/components/Authentication/AuthForm'
import { authService, authenticate } from '@/services/AuthenticationServices'

export default {
    data () {
        return {
            showAuthDialog: false,
            tabsData: [
                {
                    tabRoute: '/',
                    tabName: 'Начало'
                },
                {
                    tabRoute: '/weeklyschedule',
                    tabName: 'Седмична програма'
                },
                {
                    tabRoute: '/dailymenu',
                    tabName: 'Дневно меню'
                },
                {
                    tabRoute: '/about',
                    tabName: 'За групата'
                },
                {
                    tabRoute: '/prices',
                    tabName: 'Цени'
                }
            ]
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

 .admin-tab {
    color: #ffff62 !important;
    float: right;
    margin-left: 260px;
    opacity: 1 !important;
 }

 .admin-icon  {
     color: #ffff62  !important;
     opacity: 1 !important;
 } 
</style>
