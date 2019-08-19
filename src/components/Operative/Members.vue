<template>
    <v-container style="width: 500px;"> 

        <v-expansion-panels>
            <v-expansion-panel  
                v-for="(member, i) in MembersData"
                :key="i">

                <v-expansion-panel-header v-slot="{ open }">
                    <v-row  
                        align="center"
                        class="spacer"
                        no-gutters>
                        <v-col cols="3">
                        <v-avatar>
                           <img
                                :src="member.photoUrl"
                                alt="Пенка"
                            >
                        </v-avatar>
                        </v-col>
                        <v-col cols="5">{{member.firstName}} {{member.lastName}}</v-col>
                        <v-col cols="4" class="text--secondary">{{member.role}}</v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div style="margin-bottom: 10px;">
                        <p>
                            {{member.description}}
                        </p>
                    </div>
                    <v-chip v-if="member.contacts.facebook"
                        class="ma-2 ml-0"
                        color="blue"
                        text-color="white"
                        label
                        :href="member.contacts.facebook"
                    >
                        <v-icon left>mdi-facebook</v-icon> 
                        Facebook
                    </v-chip>
                    <v-chip v-if="member.contacts.twitter"
                        class="ma-2"
                        color="cyan"
                        label
                        text-color="white"
                        :href="member.contacts.twitter"
                    >
                        <v-icon left>mdi-twitter</v-icon>
                        Twitter
                    </v-chip>
                    <v-chip v-if="member.contacts.email"
                        class="ma-2"
                        color="pink"
                        label
                        text-color="white"
                        :href="member.contacts.email"
                    >
                        <v-icon left>mdi-email</v-icon>
                        Email
                    </v-chip>
                    <v-text-field placeholder="Изпрати запитване">
                    </v-text-field>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            >
                            Изпрати
                        </v-btn>
                    </v-card-actions>
                </v-expansion-panel-content>
            </v-expansion-panel>
         </v-expansion-panels>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            MembersData: [
	{
		"firstName" : "Пенка",
		"lastName" : "Стоянова",
		"role" : "Основател",
		"description" : "Основател, координира, подпомага и информира заинтересованите страни в проекта.",
		"contacts" : {
			"facebook" : "https://facebook.com",
			"twitter" : "",
			"email" : "zlatina.nyagolova@gmail.com"
		}, 
		"photoUrl" : "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=beautiful-blur-blurred-background-733872.jpg&fm=jpg"
	},
	{
		"firstName" : "Андрей",
		"lastName" : "Стоянов",
		"role" : "Основател",
		"description" : "Основател, координира, подпомага и информира заинтересованите страни в проекта.",
		"contacts" : {
			"facebook" : "https://facebook.com",
			"twitter" : "https://twitter.com",
			"email" : "zlatina.nyagolova@gmail.com"
		},
		"photoUrl" : "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
	},
	{
		"firstName" : "Калина",
		"lastName" : "Христова",
		"role" : "Детски учител",
		"description" : "Организира учебно възпитателния процес в детската градина",
		"contacts" : {
			"facebook" : "https://facebook.com",
			"twitter" : "https://twitter.com",
			"email" : ""
		},
		"photoUrl" : "https://media1.popsugar-assets.com/files/thumbor/LOStkvgRyL5iIyuU82KUqQveQFU/2495x0:7799x5304/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/877/n/1922729/37fd0a575d4b2e8e511816.39458261_/i/Teacher-Weight-Loss-Tips.jpg"
	}

]
        }
    }
}
</script>

<style>

</style>