/**
* ParticlePack1 Gasleak Effect.
* @property Gasleak
* @type Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack1.Gasleak = function( state, x, y ) {
	this.cloudsConfig = {
		"numParts": 10,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 100,
		"posRadialStart": 0,
		"posRadialEnd": 3.142,
		"posWidth": 200,
		"posHeight": 200,
		"posConstrainRect": true,
		"posAngle": 0,
		"posLength": 200,
		"posRandomLine": true,
		"posConstrainRadial": true,
		"posRandomRadial": true,
		"posShape": "point",
		"maxVel": 100,
		"minVel": 70,
		"velConstrainRect": true,
		"velConstrainRadial": true,
		"velRandomRadial": false,
		"velShape": "radial",
		"velOffsetX": 0,
		"velOffsetY": 0,
		"velAngMin": 0,
		"velAngMax": 0,
		"velRadius": 200,
		"velRadialStart": 4.34586983746588,
		"velRadialEnd": 5.1312680008633285,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 200,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 1,
		"minLifespan": 0.5,
		"maxLifespan": 0.7,
		"gravityX": 0,
		"gravityY": 0,
		"startSize": 2,
		"endSize": 100,
		"loop": true,
		"colEnvKeyframes": [
			0.5,
			0.6
		],
		"alpha": 0.7,
		"colEnv0": [
			0.9686274509803922,
			0.9803921568627451,
			0.9882352941176471
		],
		"colEnv1": [
			0.9137254901960784,
			0.8666666666666667,
			0.8705882352941177
		],
		"colEnv2": [
			1,
			1,
			1
		],
		"colEnv3": [
			0.8705882352941177,
			0.8705882352941177,
			0.8705882352941177
		],
		"alphaGradient": [
			1,
			1,
			1,
			0
		],
		"alphaStops": [
			0.3,
			0.7
		],
		"additive": false,
		"cells": [
			6
		]
	};

	this.jetConfig = {
		"numParts": 6,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 100,
		"posRadialStart": 0,
		"posRadialEnd": 3.142,
		"posWidth": 200,
		"posHeight": 200,
		"posConstrainRect": true,
		"posAngle": 0,
		"posLength": 200,
		"posRandomLine": true,
		"posConstrainRadial": true,
		"posRandomRadial": true,
		"posShape": "point",
		"maxVel": 725,
		"minVel": -478,
		"velConstrainRect": true,
		"velConstrainRadial": true,
		"velRandomRadial": true,
		"velShape": "line",
		"velOffsetX": 0,
		"velOffsetY": -100,
		"velAngMin": -0.2,
		"velAngMax": 0.2,
		"velRadius": 200,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 20,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 0.6,
		"minLifespan": 0.2,
		"maxLifespan": 0.5,
		"gravityX": 0,
		"gravityY": 0,
		"startSize": 50,
		"endSize": 100,
		"loop": true,
		"colEnvKeyframes": [
			0.5,
			0.6
		],
		"alpha": 0.7,
		"colEnv0": [
			0.9882352941176471,
			0.9764705882352941,
			0.9803921568627451
		],
		"colEnv1": [
			0.7725490196078432,
			0.803921568627451,
			0.7803921568627451
		],
		"colEnv2": [
			1,
			1,
			1
		],
		"colEnv3": [
			0.7137254901960784,
			0.7137254901960784,
			0.7137254901960784
		],
		"alphaGradient": [
			0,
			1,
			1,
			0
		],
		"alphaStops": [
			0.3,
			0.7
		],
		"additive": false,
		"cells": [
			4
		]
	};

	var group = new Kiwi.Group( state );
	group.x = x;
	group.y = y;
	var clouds = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, -15,
		this.cloudsConfig );
	var jet = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0, this.jetConfig );
	group.addChild( clouds );
	group.addChild( jet );

	return group;
};
