import { app } from '@/services/firebaseInit'

export const authService = {
    data() {
        return {
            userHasSession: false,
            authError: ''
        }
    },
    computed: {
        userIsAuthenticated() {
            return this.userHasSession  
        },
        authenticationError() {
            return this.authError
        }
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
                .then(() => {this.userHasSession = true; this.authError = '';})
                .catch( err => {this.authError = err })
        },
        signOut() {
            return app.auth().signOut()
                .then(this.userHasSession = false)
        }
    } 
};

