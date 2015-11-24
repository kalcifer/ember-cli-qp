import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('console', {path:'/'}, function(){
		this.route('content', {path:'/content'});
		this.route('request', {path:'/request'});
	});
});

export default Router;
