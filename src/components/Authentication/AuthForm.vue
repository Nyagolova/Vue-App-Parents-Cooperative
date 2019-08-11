<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">{{authMode}}</span>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                <v-layout wrap>

                    <v-flex xs12>
                        <v-text-field v-model="email" label="Email*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
                    </v-flex>

                    <v-flex xs12 v-if="showRegister">
                        <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
                    </v-flex>

                    <v-flex xs12 centered v-if="!showRegister">
                        <big>Нямате акаунт? - <a @click="onShowRegister()"> регистрирайте се тук </a> </big>
                    </v-flex>

                </v-layout>
                </v-container>
               
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click.stop="onCancelClick()">Отказ</v-btn>

                <v-btn v-if="showRegister" color="green darken-1" text @click.stop="onRegisterClick()">Регистрирай се</v-btn>
                <v-btn v-else color="green darken-1" text @click.stop="onLoginClick()">Влез</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

import { authenticate } from '@/services/AuthenticationServices'


export default {
    data () {
        return {
            email: '',
            password: '',
            authMode: 'Вход',
            showRegister: false
        }
    },
    props: {
        value: Boolean
    },
    computed: {
        show: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        }
    },
    mixins : [authenticate],
    methods: {
        onCancelClick() {
            this.authMode = 'Вход'
            this.showRegister = false
            this.show = false
        },
        onLoginClick() {
            this.login( this.email, this.password).then(
                this.show = false
            ) 
        },
        onRegisterClick() {
            this.register( this.email, this.password).then(
                this.show = false
            ) 
        },
        onShowRegister () {
            this.authMode = 'Регистрирация'
            this.showRegister = true
        }   
    },
    
}
</script>

<style>

</style>