/**
  * ParticlePack1 Bam Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack1.Bam = function (state,x,y) { 
  this.bamConfig = {
    "numParts": 1,
    "posOffsetX": 0,
    "posOffsetY": 20,
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
      15
    ],
  }
  this.starsConfig = {
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
  "velAngMin": -5,
  "velAngMax": 5,
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
  "additive": false
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var bam = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.bamConfig);
  var stars = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.starsConfig);
  group.addChild(bam);
  group.addChild(stars);

  return group;
}
