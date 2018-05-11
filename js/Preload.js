var AreaJogo = {

    LARGURA_AREA: 1080,
    ALTURA_AREA: 860

};

AreaJogo.Preload = function (game) {}

AreaJogo.Preload.prototype = {

    preload: function () {
        this.game.load.spritesheet('coin_animada', 'assets/coin_gold.png', 32, 32);
        this.game.load.image('coin', 'assets/coin.png');
        this.game.load.tilemap('map', 'assets/s2.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map2', 'assets/s3.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map3', 'assets/s4.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/tiles.png');
        this.game.load.image('pause', 'assets/pause.png');
        this.game.load.image('box', 'assets/img/level-box.png');
        this.game.load.spritesheet('bomb1', 'assets/img/bo1.png', 256, 256);
        this.game.load.spritesheet('bomb2', 'assets/img/bo2.png', 256, 256);
        this.game.load.spritesheet('bomb3', 'assets/img/bo3.png', 256, 256);
        this.game.load.image('completo', 'assets/img/lvlcomplete.png');
        this.game.load.image("player", "assets/dude2.png");
        this.game.load.image("porta", "assets/diamond2.png");
        this.game.load.image("portar", "assets/red.png");
        this.game.load.image("p1", "assets/p1.gif");
        this.game.load.image("play", "assets/img/orange-btn.png");
        this.game.load.image("fundo", "assets/fundo.png");
        this.load.image('painel-superior', 'assets/bar.png');
        this.game.load.image("painel", "assets/img/panel.png");
        this.load.audio('somColisao', ['assets/bounce.ogg', 'assets/bounce.mp3', 'assets/bounce.m4a']);
        this.load.audio('som','assets/mar.ogg');
        this.load.audio('ap', 'assets/app.ogg');

    },

    create: function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('menu');
    }
}

Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
 