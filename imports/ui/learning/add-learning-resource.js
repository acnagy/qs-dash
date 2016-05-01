import { Resources } from '../../api/resources.js';

import './add-learning-resource.html';
import './add-learning-resource.css';

import './learning.html';

if (Meteor.isClient) {
    Template.add_resource_template.events({
       'submit form' : function(event) {
            event.preventDefault();

            const target = event.target;
            const resourceTitle = target.resourceTitle.value;
            const resourceUrl = target.resourceUrl.value
            var textType = target.textCheckbox.value;
            var videoType = target.videoCheckbox.value;
            const resourceDescription = target.resourceDescription.value;
            const votes = 0

            if (textType) {
                textType = "fa-file-text-o";
            } else {
                textType = "";
            }

            if (videoType) {
                videoType = "fa-play-circle-o";
            } else {
                videoType = "";
            }

            Resources.insert({
                resourceTitle,
                resourceUrl,
                textType,
                videoType,
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