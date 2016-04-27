if (Meteor.isClient) { 
    Template.learning.events({
        'click #add_resource' : function() {
            if (Session.get('showAddLearningTemplate',true)) {
                Session.set('showAddLearningTemplate', false);
                $('#add_resource_template').addClass('hidden');
            } else if (Session.get('showAddLearningTemplate', false)){
                Session.set('showAddLearningTemplate', true);
                $('#add_resource_template').removeClass('hidden');
            } else {
                Session.set('showAddLearningTemplate', true);
                $('#add_resource_template').removeClass('hidden');
            }
        }
    });

    Template.learning.helpers({
        showAddLearningTemplate(){
            return Session.get('showAddLearningTemplate');
        }
    });

    Template.add_resource_template.events({
       'submit form' : function(event) {
            event.preventDefault();
       }
    })
}