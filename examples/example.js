function getParameterByName( name ) {
	name = name.replace( /[\[]/, "\\[" ).replace( /[\]]/, "\\]" );
	var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)" ),
		results = regex.exec( location.search );
	return results == null ?
		"" :
		decodeURIComponent( results[ 1 ].replace( /\+/g, " " ) );
}

var selectEffect = document.getElementById( "selectEffect" );
selectEffect.value = getParameterByName( "name" ) || "gasfire";

var looping = document.getElementById( "looping" );
looping.value = getParameterByName( "looping" ) || "loopAndPause";

var go = document.getElementById( "go" );
go.onclick = function ( e ) {
	console.log ( selectEffect.value );
	console.log ( looping.value );
	window.location = window.location.origin + window.location.pathname +
		"?name=" + selectEffect.value + "&looping=" + looping.value;
};

var MyState = new Kiwi.State( "myState" );

var MyGame = new Kiwi.Game( "exampleGameContainer", "testGame", MyState,
		{
			renderer: Kiwi.RENDERER_WEBGL,
			plugins:[ "ParticlePack1", "ParticlesGL" ]
		} );

MyState.preload = function() {
	this.game.stage.color = "000000";
	this.addSpriteSheet(
		"particlePack1SpriteSheet",
		"../assets/particlepack1_128.png",
		128, 128, true, 19, 5, 5, 27, 27, 54, 54 );
};

MyState.create = function() {

	// Single particle effects - these return a gameobject
	this.explosion = Kiwi.Plugins.ParticlePack1.Explosion( this, 400, 300 );
	this.gasfire = Kiwi.Plugins.ParticlePack1.Gasfire( this, 400, 300 );
	this.hitlines = Kiwi.Plugins.ParticlePack1.Hitlines( this, 400, 300 );
	this.kaboom = Kiwi.Plugins.ParticlePack1.Kaboom( this, 400, 300 );
	this.poison = Kiwi.Plugins.ParticlePack1.Poison( this, 400, 300 );
	this.smoke = Kiwi.Plugins.ParticlePack1.Smoke( this, 400, 300 );
	this.smokepuffs = Kiwi.Plugins.ParticlePack1.Smokepuffs( this, 400, 300 );
	this.stars = Kiwi.Plugins.ParticlePack1.Stars( this, 400, 300 );
	this.tornado = Kiwi.Plugins.ParticlePack1.Tornado( this, 400, 300 );
	this.bluefire = Kiwi.Plugins.ParticlePack1.Bluefire( this, 400, 300 );
	this.orangefire = Kiwi.Plugins.ParticlePack1.Orangefire( this, 400, 300 );
	this.redfire = Kiwi.Plugins.ParticlePack1.Redfire( this, 400, 300 );

	// Multiple particle effects - these return a group
	this.bam = Kiwi.Plugins.ParticlePack1.Bam( this, 400, 300 );
	this.boom = Kiwi.Plugins.ParticlePack1.Boom( this, 400, 300 );
	this.poof = Kiwi.Plugins.ParticlePack1.Poof( this, 400, 300 );
	this.pow = Kiwi.Plugins.ParticlePack1.Pow( this, 400, 300 );
	this.zap = Kiwi.Plugins.ParticlePack1.Zap( this, 400, 300 );
	this.gasleak = Kiwi.Plugins.ParticlePack1.Gasleak( this, 400, 300 );
	this.lightning = Kiwi.Plugins.ParticlePack1.Lightning( this, 400, 300 );

	var effectName = getParameterByName( "name" ) || "gasfire";
	var effect = this[ effectName ];
	var looping = getParameterByName( "looping" ) || "loopAndPause";

	this.addChild( effect );


	function start() {

		if ( effect.childType() === Kiwi.GROUP ) {
			for ( var i = 0; i < effect.members.length; i++ ) {
				console.log( i );
				switch ( looping ) {
					case "once" :
						effect.members[ i ].startEmitting( false );
						break;
					case "continuous" :
						effect.members[ i ].startEmitting();
						break;
					case "loopAndPause" :
						effect.members[ i ].startEmitting( false, false );
						break;
				}
			}
		} else {
			switch ( looping ) {
				case "once" :
					effect.startEmitting( false );
					break;
				case "continuous" :
					effect.startEmitting();
					break;
				case "loopAndPause" :
					effect.startEmitting( false, false );
					break;
			}
		}
	}

	start();
	if ( looping === "loopAndPause" ) {
		this.game.time.clock.setInterval( start, 5000 );
	}
};
