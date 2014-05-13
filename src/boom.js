/**
  * ParticlePack1 Boom Effect.
  * @property Boom
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack1.Boom = function (state,x,y) { 
  
  this.boomConfig = {
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
    16
  ],
  "textureID": "_128x128"
}
  this.explosionConfig = {
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
  "posShape": "point",
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
    0.4,
    0.6
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
    0.6
  ],
  "cells": [
    6
  ],
  "textureID": "_128x128",
  "gravityX": 0,
  "gravityY": 0,
  "additive": false
}
  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var boom = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.boomConfig);
  var explosion = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.explosionConfig);
  group.addChild(explosion);
  group.addChild(boom);
 

  return group;
}
