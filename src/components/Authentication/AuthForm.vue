<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Вход</span>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                <v-layout wrap>

                    <v-flex xs12>
                    <v-text-field v-model="username" label="Username*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                    <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
                    </v-flex>

                </v-layout>
                </v-container>
                <big>Нямате акаунт? - <a> регистрирайте се тук </a> </big>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click.stop="show=false">Close</v-btn>
                <v-btn color="blue darken-1" text @click.stop="onLoginClick()">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

import { authenticate } from '@/services/AuthenticationServices'


export default {
    data () {
        return {
            username: '',
            password: ''
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
        onLoginClick() {
            console.log('login')
            this.login( this.username, this.password).then(
                this.show=false
            ) 
        }
    }
}
</script>

<style>

</style>