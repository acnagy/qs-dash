if (Meteor.isClient) {

    // Registration and User Creation

    Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            console.log("registration form submitted");
            var userVar: event.target.registerUser.value;
            var password: event.target.registerPassword.value;
            
            var isValidPassword = function(val) {
             return val.length; 
            }

            if (isValidPassword(userPassword)) {
                    Accounts.createUser ({
                    username: userVar,
                    password: passwordVar,
                });
            }
        }
    });

    // Logging In

    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            console.log("login form submitted");
            var userVar: event.target.loginUser.value;
            var passwordVar: event.target.loginPassword.value;
            Meteor.loginWithPassword(userVar, passwordVar);
        }
    });
}


