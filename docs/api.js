YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Kiwi.Plugins.ParticlePack1"
    ],
    "modules": [
        "Kiwi",
        "Kiwi.Plugins"
    ],
    "allModules": [
        {
            "displayName": "Kiwi",
            "name": "Kiwi"
        },
        {
            "displayName": "Kiwi.Plugins",
            "name": "Kiwi.Plugins",
            "description": "The particle pack contains a number of game objects that you can add to a state. It depends on the ParticelsGL plugin, so make sure you have that installed as well.\nYou'll need to add the spritesheets to your preloader which will look something like this\n\n<pre>\n  MyState.preload = function() {\n    this.addSpriteSheet('particlePack1SpriteSheet', '../assets/particlepack1_128.png',128, 128, false, 8, 5, 5, 27, 27, 54, 54);\n    this.addSpriteSheet('particlePack1SpriteSheet_16', '../assets/particlepack1_16.png', 16, 16, false, 8, 5, 5, 4, 4, 8, 8);\n  };\n</pre>\n\nTo create a particle effect do one of the following (this would add the effects to x:400,y:400 within a group)\n<pre>\n  this.bam = Kiwi.Plugins.ParticlePack1.Bam(this,400,300);\n  this.boom = Kiwi.Plugins.ParticlePack1.Boom(this,400,300);\n  this.explosion = Kiwi.Plugins.ParticlePack1.Explosion(this,400,300);\n  this.fireworks = Kiwi.Plugins.ParticlePack1.Fireworks(this,400,300);\n  this.gasfire = Kiwi.Plugins.ParticlePack1.Gasfire(this,400,300);\n  this.hitlines = Kiwi.Plugins.ParticlePack1.Hitlines(this,400,300);\n  this.kaboom = Kiwi.Plugins.ParticlePack1.Kaboom(this,400,300);\n  this.poison = Kiwi.Plugins.ParticlePack1.Poison(this,400,300);\n  this.poof = Kiwi.Plugins.ParticlePack1.Poof(this,400,300);\n  this.pow = Kiwi.Plugins.ParticlePack1.Pow(this,400,300);\n  this.smoke = Kiwi.Plugins.ParticlePack1.Smoke(this,400,300);\n  this.smokepuffs = Kiwi.Plugins.ParticlePack1.Smokepuffs(this,400,300);\n  this.stars = Kiwi.Plugins.ParticlePack1.Stars(this,400,300);\n  this.tornado = Kiwi.Plugins.ParticlePack1.Tornado(this,400,300);\n  this.zap = Kiwi.Plugins.ParticlePack1.Zap(this,400,300);\n  this.bluefire = Kiwi.Plugins.ParticlePack1.Bluefire(this,400,300);\n  this.gasleak = Kiwi.Plugins.ParticlePack1.Gasleak(this,400,300);\n  this.orangefire = Kiwi.Plugins.ParticlePack1.Orangefire(this,400,300);\n  this.redfire = Kiwi.Plugins.ParticlePack1.Redfire(this,400,300);\n  this.lightning = Kiwi.Plugins.ParticlePack1.Lightning(this,400,300);\n</pre>\nNote that some of these functions return a group of gameobjects and others return a single gameobject. Regardless you can then add it to the state and tell it to start emitting\n\n<pre>\n  this.addChild(this.bam);\n  this.bam.startEmitting();\n</pre>"
        }
    ]
} };
});