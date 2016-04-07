if (Meteor.isClient) {

    // Registration and User Creation

    Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            console.log("registration form submitted");
            var userEmail: event.target.registerEmail.value;
            var userPassword: event.target.registerPassword.value;
            Accounts.createUser ({
                email: userEmail,
                password: userPassword,
            });
        }
    });

    // Logging In

    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            console.log("login form submitted");
            var userEmail: event.target.registerEmail.value;
            var userPassword: event.target.registerPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });
}


