import { app } from '@/services/firebaseInit'

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
        app.auth().onAuthStateChanged(firebaseuser => {
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
            return app.auth().createUserWithEmailAndPassword(email, password)
        },
        login(email, password) {
            return app.auth().signInWithEmailAndPassword(email, password)
                .then(this.userHasSession = true)
        },
        signOut() {
            return app.auth().signOut()
                .then(this.userHasSession = false)
        }
    } 
};

