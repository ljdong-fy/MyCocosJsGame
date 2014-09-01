var MyBirdLayer = cc.Layer.extend({
    _ground: null,
    _bird: null,
    _winSize: null,
    ctor: function () {
        this._super();

        if (!this.init()) {
            return false;
        }
        return true;
    },

    init: function () {
        this._winSize = cc.director.getWinSize();
        this._setupBg();
        this._setupBird();

        return true;
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    },

    _setupBg: function () {
        this._ground = ccui.ImageView.create();
        this._ground.loadTexture(res.BackGround_png);
        this._ground.setPosition(this._winSize.width / 2 ,this._winSize.height/2);
        this.addChild(this._ground);
    },

    _setupBird: function () {
        var birdAni= animate.loadAnime(res.Bird_plist, "bird", 0.3 / 3);
        var birdAnimate = cc.animate(birdAni);
        var birdAct = cc.repeatForever(birdAnimate);

        this._bird = animate.getFirstSprite("bird");
        this._bird.setPosition(cc.p(this._winSize.width / 2, this._winSize.height / 2));
        this.addChild(this._bird,10);
        this._bird.runAction(birdAct);
    }
});


var MyBirdScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MyBirdLayer();
        this.addChild(layer);
    }
});

