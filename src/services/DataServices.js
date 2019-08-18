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