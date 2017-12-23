$( document ).ready( function () {
    var theurl;
    for ( var i = 1; i < 30; i++) {
        theurl = 'http://pokeapi.co/api/v2/pokemon/' + i + '/';
        console.log ( theurl );

        $.get( theurl, function ( pokemon ) {
            console.log ( 'i = ' + i )
            console.log ( pokemon );
            console.log ( pokemon.name );
            console.log ( pokemon.abilities );
            console.log ( pokemon.abilities[0] );
            console.log ( pokemon.abilities[0].ability );
            console.log ( pokemon.abilities[0].ability.name );
            console.log ( pokemon.sprites.front_default );
            console.log ( 'i = ' + i )

            $( '#pokemons' ).append( $( '<div class="pokemons"><h2>' + pokemon.name + '</h2> <img src=" ' + pokemon.sprites.front_default + ' "> </div>' ));

        }, 'json');
    }
})
