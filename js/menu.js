var menu = function (game) {


}

menu.prototype = {

    create: function () {
        localStorage.setItem('moedas', 1000);

        if (localStorage.getItem('nivel') == null || localStorage.getItem('nivel') == '0') {
            localStorage.setItem('nivel', 1);
        }
        this.game.add.image(400, 0, 'fundo');
        var back = this.game.add.image(470, -300, 'painel');
        back.scale.setTo(1, 1);
        sheetText = this.game.add.text(750, 20, 'Slalom', {
            fill: "white",
            font: "40px"
        });
        sheetText.font = "Revalia";
        this.game.add.button(700, 350, "play", this.iniciaJogo, this);
        this.game.add.text(760, 370, 'Iniciar');
        this.game.add.button(700, 450, "play", this.instru, this);
        this.game.add.text(740, 470, 'Instruções');
    },

    instru: function () {
        this.game.state.start("Inst");
    },

    iniciaJogo: function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start("Escolher");
    }
}
