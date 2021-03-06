import { Accounts } from 'meteor/accounts-base';

import './register-login.html';
import './register-login.css';

if (Meteor.isClient) {

    // Registration and User Creation

    Template.new_login.events({
        'click #showLoginLink' : function(){
            Session.set('showNewLoginTemplate', false);
            var showNewLoginTemplate = Session.get('showNewLoginTemplate');
        },
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = $('[name=newLoginEmail]').val();
            var passwordVar = $('[name=newLoginPassword]').val();
                Accounts.createUser({
                    email: emailVar,
                    password: passwordVar
                },function(err) {
                    if (err) {
                        $('#form-error').removeClass('hidden');
                        $('#form-error').html('Hmm.. that email seems to already be in use');
                        console.log('email already in use');
                    } else {
                        console.log('login created');
                    }
                });
            console.log('registration form submitted');
        }
    });


    // Logging In

    Template.login.events({
        'click #showNewLoginLink': function(event) {
            Session.set('showNewLoginTemplate', true);
            var showNewLoginTemplate = Session.get('showNewLoginTemplate');
        },
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = $('[name=loginEmail]').val();
            var passwordVar = $('[name=loginPassword]').val()
            Meteor.loginWithPassword(emailVar, passwordVar, function(err){
                if (err) {
                    $('#form-error').removeClass('hidden');
                    $('#form-error').html("Hmm... Username and Password don't match");
                    console.log('username/password error');
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
        }
    });

    // Toggling User
}


