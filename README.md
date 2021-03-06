# Particles Pack 1 - Cartoon Particles

	Name: ParticlesPack1
	Version: 1.0.3
	Type: GameObject Plugin
	Author: Kiwi.js Team
	Website: www.kiwijs.org
	KiwiJS last version tested: 1.4.0


## Description

The Cartoon Particle Pack plugin comes with a bunch of preconfigured particle effects to add to your game. Includes 19 sprites and pre-configured effects to create explosions, fire, gasleaks, poison, punch-up particles and more.

This plugin requires the ParticlesGL plugin, which is included with the pack.
If you have any problems then feel free to contact us via http://www.kiwijs.org/help

Tutorials for using particles can be found on the Kiwi.JS website at [Using the ParticlesGL Plugin](http://www.kiwijs.org/using-the-particle-effects-plugin).


## Dependencies

- Kiwi.js version 1.4.0 or greater
- ParticlesGL version 1.2.1 or greater


## Version Release Notes

1.0.3
- Update Particles to v1.2.1 and KiwiJS to v1.4.0
- Ensure that spritesheet definitions specify correct number of cells
- Improve gruntfile
- Remove Bower packaging
- Remove small spritesheet to its own pack

1.0.2
- Update library to ParticlesGL 1.1.2 to resolve bugs

1.0.1
- Update libraries to ParticlesGL 1.1.1 and KiwiJS 1.1.1
- Fixed a config bug that would make particles invisible on some devices

1.0.0
- First Release ready for Kiwi.js version 1.0.0

## How to Include

### Copy the files you need:
- Create a folder called `plugins/` in your project folder.
- Create a folder called `assets/` in your project folder.
- Copy `particlesgl-x.x.x.js` (or `particlesgl-x.x.x.min.js`) from the `lib/` folder into your `plugins/` folder.
- Copy `particlepack1.js` (or `particlepack1.min.js`) from the `build/` folder to your `plugins/` folder.
- Copy the particle spritesheet from the `assets/` folder into your project assets folder.

### Link the files:
- Link the JavaScript files `particlesgl-x.x.x.js` and `particlepack1-x.x.x.js` (or the min versions) into your HTML file. Make sure you link them underneath the link to the main `kiwi.js` file AND underneath the Cocoon files if you are using Cocoon.

```html
<script src="plugins/particlesgl-x.x.x.js"></script>
<script src="plugins/particlepack1-x.x.x.js"></script>
```

This will add ALL the particle effects to your game. If you want to add them individually, add `src/_particlepack1-x.x.x.js` to your plugin folder instead and also include the config files that you want to use, eg.

```html
<script src="plugins/particlesgl-1.1.1.js"></script>
<script src="plugins/_particlepack1.js"></script>
<script src="plugins/particles/bam.js"></script>
```

### Register the plugins:
You'll need to tell you game that it intends to use the plugins by adding their names to the plugin config option. Also remember that the effects only work with the WebGL renderer.

```js
var MyGame = new Kiwi.Game( "exampleGameContainer",
	"testGame", MyState, { renderer: Kiwi.RENDERER_WEBGL,
	plugins: [ "ParticlesGL", "ParticlePack1" ] } );
```

## How to use

Check out the example found in the `examples/` folder of this repository. View the source and run the examples. You'll need a webserver to view the example - tip: running 'grunt serve' in the root folder will bring up a webserver on `localhost:9000`.

Read the API docs found in the `docs/` folder of this repository.

The particle pack contains a number of game objects that you can add to a state. You'll need to add the spritesheet to your preloader which will look something like this:

```js
MyState.preload = function() {
	this.addSpriteSheet(
		"particlePack1SpriteSheet",
		"assets/particlepack1_128.png",
		128, 128, true, 19, 5, 5, 27, 27, 54, 54 );
};
```

To create a particle effect, add the following to your `create` function:

```js
// Create at 400, 300
MyState.create = function() {
	this.bam = Kiwi.Plugins.ParticlePack1.Bam( this, 400, 300 );
};
```

Here is a list of all available effects, and example code to create them.

Single effects (these return a single particle gameobject):

```js
this.explosion = Kiwi.Plugins.ParticlePack1.Explosion( this, 400, 300 );
this.gasfire = Kiwi.Plugins.ParticlePack1.Gasfire( this, 400, 300 );
this.bluefire = Kiwi.Plugins.ParticlePack1.Bluefire( this, 400, 300 );
this.orangefire = Kiwi.Plugins.ParticlePack1.Orangefire( this, 400, 300 );
this.redfire = Kiwi.Plugins.ParticlePack1.Redfire( this, 400, 300 );
this.poison = Kiwi.Plugins.ParticlePack1.Poison( this, 400, 300 );
this.stars = Kiwi.Plugins.ParticlePack1.Stars( this, 400, 300 );
this.tornado = Kiwi.Plugins.ParticlePack1.Tornado( this, 400, 300 );
this.hitlines = Kiwi.Plugins.ParticlePack1.Hitlines( this, 400, 300 );
this.smoke = Kiwi.Plugins.ParticlePack1.Smoke( this, 400, 300 );
this.smokepuffs = Kiwi.Plugins.ParticlePack1.Smokepuffs( this, 400, 300 );
```

Group effects (these return a group of particle gameobjects):

```js
this.bam = Kiwi.Plugins.ParticlePack1.Bam( this, 400, 300 );
this.boom = Kiwi.Plugins.ParticlePack1.Boom( this, 400, 300 );
this.kaboom = Kiwi.Plugins.ParticlePack1.Kaboom( this, 400, 300 );
this.poof = Kiwi.Plugins.ParticlePack1.Poof( this, 400, 300 );
this.pow = Kiwi.Plugins.ParticlePack1.Pow( this, 400, 300 );
this.zap = Kiwi.Plugins.ParticlePack1.Zap( this, 400, 300 );
this.gasleak = Kiwi.Plugins.ParticlePack1.Gasleak( this, 400, 300 );
this.lightning = Kiwi.Plugins.ParticlePack1.Lightning( this, 400, 300 );
```

Note that some of these functions return a group of gameobjects and others return a single gameobject. In either case, you can add the effect to the state like so:

```js
this.addChild( this.gasfire );
```

If the effect is a single object, you can start it emitting like this:

```js
this.gasfire.startEmitting();
```

If it's a group you'll need to start each individually - for example:

```js
for ( var i = 0; i < this.bam.members.length; i++ ) {
	this.bam.members[ i ].startEmitting()
}
```

To fully familiarize yourself with the API for controlling particle effects, you should see the documentation for the [ParticlesGL plugin](https://github.com/gamelab/WebGL-Particles-Plugin).
