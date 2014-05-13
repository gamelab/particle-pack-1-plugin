/**
  * ParticlePack1 Stars Effect.
  * @property Stars
  * @type Kiwi.Entity
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack1.Stars = function (state,x,y) { 
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
  "velAngMin": -1,
  "velAngMax": 1,
  "velRadius": 55.1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 89,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.2,
  "minLifespan": 0.3,
  "maxLifespan": 0.6,
  "gravityY": 0,
  "gravityX": 0,
  "startSize": 1,
  "endSize": 185,
  "loop": false,
  "colEnvKeyframes": [
    "0.3",
    0.6
  ],
  "alpha": 1,
  "colEnv0": [
    1,
    0.48627450980392156,
    0.058823529411764705
  ],
  "colEnv1": [
    0.9921568627450981,
    0.8705882352941177,
    0.07450980392156863
  ],
  "colEnv2": [
    0.996078431372549,
    0.984313725490196,
    0.9529411764705882
  ],
  "colEnv3": [
    0.9137254901960784,
    0.7686274509803922,
    0
  ],
  "alphaGradient": [
    "0",
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "cells": [
    11
  ],
  "textureID": "_128x128",
  "additive": false
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}
