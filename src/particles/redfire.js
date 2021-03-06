/**
* ParticlePack1 Redfire Effect.
* @method Redfire
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack1.Redfire = function( state, x, y ) {
	this.backConfig = {
		"numParts": 25,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 10,
		"posRadialStart": 0,
		"posRadialEnd": 3.142,
		"posWidth": 200,
		"posHeight": 200,
		"posConstrainRect": true,
		"posAngle": 0,
		"posLength": 8,
		"posRandomLine": true,
		"posConstrainRadial": true,
		"posRandomRadial": true,
		"posShape": "line",
		"maxVel": 100,
		"minVel": 70,
		"velConstrainRect": true,
		"velConstrainRadial": false,
		"velRandomRadial": false,
		"velShape": "point",
		"velOffsetX": 0,
		"velOffsetY": -120,
		"velAngMin": 0,
		"velAngMax": 0,
		"velRadius": 55.1,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 20,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 3,
		"minLifespan": 0.7,
		"maxLifespan": 1.3,
		"gravityY": 20,
		"gravityX": 0,
		"startSize": 100,
		"endSize": 1,
		"loop": true,
		"colEnvKeyframes": [
			0.1,
			0.3
		],
		"alpha": 0.5,
		"colEnv0": [
			0.9921568627450981,
			0.9490196078431372,
			0.9490196078431372
		],
		"colEnv1": [
			0.984313725490196,
			0.8392156862745098,
			0
		],
		"colEnv2": [
			0.9725490196078431,
			0.3333333333333333,
			0
		],
		"colEnv3": [
			0.996078431372549,
			0.19607843137254902,
			0
		],
		"alphaGradient": [
			0,
			1,
			1,
			1
		],
		"alphaStops": [
			0.3,
			0.6
		],
		"cells": [
			0
		],
		"textureID": "_128x128",
		"additive": false
	};

	this.frontConfig = {
		"numParts": 25,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 10,
		"posRadialStart": 0,
		"posRadialEnd": 3.142,
		"posWidth": 200,
		"posHeight": 200,
		"posConstrainRect": true,
		"posAngle": 0,
		"posLength": 8,
		"posRandomLine": true,
		"posConstrainRadial": true,
		"posRandomRadial": true,
		"posShape": "line",
		"maxVel": 100,
		"minVel": 70,
		"velConstrainRect": true,
		"velConstrainRadial": false,
		"velRandomRadial": false,
		"velShape": "point",
		"velOffsetX": 0,
		"velOffsetY": -120,
		"velAngMin": 0,
		"velAngMax": 0,
		"velRadius": 55.1,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 20,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 3,
		"minLifespan": 0.7,
		"maxLifespan": 1.3,
		"gravityY": 20,
		"gravityX": 0,
		"startSize": 100,
		"endSize": 1,
		"loop": true,
		"colEnvKeyframes": [
			0.1,
			0.3
		],
		"alpha": 0.5,
		"colEnv0": [
			0.9921568627450981,
			0.9490196078431372,
			0.9490196078431372
		],
		"colEnv1": [
			0.984313725490196,
			0.8392156862745098,
			0
		],
		"colEnv2": [
			0.9725490196078431,
			0.3333333333333333,
			0
		],
		"colEnv3": [
			0.49411764705882355,
			0.0784313725490196,
			0
		],
		"alphaGradient": [
			0,
			1,
			1,
			1
		],
		"alphaStops": [
			0.3,
			0.6
		],
		"cells": [
			0
		],
		"additive": true
	};

	var group = new Kiwi.Group( state );
	group.x = x;
	group.y = y;
	var back = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0,
	this.backConfig);
	var front = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, 0, 0,
	this.frontConfig);
	group.addChild( back);
	group.addChild( front);

	return group;
};
