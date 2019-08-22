<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">{{authMode}}</span>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>

                        <v-flex xs12 v-if="showRegister">
                            <v-text-field
                                v-model="username"
                                v-validate="'required|min:3'"
                                :error-messages="errors.collect('username')"
                                label="Username"
                                data-vv-name="username"
                                required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field
                                v-model="email"
                                v-validate="'required|email'"
                                :error-messages="errors.collect('email')"
                                label="E-mail"
                                data-vv-name="email"
                                required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field
                                v-model="password" ref="password"
                                name="password" :type="'password'"
                                v-validate="'required|min:6'"
                                :error-messages="errors.collect('password')"
                                label="Password"
                                data-vv-name="password"
                                required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 v-if="showRegister">
                            <v-text-field
                                v-model="passwordSecond" ref="passwordSecond"
                                name="passwordSecond" :type="'password'"
                                v-validate="'required|min:6|confirmed:password'"
                                :error-messages="errors.collect('passwordSecond')"
                                label="Retype password"
                                data-vv-name="passwordSecond"
                                required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 v-if="errorMsg">
                            <big class="errorMsg">{{errorMsg}} </big>
                        </v-flex>

                        <v-flex xs12 v-if="!showRegister">
                            <big>Нямате акаунт? - <a @click="onShowRegister()"> регистрирайте се тук </a> </big>
                        </v-flex>

                    </v-layout>
                </v-container>
               
            </v-card-text>   
            
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click.stop="onCancelClick()">Отказ</v-btn>
                <v-btn :disabled="hasErrors" v-if="showRegister" color="green darken-1" text @click.stop="onRegisterClick()">Регистрирай се</v-btn>
                <v-btn :disabled="hasErrors" v-else color="green darken-1" text @click.stop="onLoginClick()">Влез</v-btn>
            </v-card-actions>

            <v-overlay :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>

        </v-card>
    </v-dialog>
</template>

<script>

import { authenticate } from '@/services/AuthenticationServices'


export default {
     $_veeValidate: {
        validator: 'new',
    },
    data () {
        return {
            name: '',
            select: null,
            email: '',
            password: '',
            passwordSecond: '',
            username: '',
            authMode: 'Вход',
            showRegister: false,
            overlay: false,
            errorMsg: ''
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
        },
        hasErrors () {
            return this.errors.items.length !== 0 ;
        }
    },
    mixins : [authenticate],
    methods: {
        onCancelClick() {
            this.email = ''
            this.password = ''
            this.passwordSecond = ''
            this.authMode = 'Вход'
            this.showRegister = false
            this.show = false
            this.errorMsg = false
        },
        onLoginClick() {
            this.overlay = true;
            this.$validator.validateAll()
            this.login( this.email, this.password).then(
                status => this.authHandler(status)
            ) 
        },
        onRegisterClick() {
            this.overlay = true;
            this.$validator.validateAll()
            this.register( this.email, this.password, this.username).then(
                status => this.authHandler(status)
            ) 
        },
        authHandler(status) {
            this.overlay = false;
            if(status.type === 'error') {
                this.errorMsg = status.text;
            } else {
                this.show = false;
            }
        },
        onShowRegister () {
            this.authMode = 'Регистрирация';
            this.showRegister = true;
        }   
    }
}
</script>

<style scoped>
.errorMsg {
    color: red;
}
</style>