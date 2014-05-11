Kiwi.Plugins.ParticlePack1.Kaboom = function (state,x,y) { 
  this.kaboomConfig = {
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
    "minLifespan": 1.0,
    "maxLifespan": 1.0,
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
      "0",
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
      13
    ],
    "textureID": "_128x128"
  }

  this.backConfig = {
  "numParts": 30,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 20,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 370,
  "posHeight": 117,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 1,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 802,
  "minVel": -978,
  "velConstrainRect": false,
  "velConstrainRadial": false,
  "velRandomRadial": true,
  "velShape": "rectangle",
  "velOffsetX": 0,
  "velOffsetY": -300,
  "velAngMin": -2,
  "velAngMax": 2,
  "velRadius": 50,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 250,
  "velHeight": 80,
  "velAngle": 0,
  "velLength": 50,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.3,
  "minLifespan": 0.7,
  "maxLifespan": 1.0,
  "gravity": 0,
  "startSize": 10,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    0.2,
    0.6
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9098039215686274,
    0.8156862745098039
  ],
  "colEnv1": [
    0.9882352941176471,
    0.8862745098039215,
    0.3333333333333333
  ],
  "colEnv2": [
    1,
    0.3411764705882353,
    0.10196078431372549
  ],
  "colEnv3": [
    0.32941176470588235,
    0.3176470588235294,
    0.2980392156862745
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.5
  ],
  "cells": [
    6
  ],
  "textureID": "_128x128",
  "gravityX": 0,
  "gravityY": 300,
  "additive": false
}
  this.middleConfig = {
  "numParts": 1,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 100,
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
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "center",
  "velOffsetX": -100,
  "velOffsetY": 50,
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
  "minLifespan": 0.7,
  "maxLifespan": 0.7,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 300,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
  "colEnv0": [
    0.9882352941176471,
    0.9411764705882353,
    0.9450980392156862
  ],
  "colEnv1": [
    1,
    0.8745098039215686,
    0.5411764705882353
  ],
  "colEnv2": [
    0.996078431372549,
    0.6627450980392157,
    0.43529411764705883
  ],
  "colEnv3": [
    1,
    0.39215686274509803,
    0.1803921568627451
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
  "additive": false,
  "cells": [
    9
  ],
  "textureID": "_128x128"
}


  this.foreConfig = {
  "numParts": 3,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 100,
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
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "center",
  "velOffsetX": -100,
  "velOffsetY": 50,
  "velAngMin": -0.3,
  "velAngMax": 0.3,
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
  "minLifespan": 0.3,
  "maxLifespan": 0.7,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9098039215686274,
    0.5882352941176471
  ],
  "colEnv1": [
    1,
    0.9647058823529412,
    0.9372549019607843
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
    "0",
    1,
    "0.5",
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": false,
  "cells": [
    10,
    12
  ],
  "textureID": "_128x128"
}



  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var back = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.backConfig);
  var middle = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.middleConfig);
  var fore = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.foreConfig);
  var kaboom = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.kaboomConfig);
  group.addChild(back);
  group.addChild(middle);
  group.addChild(fore);
  group.addChild(kaboom);
  return group;
}
