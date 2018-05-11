AreaJogo.Nivel2 = function (game) {}
var niveis;
var num = 0;
var num2 = 0;
var timer;
var total = 0;
var comeca = 0;
var lima;
var totalTempo;
var portas;
var back;
var back2;
var panda = new Array();
AreaJogo.Nivel2.prototype = {

    create: function () {
        var map;
        num2 = 0;
        this.game.input.addPointer();
        this.somapp = this.game.add.audio('ap');
        this.som = this.game.add.audio('som');
        this.som.play();
        this.game.world.setBounds(0, 0, 3920, 3920);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        var x1 = Math.floor((Math.random() * 143) + 660);
        var x2 = Math.floor((Math.random() * 182) + 378);
        var x3 = Math.floor((Math.random() * 300) + 840);
        var x4 = Math.floor((Math.random() * 111) + 1950);
        niveis = [
            [220, x1, 'porta'],
            [220, x1 + 100, 'porta'],
            [x2, 770, 'porta'],
            [x2, 870, 'porta'],
            [1300, 950, 'porta'],
            [1300, 1050, 'porta'],
            [x4, 740, 'porta'],
            [x4, 840, 'porta'],
            [2580, 950, 'porta'],
            [2580, 1050, 'porta'],
            [3000, 760, 'porta'],
            [3000, 860, 'porta'],
            [x3, 630, 'porta'],
            [x3, 730, 'porta']
        ];

        map = this.game.add.tilemap('map2');
        map.addTilesetImage('super_mario', 'tiles');
        layer = map.createLayer('Camada de Tiles 1');
        layer2 = map.createLayer('Bloco');
        layer3 = map.createLayer('Fantasma');
        map.setCollisionBetween(1, 1000, true, 'Bloco');
        this.game.physics.p2.convertTilemap(map, layer2);
        player = this.game.add.sprite(0, 800, 'player');
        this.game.add.sprite(400, 170, 'p1');

        for (var i in niveis) {
            this.createPorta(niveis[i][0], niveis[i][1], niveis[i][2]);
        }

        this.style = {
            font: "65px Arial",
            fill: "#ffffff",
            align: "center"
        };

        player.scale.setTo(0.5, 0.5);
        this.game.physics.p2.enable(player);
        cursors = this.game.input.keyboard.createCursorKeys();
        this.game.camera.follow(player);
        this.fontePequena = {
            font: "15px Arial",
            fill: "#ffffff"
        };

        this.tempo = 0;
        this.time.events.loop(Phaser.Timer.SECOND, this.atualizarTimer, this);
        back = this.game.add.image(400, -300, 'painel');
        back.fixedToCamera = true;
        back.cameraOffset.setTo(400, -300);
        back = this.game.add.image(330, 360, 'play');
        back.fixedToCamera = true;
        back.cameraOffset.setTo(330, 280);
        lima = this.game.add.text(400, 300, "");
        lima.fixedToCamera = true;
        lima.cameraOffset.setTo(400, 300);
        this.somColisao = this.game.add.audio('somColisao');
        timer = this.game.time.create(false);
        timer.loop(3000, this.stopTime, this);
        timer.start();
        totalTempo = this.game.add.text(460, 20, "Tempo: ");
        totalTempo.fixedToCamera = true;
        totalTempo.cameraOffset.setTo(460, 20);
        portas = this.game.add.text(680, 20, "Porta: " + num2 + "/7");
        portas.fixedToCamera = true;
        portas.cameraOffset.setTo(680, 20);
    },

    verificaColisao: function () {
        if (panda.length > 0) {
            for (var i = 0; i < panda.length; i++) {
                if (panda[i].body.data.angularVelocity > 0 || panda[i].body.data.invInertiaSolve > 0) {
                    panda[i].destroy();
                    panda.splice(i, 1);
                }
            }
        }
    },

    stopTime: function () {
        back.destroy();
        timer.stop();
        comeca = 1;
        this.game.time.reset();
        lima.setText("");
    },

    createPorta: function (x, y, tipo) {
        blo = this.game.add.sprite(x, y, tipo);
        this.game.physics.p2.enable(blo);
        blo.body.kinematic = true;
    },

    atualizarTimer: function () {
        this.tempo++;

    },

    update: function () {
        portas.setText("Porta: " + num2 + "/7");
        player.body.setZeroVelocity();
        if (comeca) {
            var a = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
            var s = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
            var x = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
            for (i = 0; i < niveis.length; i += 2) {
                if (player.body.x > niveis[i][0] - 10 && player.body.x < niveis[i][0] - 5 && player.body.y > niveis[i][1] + 10 && player.body.y < niveis[i + 1][1] - 10) {
                    this.move(x.isDown);
                    num += 10;
                    num2++;
                    this.somColisao.play();
                }
            }

            if (player.body.x > 3260)
                this.pauseGame();


            if (a.isDown) {
                if (cursors.left.isDown)
                    player.body.angle -= 15;
                else if (cursors.right.isDown)
                    player.body.angle += 15;
            }

            if (s.isDown)
                player.body.angularVelocity = 0;

            if (cursors.left.isDown) {
                player.body.angle -= 4;
                this.move(x.isDown);
            } else if (cursors.right.isDown) {
                this.move(x.isDown);
                player.body.angle += 4;
            }
            player.body.angularVelocity = 0;
        }





    },

    pauseGame: function () {

        comeca = 0;
        this.som.pause();
        this.somapp.play();

        var total = (7 - num2) * 50;
        if (total <= 0) {
            total = 0;
        }
        total += this.game.time.totalElapsedSeconds().toFixed(2);
        var bt = this.game.add.button(300, 250, "play", null, this);
        bt.fixedToCamera = true;
        bt.cameraOffset.setTo(505, 320);
        var totalTime = this.game.add.text(400, 300, "Total: " + total);
        totalTime.fixedToCamera = true;
        totalTime.cameraOffset.setTo(520, 340);

        if (parseFloat(localStorage.getItem('nivel2')) > total || localStorage.getItem('nivel2') == null) {
            localStorage.setItem('nivel2', total);
            var btn = this.game.add.button(0, 0, 'completo', function () {
                this.backMenu(1)
            }, this);
        } else {
            var btn = this.game.add.button(0, 0, 'completo', function () {
                this.backMenu(0)
            }, this);
        }
        btn.fixedToCamera = true;
        btn.cameraOffset.setTo(400, 200);
    },

    backMenu: function (valor) {
        if (valor) {
            this.game.state.start("Surpresa");
        } else {
            this.game.state.start("menu");
        }
    },

    move: function (back) {
        var x = Math.cos(Math.radians(player.body.angle)) * 5;
        var y = Math.sin(Math.radians(player.body.angle)) * 5;
        if (num > 1000) {
            x *= 2;
            y *= 2;
            num--;
        }

        if (back) {
            player.body.x -= x;
            player.body.y -= y;
        } else {
            player.body.x += x;
            player.body.y += y;
        }

    },

    moveM: function (back) {
        var x = Math.cos(Math.radians(player.body.angle)) * 5;
        var y = Math.sin(Math.radians(player.body.angle)) * 5;

        if (num > 1000) {
            x *= 2;
            y *= 2;
            num--;
        }

        if (back) {
            player.body.x -= x;
            player.body.y -= y;
        } else {
            player.body.x += x;
            player.body.y += y;
        }
    },

    render: function () {
        if (!comeca)
            lima.setText(timer.duration.toFixed(0));
        else
            totalTempo.setText("Tempo: " + this.game.time.totalElapsedSeconds().toFixed(2));

        if (this.game.input.pointer1.active) {

            if (this.game.input.pointer1.clientX <= 500) {
                player.body.angle -= 6;
                this.move(false);
                this.moveM(false);
            } else {
                player.body.angle += 6;
                this.move(false);
                this.moveM(false);
            }
        }

        if (this.game.input.pointer2.active) {

            if (this.game.input.pointer2.clientX <= 500) {
                player.body.angle -= 6;
                this.moveM(false);
                this.moveM(false);
            } else {
                player.body.angle += 6;
                this.moveM(false);
                this.moveM(false);
            }
        }
    }
}