import Ember from 'ember';

export default Ember.Route.extend({
	queryParams:{
		'type':{
			refreshModel:true,
			replace:true
		},
		'state':{
			refreshModel:true,
			replace:true
		},
		'contentType':{
			refreshModel:true,
			replace:true
		},
		'extState':{
			refreshModel:true,
			replace:true
		}
	},
	
	model:function(){
		var model = Ember.Object.create({
			extStates:['created', 'modified', 'rejected']
		});
		return model;
	}
})