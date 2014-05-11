Kiwi.Plugins.ParticlePack1.Tornado = function (state,x,y) { 
  this.config = {
  "numParts": 30,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 100,
  "posRadialStart": 0,
  "posRadialEnd": 3.142,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 1,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 802,
  "minVel": 812,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "line",
  "velOffsetX": 0,
  "velOffsetY": -200,
  "velAngMin": -0.2,
  "velAngMax": 0.2,
  "velRadius": 200,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 50,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.8,
  "minLifespan": 0.8,
  "maxLifespan": 1,
  "gravity": 0,
  "startSize": 2,
  "endSize": 200,
  "loop": true,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.9647058823529412,
    0.9882352941176471,
    0.9882352941176471
  ],
  "colEnv1": [
    0.792156862745098,
    0.8745098039215686,
    1
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    0.5686274509803921,
    0.7529411764705882,
    0.9215686274509803
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "cells": [
    12
  ],
  "textureID": "_128x128",
  "gravityX": 0,
  "gravityY": 0
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}
