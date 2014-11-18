/**
* ParticlePack1 Gasfire Effect.
* @method Gasfire
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Entity
* @public
* @static
*/

Kiwi.Plugins.ParticlePack1.Gasfire = function( state, x, y ) {
	this.config = {
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
		"velLength": 5,
		"velRandomLine": true,
		"minStartTime": 0,
		"maxStartTime": 1,
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
			0,
			0.8745098039215686,
			0.9921568627450981
		],
		"colEnv1": [
			0.027450980392156862,
			0.8274509803921568,
			0.984313725490196
		],
		"colEnv2": [
			0.9725490196078431,
			0.5529411764705883,
			0.011764705882352941
		],
		"colEnv3": [
			0.8980392156862745,
			0.17254901960784313,
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
		"additive": true
	};

	return new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, x, y, this.config );
};
