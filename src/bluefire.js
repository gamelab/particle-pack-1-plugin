/**
  * ParticlePack1 Bluefire Effect.
  * @property Bluefire
  * @type Kiwi.Entity
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack1.Bluefire = function (state,x,y) { 
  this.config = {
  "numParts": 25,
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
  "velOffsetY": -180,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 55.1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 30,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 1,
  "minLifespan": 0.5,
  "maxLifespan": 1,
  "gravityY": 100,
  "gravityX": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": true,
  "colEnvKeyframes": [
    0.1,
    0.3
  ],
  "alpha": 0.7,
  "colEnv0": [
    0,
    0.8196078431372549,
    0.9921568627450981
  ],
  "colEnv1": [
    0.047058823529411764,
    0.36470588235294116,
    0.984313725490196
  ],
  "colEnv2": [
    0.12549019607843137,
    0.19215686274509805,
    0.9647058823529412
  ],
  "colEnv3": [
    0.047058823529411764,
    0.2196078431372549,
    0.9882352941176471
  ],
  "alphaGradient": [
    "0",
    1,
    1,
    1
  ],
  "alphaStops": [
    "0.2",
    0.6
  ],
  "cells": [
    1
  ],
  "additive": true
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}
