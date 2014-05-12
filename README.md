WebGL Particles Pack 1 - Cartoon Particles
=======================================
-------------------------------------

Name: ParticlesPack1

Version: 1.0.0

Type: GameObject Plugin

Author: Kiwi.js Team

Website: www.kiwijs.org

KiwiJS last version tested: 0.7.0

Tutorials for this plugin can be found on the Kiwi.JS website here:

[Using the ParticlesGL Plugin](UPDATE ME)


##Version Release Notes
--------------------------------------------------------------------------
1.0.0
  - First Release ready for Kiwi.js version 1.0.0


##Description:
----------------------------------------------------------------------------------------
The Cartoon Particle Pack plugin comes with a bunch of preconfigured particle effects to add to your game.
Explosions, fire, gasleaks, poison and punch-up particles are all included. This plugin requires the
ParticlesGL plugin, which is included with the pack. 
If you have any problems then feel free to contact us via the http://www.kiwijs.org/help


##Dependencies
----------------------------------------------------------------------------------------
- Kiwi.js version 1.0.0 or greater
- ParticlesGL version 1.0.0 or greater

##How to Include: 
----------------------------------------------------------------------------------------

First Step:
- Copy either the particlesgl.js or the particlesgl.min.js file into your project directory (you'll find them in the lib folder). Also copy the particlepack1.js or particlepack1.min.js file. You'll also need to copy the two particle spritesheets from the assets folder into your project. 

We recommend that you save the plugin files under a plugin directory that lives inside of your project directory so that you can easily manage all of the plugins but that is not required.

Second Step:
- Link in the JavaScript files particlesgl.js and particlepack1.js (or the min versions of the files) into your HTML file. Make sure you link it in underneath the link to the main Kiwi.js file AND underneath the Cocoon files if you are using Cocoon.

##How to use
--------------------------------------------------

Check out the example found in the "examples" folder of this repository.
Read tha API docs found in the "docs" folder of this repository.
[Look at the tutorials on the Kiwijs.org website.](Something)

The particle pack contains a number of game objects that you can add to a state.
You'll need to add the spritesheets to your preloader which will look something like this

	MyState.preload = function() {
		this.addSpriteSheet('particlePack1SpriteSheet', '../assets/particlepack1_128.png',128, 128, false, 8, 5, 5, 27, 27, 54, 54);
		this.addSpriteSheet('particlePack1SpriteSheet_16', '../assets/particlepack1_16.png', 16, 16, false, 8, 5, 5, 4, 4, 8, 8);
	};

To create a particle effect do one of the following (this would add the effects to x:400,y:400 within a group)

	this.bam = Kiwi.Plugins.ParticlePack1.Bam(this,400,300);
	this.boom = Kiwi.Plugins.ParticlePack1.Boom(this,400,300);
	this.explosion = Kiwi.Plugins.ParticlePack1.Explosion(this,400,300);
	this.fireworks = Kiwi.Plugins.ParticlePack1.Fireworks(this,400,300);
	this.gasfire = Kiwi.Plugins.ParticlePack1.Gasfire(this,400,300);
	this.hitlines = Kiwi.Plugins.ParticlePack1.Hitlines(this,400,300);
	this.kaboom = Kiwi.Plugins.ParticlePack1.Kaboom(this,400,300);
	this.poison = Kiwi.Plugins.ParticlePack1.Poison(this,400,300);
	this.poof = Kiwi.Plugins.ParticlePack1.Poof(this,400,300);
	this.pow = Kiwi.Plugins.ParticlePack1.Pow(this,400,300);
	this.smoke = Kiwi.Plugins.ParticlePack1.Smoke(this,400,300);
	this.smokepuffs = Kiwi.Plugins.ParticlePack1.Smokepuffs(this,400,300);
	this.stars = Kiwi.Plugins.ParticlePack1.Stars(this,400,300);
	this.tornado = Kiwi.Plugins.ParticlePack1.Tornado(this,400,300);
	this.zap = Kiwi.Plugins.ParticlePack1.Zap(this,400,300);
	
	this.bluefire = Kiwi.Plugins.ParticlePack1.Bluefire(this,400,300);
	this.gasleak = Kiwi.Plugins.ParticlePack1.Gasleak(this,400,300);
	this.orangefire = Kiwi.Plugins.ParticlePack1.Orangefire(this,400,300);
	this.redfire = Kiwi.Plugins.ParticlePack1.Redfire(this,400,300);
	this.lightning = Kiwi.Plugins.ParticlePack1.Lightning(this,400,300);

Note that some of these functions return a group of gameobjects and others return a single gameobject. Regardless you can then add it to the state and tell it to start emitting

	this.addChild(this.bam);
	this.bam.startEmitting();

To fully familiarize yourself with the API for controlling particle effects, you should see the [documentation](link) and [tutorials](link) for the ParticlesGL plugin.

