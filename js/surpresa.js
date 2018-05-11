var Surpresa = function(game) {

}

Surpresa.prototype = {

    create: function() {
        var back2 = this.game.add.image(230, 0, 'painel');
        back2.scale.setTo(1.5, 1.5);
        var style = { font: "50px Arial", fill: "white"};
        var style2 = { font: "25px Arial", fill: "black"};
        var back = this.game.add.image(400, -300, 'painel');
        
        back.scale.setTo(1, 1);
        sheetText = this.game.add.text(600, 20, 'Surpresa', {fill: "white", font:"40px"});
        sheetText.font = "Revalia";
        level1 = this.game.add.button(380, 150, "bomb1", this.nivel1, this, 1, 0, 0 );
        level2 = this.game.add.button(580, 150, "bomb2", this.nivel1, this, 1, 0, 0 );
        level3 = this.game.add.button(780, 150, "bomb3", this.nivel1, this, 1, 0, 0 );
    }, 



    nivel1: function() {
        console.log(localStorage.getItem('moedas'));
        if(localStorage.getItem('moedas') == null) {
            localStorage.setItem('moedas', 0);
        }
        var total = parseInt(localStorage.getItem('moedas'));
        var ganho = Math.floor((Math.random() * 30) + (Math.random() * 30) + 10) * parseInt(localStorage.getItem('nivel'));;
        total += ganho;
        localStorage.setItem('moedas', total);
        console.log(localStorage.getItem('moedas'));
        var style2 = { font: "25px Arial", fill: "black"};
        this.game.add.text(600, 400, 'Ganhou: ' + ganho + ' moedas', style2);
        
        level1.inputEnabled = false;
        level2.inputEnabled = false;
        level3.inputEnabled = false;

        this.game.add.button(600, 450, "play", this.avancar, this );
        this.game.add.text(650, 470, "Receber", style2);
    },

    avancar: function() {
        this.game.state.start("Escolher");
    }
    
}

