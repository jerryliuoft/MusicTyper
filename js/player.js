//player class

'use strict'

 function Player(game, x, y, sprite){
	console.log('DEBUG: Creating Player');

	Phaser.Sprite.call(this, game, x, y, sprite);
   	this.game.physics.arcade.enable(this);
	game.add.existing(this);
	this.game = game;
	
};
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.update= function (){
        let sprite = this;

}
