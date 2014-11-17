/**
* ParticlePack1 Smokepuffs Effect.
* @property Smokepuffs
* @type Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack1.Smokepuffs = function( state, x, y ) {
	this.config = {
		"numParts": 1,
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
		"velShape": "center",
		"velOffsetX": 0,
		"velOffsetY": -232,
		"velAngMin": -3,
		"velAngMax": 3,
		"velRadius": 55.1,
		"velRadialStart": 0,
		"velRadialEnd": 6.283185307179586,
		"velWidth": 200,
		"velHeight": 200,
		"velAngle": 0,
		"velLength": 89,
		"velRandomLine": false,
		"minStartTime": 0,
		"maxStartTime": 0,
		"minLifespan": 0.4,
		"maxLifespan": 0.4,
		"gravityY": 0,
		"gravityX": 0,
		"startSize": 70,
		"endSize": 180,
		"loop": false,
		"colEnvKeyframes": [
			"0.3",
			0.6
		],
		"alpha": 1,
		"colEnv0": [
			0.5725490196078431,
			0.796078431372549,
			0.9921568627450981
		],
		"colEnv1": [
			0.6862745098039216,
			0.8313725490196079,
			0.9921568627450981
		],
		"colEnv2": [
			0.996078431372549,
			0.984313725490196,
			0.9529411764705882
		],
		"colEnv3": [
			0.7607843137254902,
			0.807843137254902,
			0.9137254901960784
		],
		"alphaGradient": [
			"0",
			1,
			1,
			0
		],
		"alphaStops": [
			"0.2",
			0.7
		],
		"cells": [
			10
		],
		"additive": false
	};

	return new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack1SpriteSheet, x, y, this.config );
};
