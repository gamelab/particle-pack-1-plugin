Kiwi.Plugins.ParticlePack1.Hitlines = function (state,x,y) { 
  this.config = {
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
  "gravity": 0,
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
    "0.2",
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
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}
