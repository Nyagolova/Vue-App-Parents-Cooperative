import { app, db } from '@/services/firebaseInit'

export const authService = {
    data() {
        return {
            userHasSession: false,
            userDisplayNameData : ''
        }
    },
    computed: {
        userIsAuthenticated() {
            return this.userHasSession  
        },
        userDisplayName () {
            return this.userDisplayNameData
        },
    },
    mounted () {
        app.auth().onAuthStateChanged(firebaseuser => {
            if(firebaseuser) {
                db.ref("CactusUsers")
                    .child(firebaseuser.uid)
                    .once('value')
                    .then( snapshot => 
                        {
                            var value = snapshot.val();
                            if(value) {
                                this.userDisplayNameData = value.username
                            }  
                            
                        }
                    )
                this.userHasSession = true
            } else {
                this.userHasSession = false
            }
        })
    }
};

export const authenticate = {
    methods: {
        register(email, password, username) {
            return app.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    var userUID = user.user.uid;
                    var CactusUsers = db.ref("CactusUsers").child(userUID);

                    CactusUsers.set({
                        email: email,
                        username: username
                    });

                    return {};
                })
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

