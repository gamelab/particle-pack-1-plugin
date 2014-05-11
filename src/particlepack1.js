
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


 

 
