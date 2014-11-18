/**
* ParticlePack1 Poison Effect.
* @method Poison
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Entity
* @public
* @static
*/

Kiwi.Plugins.ParticlePack1.Poison = function( state, x, y ) {
	this.config = {
		"numParts": 5,
		"posOffsetX": 0,
		"posOffsetY": 0,
		"posRadius": 9.8,
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
		"velConstrainRadial": false,
		"velRandomRadial": false,
		"velShape": "line",
		"velOffsetX": 0,
		"velOffsetY": -232,
		"velAngMin": -0.2,
		"velAngMax": 0.2,
		"velRadius": 55.1,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 89,
		"velRandomLine": false,
		"minStartTime": 0,
		"maxStartTime": 0.5,
		"minLifespan": 0.5,
		"maxLifespan": 1,
		"gravityY": 250,
		"gravityX": 0,
		"startSize": 1,
		"endSize": 80,
		"loop": false,
		"colEnvKeyframes": [
			0.3,
			0.6
		],
		"alpha": 0.5,
		"colEnv0": [
			0.13333333333333333,
			0.20392156862745098,
			0
		],
		"colEnv1": [
			0,
			0.9607843137254902,
			0.011764705882352941
		],
		"colEnv2": [
			0.12156862745098039,
			0.1450980392156863,
			0
		],
		"colEnv3": [
			0.17647058823529413,
			0.8431372549019608,
			0
		],
		"alphaGradient": [
			0.3,
			1,
			1,
			0
		],
		"alphaStops": [
			0.3,
			0.7
		],
		"cells": [
			7
		],
		"textureID": "_128x128"
	};

	return new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, x, y, this.config );
};
