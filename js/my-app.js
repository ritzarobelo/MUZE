// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'ios', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/card/',
    	url: 'card.html',
    	name: 'card',
  		},
		{
		path: '/card/',
    	url: 'card.html',
    	name: 'card',
  		},
		{
		path: '/menu/',
    	url: 'menu.html',
    	name: 'menu',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/deck/',
    	url: 'deck.html',
    	name: 'deck',
  		},
		{
		path: '/crystal/',
    	url: 'crystal.html',
    	name: 'crystal',
  		},
		{
		path: '/chackra/',
    	url: 'chackra.html',
    	name: 'chackra',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

