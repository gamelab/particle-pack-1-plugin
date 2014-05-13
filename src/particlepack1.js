
/**
* The particle pack contains a number of game objects that you can add to a state. It depends on the ParticelsGL plugin, so make sure you have that installed as well.
* You'll need to add the spritesheets to your preloader which will look something like this
* 
* <pre>
*   MyState.preload = function() {
*     this.addSpriteSheet('particlePack1SpriteSheet', '../assets/particlepack1_128.png',128, 128, false, 8, 5, 5, 27, 27, 54, 54);
*     this.addSpriteSheet('particlePack1SpriteSheet_16', '../assets/particlepack1_16.png', 16, 16, false, 8, 5, 5, 4, 4, 8, 8);
*   };
* </pre>
* 
* To create a particle effect do one of the following (this would add the effects to x:400,y:400 within a group)
* <pre>
*   this.bam = Kiwi.Plugins.ParticlePack1.Bam(this,400,300);
*   this.boom = Kiwi.Plugins.ParticlePack1.Boom(this,400,300);
*   this.explosion = Kiwi.Plugins.ParticlePack1.Explosion(this,400,300);
*   this.fireworks = Kiwi.Plugins.ParticlePack1.Fireworks(this,400,300);
*   this.gasfire = Kiwi.Plugins.ParticlePack1.Gasfire(this,400,300);
*   this.hitlines = Kiwi.Plugins.ParticlePack1.Hitlines(this,400,300);
*   this.kaboom = Kiwi.Plugins.ParticlePack1.Kaboom(this,400,300);
*   this.poison = Kiwi.Plugins.ParticlePack1.Poison(this,400,300);
*   this.poof = Kiwi.Plugins.ParticlePack1.Poof(this,400,300);
*   this.pow = Kiwi.Plugins.ParticlePack1.Pow(this,400,300);
*   this.smoke = Kiwi.Plugins.ParticlePack1.Smoke(this,400,300);
*   this.smokepuffs = Kiwi.Plugins.ParticlePack1.Smokepuffs(this,400,300);
*   this.stars = Kiwi.Plugins.ParticlePack1.Stars(this,400,300);
*   this.tornado = Kiwi.Plugins.ParticlePack1.Tornado(this,400,300);
*   this.zap = Kiwi.Plugins.ParticlePack1.Zap(this,400,300);
*   this.bluefire = Kiwi.Plugins.ParticlePack1.Bluefire(this,400,300);
*   this.gasleak = Kiwi.Plugins.ParticlePack1.Gasleak(this,400,300);
*   this.orangefire = Kiwi.Plugins.ParticlePack1.Orangefire(this,400,300);
*   this.redfire = Kiwi.Plugins.ParticlePack1.Redfire(this,400,300);
*   this.lightning = Kiwi.Plugins.ParticlePack1.Lightning(this,400,300);
* </pre>
* Note that some of these functions return a group of gameobjects and others return a single gameobject. Regardless you can then add it to the state and tell it to start emitting
* 
* <pre>
*   this.addChild(this.bam);
*   this.bam.startEmitting();
* </pre>
* 
* @module Kiwi
* @submodule Kiwi.Plugins
* @namespace Kiwi.Plugins
* @class ParticlePack1
* @main
*/
Kiwi.Plugins.ParticlePack1 = {
  
  /**
  * The name of this plugin.
  * @property name
  * @type String
  * @public
  */
  name:'ParticlePack1',

  /**
  * The version of this plugin in semver (semantic versioning) format
  * @property version
  * @type String
  * @public
  */
  version:'0.1.0',

  /**
  * The minimum version of Kiwi.js required to run this plugin in semver (semantic versioning) format
  * @property minimumKiwiVersion
  * @type String
  * @public
  */
  minimumKiwiVersion:'0.7.0',

  /**
  * Other plugins required for this plugin to run. 
  * @property pluginDependencies
  * @type Array
  * @public
  */
  pluginDependencies: [
    {
      name:'ParticlesGL',
      minimumVersion:'0.9.0'
    }

  ]

};



/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register(Kiwi.Plugins.ParticlePack1);


 

 
