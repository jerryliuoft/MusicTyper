'use strict';

var GAME = GAME || {};
/**
* preload state that loads all assets and shows load bar
*
*/

GAME.PreloadState = function (game){

};
GAME.PreloadState.prototype= {

	preload: function() {

		//this.asset.cropEnabled = true;
		// load the sprite in the middle of the screen
		//this.asset = this.add.sprite (GAME.GAME_WIDTH/2, GAME.GAME_HEIGHT/2, 'preloadBar');
		//this.asset.anchor.setTo (0.5,0.5);
		//set this as preloader sprite
		//this.load.setPreloadSprite(this.asset);

		// when this.ready turns true = game finished loading, load next state
		this.ready = false;
		// load a sprite for loader image
		let game = this.game;

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    	game.load.image('ship', 'assets/thrust_ship.png');
	},

	create:function (){

	},
	update:function (){
		if(this.ready ){
			this.game.state.start('Game');
		}
	},
	onLoadComplete: function(){
		this.ready = true;
	},

};