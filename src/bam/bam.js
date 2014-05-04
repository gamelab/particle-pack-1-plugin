Kiwi.Plugins.ParticlePack1.Bam = function (state,x,y) { 
  console.log (arguments)
  this.config = {
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

  
  console.log(state.textures.particlePack1)

  return new Kiwi.GameObjects.StatelessParticles(state,x,y,state.textures.particlePack1,this.config);

}



