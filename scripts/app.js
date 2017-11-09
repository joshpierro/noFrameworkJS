(function () {

    var app = {
        user: {}
    }

    //firebase
    var config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
    };

    firebase.initializeApp(config);
    var database = firebase.database();
    var invitesRef = database.ref('');

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js')
            .then(function () {
                console.log('Service Worker Registered');
            });
    }
    
})();
