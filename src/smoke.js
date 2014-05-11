Kiwi.Plugins.ParticlePack1.Smoke = function (state,x,y) { 
  this.config = {
  "numParts": 15,
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
  "velShape": "line",
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
  "velLength": 50,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 3,
  "minLifespan": 1,
  "maxLifespan": 2,
  "gravityY": 0,
  "gravityX": 0,
  "startSize": 10,
  "endSize": 100,
  "loop": true,
  "colEnvKeyframes": [
    "0.1",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    1,
    0.9490196078431372,
    0.9176470588235294
  ],
  "colEnv1": [
    0.6901960784313725,
    0.6862745098039216,
    0.6901960784313725
  ],
  "colEnv2": [
    0.6901960784313725,
    0.6862745098039216,
    0.6823529411764706
  ],
  "colEnv3": [
    0.3411764705882353,
    0.30980392156862746,
    0.3215686274509804
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.6"
  ],
  "cells": [
    6
  ],
  "textureID": "_128x128",
  "additive": false
}
  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}
