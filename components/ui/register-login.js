if (Meteor.isClient) {

    // Registration and User Creation

    Template.new_login.events({
        'click #showLoginLink' : function(){
            Session.set('showNewLoginTemplate', false);
            var showNewLoginTemplate = Session.get('showNewLoginTemplate');
            console.log(showNewLoginTemplate);
        },
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = $('[name=newLoginEmail]').val();
            var passwordVar = $('[name=newLoginPassword]').val();
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
            console.log('registration form submitted');
        }
    });


    // Logging In

    Template.login.events({
        'click #showNewLoginLink': function(event) {
            Session.set('showNewLoginTemplate', true);
            var showNewLoginTemplate = Session.get('showNewLoginTemplate');
            console.log(showNewLoginTemplate);
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

    // Switch Template
    Template.body.helpers({
        showNewLoginTemplate(){
            return Session.get('showNewLoginTemplate');
        }
    })

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


