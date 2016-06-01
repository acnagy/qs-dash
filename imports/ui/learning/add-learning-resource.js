import { Resources } from '../../api/resources.js';

import './add-learning-resource.html';
import './add-learning-resource.css';

import './learning.html';

if (Meteor.isClient) {
    Template.add_resource_template.events({
        'click :radio': function(event, template) {
            var fileType = template.find('input:radio[name=fileType]:checked');
            console.log($(fileType).val());

        },

        'submit form' : function(event) {
            event.preventDefault();

            const target = event.target;
            const resourceTitle = target.resourceTitle.value;
            const resourceUrl = target.resourceUrl.value;
            var fileType = target.fileType.value;
            const resourceDescription = target.resourceDescription.value;
            const votes = 0;

            Resources.insert({
                resourceTitle,
                resourceUrl,
                fileType,
                resourceDescription,
                votes,
                createdAt: new Date(),
                creatorId: Meteor.user(),
                creator: Meteor.user().email
            })

            console.log(event);

            // Clear form
            target.resourceTitle.value = '';
            target.resourceUrl.value = '';
            target.textCheckbox.value = '';
            target.videoCheckbox.value = '';
            target.resourceDescription.value = '';
       }
    })


}