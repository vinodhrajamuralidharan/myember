export default Ember.Route.extend({
  setupController: function (controller) {
    controller.set("appName", "My Learnings!");
  }

});
