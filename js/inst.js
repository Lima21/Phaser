var inst = function(game) {

 WebFontConfig = {
    active: function() { game.time.events.add(Phaser.Timer.SECOND, null, this); },

    google: {
      families: ['Revalia']
    }

};

}

inst.prototype = {

    create: function() {
        this.game.add.image(0, 0, 'fundo');
        this.game.add.image(50, 100, 'painel');
        this.game.add.button(400, 400, "play", this.iniciaJogo, this );
        this.game.add.text(465, 420, "Voltar");
        this.game.add.text(100, 150, "Esquerda/Direita - Movimentar");
        this.game.add.text(100, 200, "A - Girar");
        this.game.add.text(100, 250, "Movimento + S - Inverter movimento");
    }, 

    iniciaJogo: function() {
        this.game.state.start("menu");
    }
}