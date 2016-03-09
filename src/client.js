import { FlowRouter } from 'meteor/kadira:flow-router';

import './client/main';

Meteor.startup(function() {
  FlowRouter.initialize();
});
