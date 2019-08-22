import { db, storage } from '@/services/firebaseInit'

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
    },
    methods : {
        addNewStory(StoryTitle, StoryText, StoryPhoto, StoryId, StoryDate) {
            var CactusStory = db.ref("CactusNews");
            var StoryPhotoName = '/StoryPhotos/' + StoryPhoto.name;
            var imagesRef = storage.ref(StoryPhotoName);

            return imagesRef.put(StoryPhoto).then( () => {

                this.getImageURL(StoryPhotoName).then(
                    
                    StoryPhotoUrl => {
                        console.log('get file url')
                        CactusStory.push({
                            StoryTitle: StoryTitle,
                            StoryText: StoryText,
                            StoryPhoto:  StoryPhotoUrl,
                            StoryDate: StoryDate,
                            StoryId : StoryId
                        }).then( console.log('story added'))
                    }
                )
            });
        },
        getImageURL (StoryPhotoName) {
            return storage.ref().child(StoryPhotoName).getDownloadURL() 
        } 
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