Kiwi.Plugins.ParticlePack1.Bam = function (state,x,y) { 
  console.log (arguments)
  this.bamConfig = {
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
  "velAngMin": -1,
  "velAngMax": 1,
  "velRadius": 55.1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 89,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.2,
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

Kiwi.Plugins.ParticlePack1.Bluefire = function (state,x,y) { 
  this.backConfig = {
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
  "velShape": "point",
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
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 3,
  "minLifespan": 0.7,
  "maxLifespan": 1.3,
  "gravityY": 20,
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
    0,
    1,
    1,
    1
  ],
  "alphaStops": [
    0.3,
    0.6
  ],
  "cells": [
    1
  ],
  "additive": false
}

this.frontConfig = {
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
  "velShape": "point",
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
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 3,
  "minLifespan": 0.7,
  "maxLifespan": 1.3,
  "gravityY": 20,
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
    0,
    1,
    1,
    1
  ],
  "alphaStops": [
    0.3,
    0.6
  ],
  "cells": [
    1
  ],
  "additive": true
}

  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var back = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.backConfig);
  var front = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.frontConfig);
  group.addChild(back);
  group.addChild(front);

  return group;

}

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
  group.addChild(boom);
  group.addChild(explosion);

  return group;
}

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

Kiwi.Plugins.ParticlePack1.Fireworks = function (state,x,y) { 
  this.config = {
  "numParts": 15,
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

Kiwi.Plugins.ParticlePack1.Gasfire = function (state,x,y) { 
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
  "velShape": "point",
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
  "velLength": 5,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 1,
  "minLifespan": 0.7,
  "maxLifespan": 1.3,
  "gravityY": 20,
  "gravityX": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": true,
  "colEnvKeyframes": [
    "0.1",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    0,
    0.8745098039215686,
    0.9921568627450981
  ],
  "colEnv1": [
    0.027450980392156862,
    0.8274509803921568,
    0.984313725490196
  ],
  "colEnv2": [
    0.9725490196078431,
    0.5529411764705883,
    0.011764705882352941
  ],
  "colEnv3": [
    0.8980392156862745,
    0.17254901960784313,
    0
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "1"
  ],
  "alphaStops": [
    0.3,
    "0.6"
  ],
  "cells": [
    0
  ],
  "textureID": "_128x128",
  "additive": true
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}

Kiwi.Plugins.ParticlePack1.Gasleak = function (state,x,y) { 
  this.cloudsConfig = {
  "numParts": 10,
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
  "velRandomRadial": false,
  "velShape": "radial",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 200,
  "velRadialStart": 4.34586983746588,
  "velRadialEnd": 5.1312680008633285,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 1,
  "minLifespan": 0.5,
  "maxLifespan": 0.7,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 2,
  "endSize": 100,
  "loop": true,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.9686274509803922,
    0.9803921568627451,
    0.9882352941176471
  ],
  "colEnv1": [
    0.9137254901960784,
    0.8666666666666667,
    0.8705882352941177
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    0.8705882352941177,
    0.8705882352941177,
    0.8705882352941177
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
    6
  ],
  
}

this.jetConfig = {
  "numParts": 5,
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
  "maxVel": 725,
  "minVel": -478,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": -100,
  "velAngMin": -0.2,
  "velAngMax": 0.2,
  "velRadius": 200,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 10,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.6,
  "minLifespan": 0.2,
  "maxLifespan": 1,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 100,
  "loop": true,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.9882352941176471,
    0.9764705882352941,
    0.9803921568627451
  ],
  "colEnv1": [
    0.7725490196078432,
    0.803921568627451,
    0.7803921568627451
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    0.7137254901960784,
    0.7137254901960784,
    0.7137254901960784
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
    4
  ],
  
}

  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var clouds = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,-30,this.cloudsConfig);
  var jet = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.jetConfig);
  group.addChild(clouds);
  group.addChild(jet);

  return group;

}

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
  "numParts": 20,
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
  "velWidth": 200,
  "velHeight": 80,
  "velAngle": 0,
  "velLength": 50,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.5,
  "maxLifespan": 1.4,
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
  "minLifespan": 1.5,
  "maxLifespan": 1.5,
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
  "numParts": 2,
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

Kiwi.Plugins.ParticlePack1.Lightning = function (state,x,y) { 
  this.glowConfig = {
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
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.9882352941176471,
    0.9647058823529412,
    0.9176470588235294
  ],
  "colEnv1": [
    1,
    1,
    0
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    1,
    0.8901960784313725,
    0
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
  "additive": true,
  "cells": [
    9
  ],
  "textureID": "_128x128"
}

this.boltConfig = {
  "numParts": 4,
  "posOffsetX": 0,
  "posOffsetY": -30,
  "posRadius": 100,
  "posRadialStart": 0,
  "posRadialEnd": 3.142,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 5,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "line",
  "maxVel": 100,
  "minVel": 77,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": -396.3,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 200,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 2,
  "velHeight": 12,
  "velAngle": 0,
  "velLength": 291,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 4,
  "endSize": 207,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.5"
  ],
  "alpha": "1",
  "colEnv0": [
    0.9921568627450981,
    0.9490196078431372,
    0.9176470588235294
  ],
  "colEnv1": [
    1,
    1,
    0
  ],
  "colEnv2": [
    0.9294117647058824,
    0.9333333333333333,
    0.9803921568627451
  ],
  "colEnv3": [
    0.996078431372549,
    0.9098039215686274,
    0.09803921568627451
  ],
  "alphaGradient": [
    1,
    1,
    "1",
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": false,
  "cells": [
    5
  ]
 
}

this.linesConfig = {
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
  "velAngMax": 2,
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
  "minLifespan": 0.2,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 0.8,
  "colEnv0": [
    0.9882352941176471,
    0.9725490196078431,
    0.9568627450980393
  ],
  "colEnv1": [
    1,
    0.9137254901960784,
    0
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    1,
    0.8784313725490196,
    0
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
    3
  ]
} 

this.sparksConfig = {
  "numParts": 10,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.230825429619757,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 33,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "radial",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": false,
  "velShape": "radial",
  "velOffsetX": 0,
  "velOffsetY": -150,
  "velAngMin": -5,
  "velAngMax": 2,
  "velRadius": 100,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.4,
  "maxLifespan": 1,
  "gravityX": 0,
  "gravityY": 400,
  "startSize": 1,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": "1",
  "colEnv0": [
    0.9882352941176471,
    0.9411764705882353,
    0.9411764705882353
  ],
  "colEnv1": [
    1,
    1,
    0
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    1,
    0.9058823529411765,
    0
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
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_16x16"
}

  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var glow = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.glowConfig);
  var bolt = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.boltConfig);
  var lines = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.linesConfig);
  var sparks = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.sparksConfig);
  group.addChild(glow);
  group.addChild(bolt);
  group.addChild(lines);
  group.addChild(sparks);

  return group;

}

Kiwi.Plugins.ParticlePack1.Orangefire = function (state,x,y) { 
  this.backConfig = {
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
  "velShape": "point",
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
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 3,
  "minLifespan": 0.7,
  "maxLifespan": 1.3,
  "gravityY": 20,
  "gravityX": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": true,
  "colEnvKeyframes": [
    0.1,
    0.3
  ],
  "alpha": 0.2,
  "colEnv0": [
    1,
    0.29411764705882354,
    0.06274509803921569
  ],
  "colEnv1": [
    1,
    0.8352941176470589,
    0
  ],
  "colEnv2": [
    0.9764705882352941,
    0.5058823529411764,
    0.09019607843137255
  ],
  "colEnv3": [
    0.996078431372549,
    0.15294117647058825,
    0
  ],
  "alphaGradient": [
    0,
    1,
    1,
    1
  ],
  "alphaStops": [
    0.3,
    0.6
  ],
  "cells": [
    1
  ],
  "additive": false
}

this.frontConfig = {
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
  "velShape": "point",
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
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 3,
  "minLifespan": 0.7,
  "maxLifespan": 1.3,
  "gravityY": 20,
  "gravityX": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": true,
  "colEnvKeyframes": [
    0.1,
    0.3
  ],
  "alpha": 0.2,
  "colEnv0": [
    1,
    0.29411764705882354,
    0.06274509803921569
  ],
  "colEnv1": [
    1,
    0.8352941176470589,
    0
  ],
  "colEnv2": [
    0.9764705882352941,
    0.5058823529411764,
    0.09019607843137255
  ],
  "colEnv3": [
    0.996078431372549,
    0.15294117647058825,
    0
  ],
  "alphaGradient": [
    0,
    1,
    1,
    1
  ],
  "alphaStops": [
    0.3,
    0.6
  ],
  "cells": [
    1
  ],
  "additive": true
}

  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var back = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.backConfig);
  var front = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.frontConfig);
  group.addChild(back);
  group.addChild(front);

  return group;

}


/**
* The description of ParticlePack1 goes here
*
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class ParticlePack1
* @main
*/
Kiwi.Plugins.ParticlePack1 = {
  
  /**
  * The name of this plugin.
  * @property name
  * @type String
  * @public
  */
  name:'ParticlePack1',

  /**
  * The version of this plugin.
  * @property version
  * @type String
  * @public
  */
  version:'0.1.0',

  minimumKiwiVersion:'0.7.0',

  pluginDependencies: [
    {
      name:'ParticlesGL',
      minimumVersion:'0.9.0'
    }

  ]

};



/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register(Kiwi.Plugins.ParticlePack1);


 

 

Kiwi.Plugins.ParticlePack1.Poison = function (state,x,y) { 
  this.config = {
  "numParts": 5,
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
  "velShape": "line",
  "velOffsetX": 0,
  "velOffsetY": -232,
  "velAngMin": -0.2,
  "velAngMax": 0.2,
  "velRadius": 55.1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 89,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.5,
  "minLifespan": 0.5,
  "maxLifespan": 1,
  "gravityY": 250,
  "gravityX": 0,
  "startSize": 1,
  "endSize": 80,
  "loop": false,
  "colEnvKeyframes": [
    "0.3",
    0.6
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.13333333333333333,
    0.20392156862745098,
    0
  ],
  "colEnv1": [
    0,
    0.9607843137254902,
    0.011764705882352941
  ],
  "colEnv2": [
    0.12156862745098039,
    0.1450980392156863,
    0
  ],
  "colEnv3": [
    0.17647058823529413,
    0.8431372549019608,
    0
  ],
  "alphaGradient": [
    "0.3",
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "cells": [
    7
  ],
  "textureID": "_128x128"
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}

Kiwi.Plugins.ParticlePack1.Poof = function (state,x,y) { 
  this.poofConfig = {
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
    17
  ],
  "textureID": "_128x128"
}

this.smokepuffsConfig = {
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
  "velAngMin": -1,
  "velAngMax": 1,
  "velRadius": 55.1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 89,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.2,
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
    10
  ],
  "additive": false
}

  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var poof = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.poofConfig);
  var smokepuffs = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.smokepuffsConfig);
  group.addChild(poof);
  group.addChild(smokepuffs);

  return group;
}

Kiwi.Plugins.ParticlePack1.Pow = function (state,x,y) { 
  
  this.powConfig = {
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
    18
  ],
  "textureID": "_128x128"
}
  this.hitlinesConfig = {
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
    0.2,
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
  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var pow = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.powConfig);
  var hitlines = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.hitlinesConfig);
  group.addChild(pow);
  group.addChild(hitlines);

  return group;
}

Kiwi.Plugins.ParticlePack1.Redfire = function (state,x,y) { 
  this.backConfig = {
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
  "velShape": "point",
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
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 3,
  "minLifespan": 0.7,
  "maxLifespan": 1.3,
  "gravityY": 20,
  "gravityX": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": true,
  "colEnvKeyframes": [
    "0.1",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.9921568627450981,
    0.9490196078431372,
    0.9490196078431372
  ],
  "colEnv1": [
    0.984313725490196,
    0.8392156862745098,
    0
  ],
  "colEnv2": [
    0.9725490196078431,
    0.3333333333333333,
    0
  ],
  "colEnv3": [
    0.996078431372549,
    0.19607843137254902,
    0
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "1"
  ],
  "alphaStops": [
    0.3,
    "0.6"
  ],
  "cells": [
    0
  ],
  "textureID": "_128x128",
  "additive": false
}

this.frontConfig = {
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
  "velShape": "point",
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
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 3,
  "minLifespan": 0.7,
  "maxLifespan": 1.3,
  "gravityY": 20,
  "gravityX": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": true,
  "colEnvKeyframes": [
    0.1,
    0.3
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.9921568627450981,
    0.9490196078431372,
    0.9490196078431372
  ],
  "colEnv1": [
    0.984313725490196,
    0.8392156862745098,
    0
  ],
  "colEnv2": [
    0.9725490196078431,
    0.3333333333333333,
    0
  ],
  "colEnv3": [
    0.49411764705882355,
    0.0784313725490196,
    0
  ],
  "alphaGradient": [
    0,
    1,
    1,
    1
  ],
  "alphaStops": [
    0.3,
    0.6
  ],
  "cells": [
    0
  ],

  "additive": true
}
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var back = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.backConfig);
  var front = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.frontConfig);
  group.addChild(back);
  group.addChild(front);

  return group;

}

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

Kiwi.Plugins.ParticlePack1.Smokepuffs = function (state,x,y) { 
  this.config = {
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
  "velAngMin": -1,
  "velAngMax": 1,
  "velRadius": 55.1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 89,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.2,
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
    10
  ],
  "additive": false
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}

Kiwi.Plugins.ParticlePack1.Stars = function (state,x,y) { 
  this.config = {
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
  "velAngMin": -1,
  "velAngMax": 1,
  "velRadius": 55.1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 89,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.2,
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
  "textureID": "_128x128",
  "additive": false
}

  return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,x,y,this.config);

}

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

Kiwi.Plugins.ParticlePack1.Zap = function (state,x,y) { 
  this.zapConfig = {
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
    14
  ],
  "textureID": "_128x128"
}

this.glowConfig = {
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
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.9882352941176471,
    0.9647058823529412,
    0.9176470588235294
  ],
  "colEnv1": [
    1,
    1,
    0
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    1,
    0.8901960784313725,
    0
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
  "additive": true,
  "cells": [
    9
  ],
  "textureID": "_128x128"
}

this.boltConfig = {
  "numParts": 4,
  "posOffsetX": 0,
  "posOffsetY": -30,
  "posRadius": 100,
  "posRadialStart": 0,
  "posRadialEnd": 3.142,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 5,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "line",
  "maxVel": 100,
  "minVel": 77,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": -396.3,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 200,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 2,
  "velHeight": 12,
  "velAngle": 0,
  "velLength": 291,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 4,
  "endSize": 207,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.5"
  ],
  "alpha": "1",
  "colEnv0": [
    0.9921568627450981,
    0.9490196078431372,
    0.9176470588235294
  ],
  "colEnv1": [
    1,
    1,
    0
  ],
  "colEnv2": [
    0.9294117647058824,
    0.9333333333333333,
    0.9803921568627451
  ],
  "colEnv3": [
    0.996078431372549,
    0.9098039215686274,
    0.09803921568627451
  ],
  "alphaGradient": [
    1,
    1,
    "1",
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": false,
  "cells": [
    5
  ]
 
}

this.linesConfig = {
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
  "velAngMax": 2,
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
  "minLifespan": 0.2,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 0.8,
  "colEnv0": [
    0.9882352941176471,
    0.9725490196078431,
    0.9568627450980393
  ],
  "colEnv1": [
    1,
    0.9137254901960784,
    0
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    1,
    0.8784313725490196,
    0
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
    3
  ]
} 

this.sparksConfig = {
  "numParts": 10,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.230825429619757,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 33,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "radial",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": false,
  "velShape": "radial",
  "velOffsetX": 0,
  "velOffsetY": -150,
  "velAngMin": -5,
  "velAngMax": 2,
  "velRadius": 100,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.4,
  "maxLifespan": 1,
  "gravityX": 0,
  "gravityY": 400,
  "startSize": 1,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": "1",
  "colEnv0": [
    0.9882352941176471,
    0.9411764705882353,
    0.9411764705882353
  ],
  "colEnv1": [
    1,
    1,
    0
  ],
  "colEnv2": [
    1,
    1,
    1
  ],
  "colEnv3": [
    1,
    0.9058823529411765,
    0
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
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_16x16"
}

  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var zap = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.zapConfig);
  var glow = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.glowConfig);
  var bolt = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.boltConfig);
  var lines = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.linesConfig);
  var sparks = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack1SpriteSheet,0,0,this.sparksConfig);
  group.addChild(glow);
  group.addChild(bolt);
  group.addChild(lines);
  group.addChild(sparks);
  group.addChild(zap);

  return group;

}
