import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams:['type', 'state', 'contentType', 'extState'],
	state:null,
	contentType:null,
	extState:'created',
	filters:Ember.Object.create({
		state:'new',
		contentType:'type1'
	}),
	onStateChanged:function(){
		var newVal = this.get('filters').state;
		this.transitionTo({queryParams:{
			state:newVal
		}});
	}.observes('filters.state'),
	onContentTypeChanged:function(){
		var newVal = this.get('filters').contentType;
		this.transitionTo({queryParams:{
			contentType:newVal
		}});
	}.observes('filters.contentType'),
	contentTypes:['type1', 'type2'],
	contentStates:['old', 'new']
})