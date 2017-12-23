$( document ).ready( function () {
    var theurl;
    for ( var i = 1; i < 5; i++) {
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

            $( '#pokemons' ).append( $( "<div class='pokemons'><h2>" + pokemon.name + "</h2><img id=" + pokemon.id + " src='" + pokemon.sprites.front_default + "'></div>" ));

        }, 'json');
    }

    // FETCHING AND DISPLAYING DETAILS UPON A CLICK
    $( document ).on( 'click', '#pokemons img', function () {
        console.log ( 'click!' );
        // console.log ( $( this ).attr( 'src' ) ) ; //ALTERNATIVE EXTRACTION OF URL
        console.log ( $( this ).attr( 'id' ) );
        pickedUrl = 'http://pokeapi.co/api/v2/pokemon/' + $( this ).attr( 'id' ) + '/';
        console.log ( pickedUrl );
        $.get( pickedUrl, function ( pickedPokemon ) {
            $( 'h3').css( 'display', 'block' );
            $( '#pokeName' ).text( "" + pickedPokemon.name + "" );
            $( '#pokeImg' ).attr( 'src', pickedPokemon.sprites.front_default );
            
            // RESETTING AND POPULATING THE LIST OF TYPES
            $( '#pokeTypes' ).html('');
            for ( var i = 0; i < pickedPokemon.types.length; i++ ) {
                $( '#pokeTypes' ).append( "<li>" + pickedPokemon.types[i].type.name + "</li>" );
            }

            $( '#pokeHeight' ).text( "" + pickedPokemon.height + "");
            $( '#pokeWeight' ).text( "" + pickedPokemon.weight + "");

        }, 'json' );
    } )
})
