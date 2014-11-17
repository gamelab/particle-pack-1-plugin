/**
* ParticlePack1 Lightning Effect.
* @method Lightning
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack1.Lightning = function( state, x, y ) {
	this.glowConfig = {
		"numParts": 1,
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
		"velRandomRadial": true,
		"velShape": "center",
		"velOffsetX": -100,
		"velOffsetY": 50,
		"velAngMin": 0,
		"velAngMax": 0,
		"velRadius": 200,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 200,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 0.1,
		"minLifespan": 0.1,
		"maxLifespan": 0.3,
		"gravityX": 0,
		"gravityY": 0,
		"startSize": 1,
		"endSize": 200,
		"loop": false,
		"colEnvKeyframes": [
			0.5,
			0.6
		],
		"alpha": 0.5,
		"colEnv0": [
			0.9882352941176471,
			0.9647058823529412,
			0.9176470588235294
		],
		"colEnv1": [
			1,
			1,
			0
		],
		"colEnv2": [
			1,
			1,
			1
		],
		"colEnv3": [
			1,
			0.8901960784313725,
			0
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
		"additive": true,
		"cells": [
			9
		],
		"textureID": "_128x128"
	};

	this.boltConfig = {
		"numParts": 4,
		"posOffsetX": 0,
		"posOffsetY": -30,
		"posRadius": 100,
		"posRadialStart": 0,
		"posRadialEnd": 3.142,
		"posWidth": 200,
		"posHeight": 200,
		"posConstrainRect": true,
		"posAngle": 0,
		"posLength": 5,
		"posRandomLine": true,
		"posConstrainRadial": true,
		"posRandomRadial": true,
		"posShape": "line",
		"maxVel": 100,
		"minVel": 77,
		"velConstrainRect": true,
		"velConstrainRadial": true,
		"velRandomRadial": true,
		"velShape": "point",
		"velOffsetX": 0,
		"velOffsetY": -396.3,
		"velAngMin": 0,
		"velAngMax": 0,
		"velRadius": 200,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 2,
		"velHeight": 12,
		"velAngle": 0,
		"velLength": 291,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 0.1,
		"minLifespan": 0.1,
		"maxLifespan": 0.2,
		"gravityX": 0,
		"gravityY": 0,
		"startSize": 4,
		"endSize": 207,
		"loop": false,
		"colEnvKeyframes": [
			"0.2",
			"0.5"
		],
		"alpha": 1,
		"colEnv0": [
			0.9921568627450981,
			0.9490196078431372,
			0.9176470588235294
		],
		"colEnv1": [
			1,
			1,
			0
		],
		"colEnv2": [
			0.9294117647058824,
			0.9333333333333333,
			0.9803921568627451
		],
		"colEnv3": [
			0.996078431372549,
			0.9098039215686274,
			0.09803921568627451
		],
		"alphaGradient": [
			1,
			1,
			"1",
			0
		],
		"alphaStops": [
			0.3,
			0.7
		],
		"additive": false,
		"cells": [
			5
		]
	};

	this.linesConfig = {
		"numParts": 1,
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
		"velRandomRadial": true,
		"velShape": "center",
		"velOffsetX": -100,
		"velOffsetY": 50,
		"velAngMin": 0,
		"velAngMax": 2,
		"velRadius": 200,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 200,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 0,
		"minLifespan": 0.2,
		"maxLifespan": 0.3,
		"gravityX": 0,
		"gravityY": 0,
		"startSize": 1,
		"endSize": 100,
		"loop": false,
		"colEnvKeyframes": [
			0.5,
			0.6
		],
		"alpha": 0.8,
		"colEnv0": [
			0.9882352941176471,
			0.9725490196078431,
			0.9568627450980393
		],
		"colEnv1": [
			1,
			0.9137254901960784,
			0
		],
		"colEnv2": [
			1,
			1,
			1
		],
		"colEnv3": [
			1,
			0.8784313725490196,
			0
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
			3
		]
	};

	this.sparksConfig = {
		"numParts": 10,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 5,
		"posRadialStart": 0,
		"posRadialEnd": 6.230825429619757,
		"posWidth": 200,
		"posHeight": 200,
		"posConstrainRect": true,
		"posAngle": 0,
		"posLength": 33,
		"posRandomLine": true,
		"posConstrainRadial": true,
		"posRandomRadial": true,
		"posShape": "radial",
		"maxVel": 100,
		"minVel": 70,
		"velConstrainRect": true,
		"velConstrainRadial": true,
		"velRandomRadial": false,
		"velShape": "radial",
		"velOffsetX": 0,
		"velOffsetY": -150,
		"velAngMin": -5,
		"velAngMax": 2,
		"velRadius": 100,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 200,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 0.1,
		"minLifespan": 0.4,
		"maxLifespan": 1,
		"gravityX": 0,
		"gravityY": 400,
		"startSize": 1,
		"endSize": 10,
		"loop": false,
		"colEnvKeyframes": [
			0.5,
			0.6
		],
		"alpha": 1,
		"colEnv0": [
			0.9882352941176471,
			0.9411764705882353,
			0.9411764705882353
		],
		"colEnv1": [
			1,
			1,
			0
		],
		"colEnv2": [
			1,
			1,
			1
		],
		"colEnv3": [
			1,
			0.9058823529411765,
			0
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
		"additive": true,
		"cells": [
			6
		],
		"textureID": "_16x16"
	};

	var group = new Kiwi.Group( state );
	group.x = x;
	group.y = y;
	var glow = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0, this.glowConfig );
	var bolt = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0, this.boltConfig );
	var lines = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0,
		this.linesConfig );
	var sparks = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0,
		this.sparksConfig) ;
	group.addChild( glow );
	group.addChild( bolt );
	group.addChild( lines );
	group.addChild( sparks );

	return group;
};
