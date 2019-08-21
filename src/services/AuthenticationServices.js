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
                .then()
                .catch( 
                    status => { 
                        var registerStatusObj = {}
                        registerStatusObj = {
                            type: 'error',
                            text: status.message
                        }
                        return registerStatusObj;
                    }
                );
        },
        login(email, password) {
            return app.auth().signInWithEmailAndPassword(email, password)
                .then(this.userHasSession = true)
                .catch( 
                    status => { 
                        var loginStatusObj = {}
                        loginStatusObj = {
                            type: 'error',
                            text: status.message
                        }
                        return loginStatusObj;
                    }
                );
        },
        signOut() {
            return app.auth().signOut()
                .then(this.userHasSession = false)
        }
    } 
};

