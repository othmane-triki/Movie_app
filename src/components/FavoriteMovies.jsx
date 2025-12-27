import React from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';

function FavoriteMovies({ favoriteMovies, setFavoriteMovies }) {
    return (
        <div className="favorite-movies-section mt-10">
            <MovieListHeading heading="Favorite Movies" />  
            <div className="row flex overflow-x-auto scrollbar-hide scroll-smooth">
                {favoriteMovies && favoriteMovies.length > 0 ? (
                    <MovieList movies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} favoriteMovies={favoriteMovies} />
                ) : (
                    <div className="text-gray-400 text-lg py-10">No favorite movies added yet.</div>
                )}
            </div>
        </div>
    );
}

export default FavoriteMovies;