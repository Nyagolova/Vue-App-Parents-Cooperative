import { db } from '@/services/firebaseInit'

export const DailyMenuService = {
    data() {
        return {
            DailyMenuService_Data: [] 
        }
    },
    computed: {
        isDailyMenuDataReady () {
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
        isWeeklyScheduleDataReady () {
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
        isStoriesDataReady () {
            return this.Stories_Data.length !== 0
        } 
    },
    firebase: {
        Stories_Data: db.ref('CactusNews')
    } 
};

export const GroupInfoService = {
    data() {
        return {
            Members_Data: [],
            Gallery_Data: []
        }
    },
    computed: {
        isGalleryDataReady () {
            return this.Gallery_Data.length !== 0
        },
        isMembersDataReady () {
            return this.Members_Data.length !== 0
        } 
    },
    firebase: {
        Gallery_Data: db.ref('CactusGallery'),
        Members_Data: db.ref('CactusMembers')
    } 
};