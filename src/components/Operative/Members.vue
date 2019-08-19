<template>
    <v-container style="width: 500px;"> 
        <v-expansion-panels v-if="isMembersDataReady">
            <v-expansion-panel  
                v-for="(member, i) in Members_Data"
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
    
        <div v-else>
            <v-text-field color="cyan" loading disabled></v-text-field>
        </div>
    
    </v-container>
</template>

<script>
import { GroupInfoService } from '@/services/DataServices.js'

export default {
    mixins : [GroupInfoService]
}
</script>

<style>

</style>