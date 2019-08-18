import { db } from '@/services/firebaseInit'

export const authService = {
    data() {
        return {
            userHasSession: false
        }
    },
    computed: {
        userIsAuthenticated() {
            return this.userHasSession  
        },
    },
    created () {
        db.auth().onAuthStateChanged(firebaseuser => {
            if(firebaseuser) {
                this.userHasSession = true
            } else {
                this.userHasSession = false
            }
        })
    }
};

export const authenticate = {
    methods: {
        register(email, password) {
            return db.auth().createUserWithEmailAndPassword(email, password)
        },
        login(email, password) {
            console.log('login')
            return db.auth().signInWithEmailAndPassword(email, password)
                .then(this.userHasSession = true)
        },
        signOut() {
            return db.auth().signOut()
                .then(this.userHasSession = false)
        }
    } 
};

