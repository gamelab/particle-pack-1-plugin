Kiwi.Plugins.ParticlePack1.Explosion = function (state,x,y) { 
  this.config = {
  "numParts": 20,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 100,
  "posRadialStart": 0,
  "posRadialEnd": 0,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 1,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "radial",
  "maxVel": 802,
  "minVel": -978,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "radial",
  "velOffsetX": 0,
  "velOffsetY": 0,
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
  "maxStartTime": 0.2,
  "minLifespan": 0.4,
  "maxLifespan": 0.7,
  "gravity": 0,
  "startSize": 20,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    "0.4",
    "0.6"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.8705882352941177,
    0
  ],
  "colEnv1": [
    1,
    0.18823529411764706,
    0.06666666666666667
  ],
  "colEnv2": [
    0.5529411764705883,
    0.5450980392156862,
    0.5372549019607843
  ],
  "colEnv3": [
    0.6784313725490196,
    0.6588235294117647,
    0.6235294117647059
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    "0.6"
  ],
  "cells": [
    6
  ],
  "textureID": "_128x128",
  "gravityX": 0,
  "gravityY": 0,
  "additive": false
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}
