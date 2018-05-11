var GameOver = function (game) {
}

GameOver.prototype = {

    init: function (num2, tempo) {
        var total = (7 - num2) * 50;
        if(total <= 0) {
            total = 0;
        }
        total += tempo;
        alert("Obteve: " + num2 + " pontos!" + " em " + tempo + " Total: " + total);
        this.iniciaJogo();
    },

    create: function () {

    },

    iniciaJogo: function () {
        this.game.state.start('menu');
        

    }
}