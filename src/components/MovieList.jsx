import React from "react";

const MovieList = (props) => {
    if (!props.movies) return null;
    
    return (
        <>
            {props.movies.map((movie, index) => {
                if (!movie.Poster || movie.Poster === "N/A") return null;
                const posterUrl = movie.Poster.replace("http://", "https://");
                
                // Check if this specific movie is already in favorites by ID
                const isFavorited = props.favoriteMovies.some(
                    (fav) => fav.imdbID === movie.imdbID
                );
                
                // Handler to toggle favorite status
                const handleFavoriteClick = (e) => {
                    e.stopPropagation(); // Prevent event bubbling if needed
                    
                    if (isFavorited) {
                        // Remove from favorites
                        const updatedFavorites = props.favoriteMovies.filter(
                            (fav) => fav.imdbID !== movie.imdbID
                        );
                        props.setFavoriteMovies(updatedFavorites);
                    } else {
                        // Add to favorites
                        props.setFavoriteMovies([...props.favoriteMovies, movie]);
                    }
                };
                
                return (
                    <div key={index} className="group posters shrink-0 m-3 hover:scale-105 transition-transform duration-300 relative cursor-pointer">
                        <img 
                            className="poster rounded-md block shadow-lg" 
                            style={{ 
                                width: '200px', 
                                height: '300px', 
                                objectFit: 'cover',
                                backgroundColor: '#333'
                            }}
                            src={posterUrl} 
                            alt={movie.Title} 
                        />
                        
                        <div className="overlay absolute bg-black/70 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-md bottom-0 p-5">
                            <span className="text-white text-sm font-bold text-center w-full flex justify-between items-center"> 
                                <p>{isFavorited ? "Remove from favorites" : "Add to favorite"}</p>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill={isFavorited ? "red" : "none"} 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke={isFavorited ? "red" : "currentColor"} 
                                    className="w-6 h-6"
                                    onClick={handleFavoriteClick}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MovieList;