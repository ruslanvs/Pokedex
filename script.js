$( document ).ready( function () {
    var theurl;
    for ( var i = 1; i < 3; i++) {
        theurl = 'http://pokeapi.co/api/v2/pokemon/' + i + '/';
        console.log ( theurl );

        $.get( theurl, function ( pokemon ) {
            console.log ( pokemon );
            console.log ( pokemon.name );
            console.log ( pokemon.abilities );
            console.log ( pokemon.abilities[0] );
            console.log ( pokemon.abilities[0].ability );
            console.log ( pokemon.abilities[0].ability.name );
            console.log ( pokemon.sprites.front_default );

            $( '#pokemons' ).append( $( '<div class="pokemons"><h2>' + pokemon.name + '</h2> <img src=" ' + pokemon.sprites.front_default + ' "> </div>' ));

            pokeWidth = $( "pokemon.sprites.front_default" ).attr( "width" );
            console.log ( pokeWidth );
            console.log ( $( "https://www.w3schools.com/css/img_mountains.jpg" )).attr( 'width' );

        }, 'json');
    }
    $( document ).on( 'click', 'img', function () {
        console.log ( 'click!' );
        pokeWidth = $( this ).attr( 'width' );
        console.log ( pokeWidth );
        
    } )
    // $( 'img' ).click( function () {
    //     console.log ( 'click2!' );

    // } )
})
