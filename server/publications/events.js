Meteor.publishComposite("events", function() {
    return {
        find: function() {
            return Events.find({'category.approved': true});
        },
        children: [
           {
             find: function(event) {
               return Categories.find({_id: event.category._id});
             }
           }
        ]
    }
});
//Meteor.publish("events",function(){
//   return Events.find({});
//});
