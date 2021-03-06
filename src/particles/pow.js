/**
* ParticlePack1 Pow Effect.
* @method Pow
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack1.Pow = function( state, x, y ) {

	this.powConfig = {
		"numParts": 1,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 100,
		"posRadialStart": 0,
		"posRadialEnd": 3.1419999999999995,
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
		"velShape": "point",
		"velOffsetX": 0,
		"velOffsetY": -150,
		"velAngMin": -0.5,
		"velAngMax": 0.7,
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
		"minLifespan": 0.6,
		"maxLifespan": 0.6,
		"gravityX": 0,
		"gravityY": 400,
		"startSize": 20,
		"endSize": 125,
		"loop": false,
		"colEnvKeyframes": [
			0.5,
			0.6
		],
		"alpha": 1,
		"colEnv0": [
			0.9882352941176471,
			0.9725490196078431,
			0.9529411764705882
		],
		"colEnv1": [
			1,
			0.9725490196078431,
			0.9019607843137255
		],
		"colEnv2": [
			1,
			1,
			1
		],
		"colEnv3": [
			1,
			1,
			1
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
			18
		],
		"textureID": "_128x128"
	};

	this.hitlinesConfig = {
		"numParts": 3,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 15,
		"posRadialStart": 0.12217304763960307,
		"posRadialEnd": 3.193952531149623,
		"posWidth": 200,
		"posHeight": 200,
		"posConstrainRect": true,
		"posAngle": 0,
		"posLength": 200,
		"posRandomLine": true,
		"posConstrainRadial": true,
		"posRandomRadial": false,
		"posShape": "point",
		"maxVel": 100,
		"minVel": 70,
		"velConstrainRect": true,
		"velConstrainRadial": true,
		"velRandomRadial": false,
		"velShape": "center",
		"velOffsetX": 0,
		"velOffsetY": -115,
		"velAngMin": -2,
		"velAngMax": 2,
		"velRadius": 38,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 200,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 0.2,
		"minLifespan": 0.1,
		"maxLifespan": 0.3,
		"startSize": 2,
		"endSize": 200,
		"loop": false,
		"colEnvKeyframes": [
			0.5,
			0.6
		],
		"alpha": 1,
		"colEnv0": [
			0.9921568627450981,
			0.9450980392156862,
			0.9098039215686274
		],
		"colEnv1": [
			1,
			0.9137254901960784,
			0.03137254901960784
		],
		"colEnv2": [
			1,
			0.1568627450980392,
			0.0196078431372549
		],
		"colEnv3": [
			0.9058823529411765,
			0.9058823529411765,
			0.9058823529411765
		],
		"alphaGradient": [
			1,
			1,
			0.2,
			0
		],
		"alphaStops": [
			0.3,
			0.7
		],
		"cells": [
			2,
			3
		],
		"textureID": "_128x128",
		"gravityX": 0,
		"gravityY": 0
	};
	
	var group = new Kiwi.Group( state );
	group.x = x;
	group.y = y;
	var pow = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0,
		this.powConfig);
	var hitlines = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0,
		this.hitlinesConfig);
	group.addChild( pow );
	group.addChild( hitlines );

	return group;
};
