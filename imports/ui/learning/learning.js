import { Resources } from '../../api/resources.js';

import './learning.html';
import './learning.css';

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
        },
        resources: [
            { title: 'Title 1', description: 'Description', votes: 1, font_awesome: "fa fa-file-text-o" },
            { title: 'Title 2', description: 'Description', votes: 2, font_awesome: "fa fa-play-circle-o" },
            { title: 'Title 3', description: 'Description', votes: 3, font_awesome: "fa fa-play-circle-o" },
        ],
    });

    Template.add_resource_template.events({
       'submit form' : function(event) {
            event.preventDefault();
       }
    })
}