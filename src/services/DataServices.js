import { db, storage } from '@/services/firebaseInit'

export const DailyMenuService = {
    data() {
        return {
            DailyMenuService_Data: [],
            showLoading: false,
            showSuccessFlag: false  
        }
    },
    computed: {
        isDailyMenuDataReady () {
            return this.DailyMenuService_Data.length !== 0
        },
        showLoadingOverlay  () {
            return this.showLoading
        },
        showSuccessMessage () {
            return this.showSuccessFlag
        } 
    },
    firebase: {
        DailyMenuService_Data: db.ref('CactusMenu')
    },
    methods: {
        addNewDish(DishTitle, DishDescription, DishTypeID, DishPhoto, DishWeekDay, DishType) {
            
            this.showLoading = true;
            this.showSuccessFlag = false;

            var singleDish = DishWeekDay + "/Meals/" + DishTypeID
            var CactusMenu = db.ref("CactusMenu");

            var DishPhotoName = '/MenuPhotos/' + DishPhoto.name;
            var imagesRef = storage.ref(DishPhotoName);

            return imagesRef.put(DishPhoto).then( () => {
                this.getDishImageURL(DishPhotoName).then(
                    DishPhototURL => {
                        this.showLoading = false;
                        this.showSuccessFlag = true;
 
                        return CactusMenu
                        .child(singleDish)
                        .set({
                            dishTitle: DishTitle,
                            dishDetails: DishDescription,
                            dishPhotoUrl : DishPhototURL,
                            dishType: DishType
                        }) 
                    }
                )
            });
        },
        getDishImageURL (DishPhotoName) {
            return storage.ref().child(DishPhotoName).getDownloadURL() 
        },
        deleteDish(DishRef, DishType) {
            var CactusMenu_SingleDish = db.ref("CactusMenu/" + DishRef);
            return CactusMenu_SingleDish.set({
                dishTitle: '',
                dishDetails: '',
                dishPhotoUrl : '',
                dishType: DishType
            }) 
        } 
    }
   
};

export const WeeklyScheduleService = {
    data() {
        return {
            WeeklySchedule_Data: [],
            showLoading: false,
            showSuccessFlag: false    
        }
    },
    computed: {
        isWeeklyScheduleDataReady () {
            return this.WeeklySchedule_Data.length !== 0
        },
        showLoadingOverlay  () {
            return this.showLoading
        },
        showSuccessMessage () {
            return this.showSuccessFlag
        }   
    },
    firebase: {
        WeeklySchedule_Data: db.ref('CactusEvents')
    },
    methods: {
        addEvent(EventColor, EventStartHour, EventEndHour, EventTitle, EventDetails, EventDate) {
        
            var CactusEvents = db.ref("CactusEvents");
            var StartDate = EventDate + " " + EventStartHour;
            var EndDate = EventDate + " " + EventEndHour;

            this.showLoading = true;
            this.showSuccessFlag = false;
 
            return CactusEvents.push({
                color: EventColor,
                details: EventDetails,
                end:  EndDate,
                name: EventTitle,
                start : StartDate
            }).then(
                () => {
                    this.showLoading = false;
                    this.showSuccessFlag = true;
                }
            ) 
        },
        deleteEvent(event) {
            var CactusEvents = db.ref("CactusEvents");
            CactusEvents.child(event['.key']).remove();
        } 
    } 
};

export const StoriesService = {
    data() {
        return {
            Stories_Data: [],
            showLoading: false,
            showSuccessFlag: false   
        }
    },
    computed: {
        isStoriesDataReady () {
            return this.Stories_Data.length !== 0
        },
        showLoadingOverlay  () {
            return this.showLoading
        },
        showSuccessMessage () {
            return this.showSuccessFlag
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

            this.showLoading = true;
            this.showSuccessFlag = false;

            return imagesRef.put(StoryPhoto).then( () => {
                
                this.getImageURL(StoryPhotoName).then(
                    StoryPhotoUrl => {

                        this.showLoading = false;
                        this.showSuccessFlag = true;

                        return CactusStory.push({
                            StoryTitle: StoryTitle,
                            StoryText: StoryText,
                            StoryPhoto:  StoryPhotoUrl,
                            StoryDate: StoryDate,
                            StoryId : StoryId
                        })
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
            Gallery_Data: [],
            KidsGallery_Data: []
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
    } ,
    methods: {
        getKidsGalleryData () {
            return storage.ref('KidsGallery').listAll().then( res => {
 
                  
                return res.items.forEach( itemRef =>  {
                            storage.ref().child("/KidsGallery/" + itemRef.name).getDownloadURL()
                            .then(
                                url => {
                                    this.KidsGallery_Data.push(url)
                                }
                            ) 
                        }   
                    )
            });
        }
    }
};