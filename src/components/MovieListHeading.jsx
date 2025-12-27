import React from "react";

function MovieListHeading(props) {
    return (
        <div className="movie-list-heading flex items-center mb-6">
            <h2 className="text-white text-2xl font-bold">{props.heading}</h2>
        </div>
    );
}

export default MovieListHeading;