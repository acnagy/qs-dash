import './add-learning-resource.html';
import './add-learning-resource.css';

Template.add_resource_template.events({
   'submit form' : function(event) {
        event.preventDefault();
   }
})