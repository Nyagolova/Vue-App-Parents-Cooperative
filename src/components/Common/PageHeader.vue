<template>
    <div>
        <v-container text-center>
            <v-img :aspect-ratio="50/10" src="@/assets/kaktus_logo.jpg">
                <v-layout pa-2 column fill-height  >
                    <v-spacer></v-spacer>
                    <v-flex shrink>
                        <span style="float:right;">
                            <template v-if="isAuthenticated">
                                <a href="/movie/create">Create</a>
                                <a href="#">Welcome testuser!</a>
                                <a href="#">Logout</a>
                            </template>
                            <template v-else>
                                <v-btn tile outlined color="cyan">Вход / Регистрация</v-btn>
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
export default {
    data() {
        return {
            isAuthenticated: false
        }
    }
}
</script>

<style scoped>
 
</style>
