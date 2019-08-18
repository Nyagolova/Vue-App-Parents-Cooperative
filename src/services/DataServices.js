import { db } from '@/services/firebaseInit'

export const DailyMenuService = {
    data() {
        return {
            DailyMenuService_Data: [] 
        }
    },
    computed: {
        isDataReady () {
            return this.DailyMenuService_Data.length !== 0
        } 
    },
    firebase: {
        DailyMenuService_Data: db.ref('CactusDailyMenu')
    } 
};

export const WeeklyScheduleService = {
    data() {
        return {
            WeeklySchedule_Data: [] 
        }
    },
    computed: {
        isDataReady () {
            return this.WeeklySchedule_Data.length !== 0
        } 
    },
    firebase: {
        WeeklySchedule_Data: db.ref('CactusEvents')
    } 
};

export const StoriesService = {
    data() {
        return {
            Stories_Data: [] 
        }
    },
    computed: {
        isDataReady () {
            return this.Stories_Data.length !== 0
        } 
    },
    firebase: {
        Stories_Data: db.ref('CactusNews')
    } 
};