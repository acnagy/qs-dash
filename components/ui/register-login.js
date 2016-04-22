if (Meteor.isClient) {

    // Registration and User Creation

    Template.register.events({
        'click #showLoginLink' : function(){
            console.log("show login");
            Session.set('showRegister',false);
        },
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = $('[name=registerEmail]').val();
            var passwordVar = $('[name=registerPassword]').val();
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
            console.log('registration form submitted');
        }
    });


    Template.register.helpers({
        showRegisterTemplate : function () {
            return Session.get('showRegister')
        }
    });

    // Logging In

    Template.login.events({
        'click #showRegisterLink': function() {
            console.log("show register");
            Session.set('showRegister',true);
        },
        'submit form': function(event) {
            event.preventDefault();
            console.log('login form submitted');
            var emailVar = $('[name=loginEmail]').val();
            var passwordVar = $('[name=loginPassword]').val()
            Meteor.loginWithPassword(emailVar, passwordVar, function(err){
                if (err) {
                    $('#login-error').removeClass('hidden')
                } else {
                    return false;
                }
            });
        }
    });

        Template.login.helpers({
        showRegisterTemplate : function () {
            return Session.get('showRegisterTemplate')
        }
    });


    // Logging Out

    Template.logout.events({
        'click .logout': function(event){
            event.preventDefault();
            Meteor.logout();
            Router.go('login')
        }
    });

    // Toggling User
}


