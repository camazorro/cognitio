var self = module.exports = {
	index: function(request,response){
		response.render('home',{"logo":"/public/cognitioLogo.png"});
	},
	
	register: function(app){
		app.get('/',self.index);
	}
};
self.__module ={
	provides: ['routes/register']
}