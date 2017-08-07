'use strict';

var GAME = GAME || {};

GAME.GameState = function (game){};

GAME.GameState.prototype = {
    preload: function (){
        // no loading should be here, be cause preloading should do the job

    },
    create: function (){
        let game= this.game;
        this.player = new Player(game, 100, 100, "ship");
    },
    update: function (){

    },
    render: function (){
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");   
    }
};

