import config from '@/config/config'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(config.firebaseConfig);

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
        firebase.auth().onAuthStateChanged(firebaseuser => {
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
            return firebase.auth().createUserWithEmailAndPassword(email, password)
        },
        login(email, password) {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.userHasSession = true)
        },
        signOut() {
            return firebase.auth().signOut()
                .then(this.userHasSession = false)
        }
    } 
};

