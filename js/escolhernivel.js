var Escolher = function(game) {

}

Escolher.prototype = {
    create: function() {
        var back2 = this.game.add.image(230, 0, 'painel');
        back2.scale.setTo(1.5, 1.5);
        var style = { font: "50px Arial", fill: "white"};
        var style2 = { font: "25px Arial", fill: "black"};
        var back = this.game.add.image(400, -300, 'painel');
        back.scale.setTo(1, 1);
        sheetText = this.game.add.text(600, 20, 'Escolha o nível', {fill: "white", font:"40px"});
        sheetText.font = "Revalia";
        var level1 = this.game.add.button(500, 250, "box", this.nivel1, this);
        this.game.add.text(530, 268, '1', style);
        this.game.add.text(300, 350, 'Tempo:', style2);
        this.game.add.text(300, 400, 'Estado:', style2);
        this.game.add.text(300, 450, 'Moedas:', style2);
        this.game.add.text(500, 350,  localStorage.getItem('nivel1'), style2);
        this.game.add.text(700, 350,  localStorage.getItem('nivel2'), style2);
        this.game.add.text(900, 350,  localStorage.getItem('nivel3'), style2);
        this.game.add.text(700, 450,  '50', style2);
        this.game.add.text(900, 450,  '100', style2);
        this.game.add.text(500, 400,  'Desbloqueado', style2);
        
        if(parseInt(localStorage.getItem('nivel')) > 2 ) {
            this.game.add.text(700, 400,  'Desbloqueado', style2);
            this.game.add.text(900, 400,  'Desbloqueado', style2);
        } else if(parseInt(localStorage.getItem('nivel')) > 1) {
             this.game.add.text(700, 400,  'Desbloqueado', style2);
             this.game.add.text(900, 400,  'Bloqueado', style2);
        } else {
            this.game.add.text(700, 400,  'Bloqueado', style2);
             this.game.add.text(900, 400,  'Bloqueado', style2);
        }

        this.game.add.button(700, 250, "box", this.nivel2, this );
        this.game.add.text(730, 268, '2', style);

        this.game.add.button(900, 250, "box", this.nivel3, this );
        this.game.add.text(930, 268, '3', style);

        if(localStorage.getItem('moedas') == null) {
            localStorage.setItem('moedas', 0);
        }
        var total = localStorage.getItem('moedas');

        this.game.add.text(900, 100, "Moedas: " + total, style2);
        this.game.add.text(900, 130, "Nível: " + localStorage.getItem('nivel'), style2);
    }, 



    nivel1: function() {
        this.game.state.start("Jogo");
    },
    nivel2: function() {
        if(parseInt(localStorage.getItem('nivel')) > 1 ) {
            this.game.state.start("Nivel2");
        } else if(parseInt(localStorage.getItem('moedas')) >= 50) {

            var tmoedas = parseInt(localStorage.getItem('moedas'));
            tmoedas -= 50;
            localStorage.setItem('moedas', tmoedas);
            localStorage.setItem('nivel', 2);
            this.game.state.start("Nivel2"); 
        } else {
            this.game.add.text(530, 500, 'Não tem dinheiro para desbloquear');
        }
    },
    nivel3: function() {
        if(parseInt(localStorage.getItem('nivel')) > 2 ) {
            this.game.state.start("Nivel3");
        } else if(parseInt(localStorage.getItem('moedas')) >= 100) {

            var tmoedas = parseInt(localStorage.getItem('moedas'));
            tmoedas -= 100;
            localStorage.setItem('moedas', tmoedas);
            localStorage.setItem('nivel', 3);
            this.game.state.start("Nivel3"); 
        } else {
            this.game.add.text(530, 500, 'Não tem dinheiro para desbloquear');
        }
    }
}

