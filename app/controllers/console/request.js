import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams:['type', 'state', 'extState'],
	state:null,
	extState:null,
	filters:Ember.Object.create({
		state:'new'
	}),
	onStateChanged:function(){
		var newVal = this.get('filters').state;
		this.transitionTo({queryParams:{
			state:newVal
		}});
	}.observes('filters.state'),
	contentStates:['old', 'new']
})