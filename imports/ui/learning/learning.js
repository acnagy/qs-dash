import { Resources } from '../../api/resources.js';

import './learning.html';
import './learning.css';

if (Meteor.isClient) {
    Template.learning.created = function(){
        this.showAddResourceTemplate = new ReactiveVar(false);
    }

    Template.learning.events({
        'click #add_resource' : function(event, template) {
            var showAddResourceTemplate = template.showAddResourceTemplate.get();
            template.showAddResourceTemplate.set(!showAddResourceTemplate);
            console.log('clicked!');
            console.log(showAddResourceTemplate);
        }
    });

    Template.learning.helpers({
        showAddResourceTemplate : function() {
            console.log('helper');
            return Template.instance().showAddResourceTemplate.get();

        },
        resources: [
            { title: 'Title 1', description: 'Description', votes: 1, font_awesome: "fa fa-file-text-o" },
            { title: 'Title 2', description: 'Description', votes: 2, font_awesome: "fa fa-play-circle-o" },
            { title: 'Title 3', description: 'Description', votes: 3, font_awesome: "fa fa-play-circle-o" },
        ],
    });

}