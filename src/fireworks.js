Kiwi.Plugins.ParticlePack1.Fireworks = function (state,x,y) { 
  this.config = {
  "numParts": 25,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 14.1,
  "posRadialStart": 0,
  "posRadialEnd": 6.265732014659643,
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
  "minVel": 50,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": false,
  "velShape": "radial",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": -5,
  "velAngMax": 5,
  "velRadius": 250,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 89,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.2,
  "maxLifespan": 0.5,
  "gravity": 250,
  "startSize": 1,
  "endSize": 30,
  "loop": false,
  "colEnvKeyframes": [
    "0.3",
    0.6
  ],
  "alpha": 1,
  "colEnv0": [
    0.9764705882352941,
    0.9921568627450981,
    0.8313725490196079
  ],
  "colEnv1": [
    0.984313725490196,
    0.9098039215686274,
    0.37254901960784315
  ],
  "colEnv2": [
    0.9882352941176471,
    0.8509803921568627,
    0.050980392156862744
  ],
  "colEnv3": [
    0.8745098039215686,
    0.17647058823529413,
    0.32941176470588235
  ],
  "alphaGradient": [
    "1",
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "cells": [
    0,
    6
  ],
  "gravityX": 0,
  "gravityY": 0
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet_16,x,y,this.config);

}
