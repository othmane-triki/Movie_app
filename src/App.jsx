import MovieList from './components/MovieList';
import './App.css';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setValue] = useState("power"); 
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const scrollRef = useRef(null);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteMovies');
        if (storedFavorites) {
            try {
                setFavoriteMovies(JSON.parse(storedFavorites));
            } catch (error) {
                console.error("Error loading favorites from localStorage:", error);
                localStorage.removeItem('favoriteMovies'); // Clear corrupted data
            }
        }
    }, []); // Empty dependency array = runs only once on mount

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        if (favoriteMovies.length > 0) {
            localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        } else {
            // Optional: remove the item if there are no favorites
            localStorage.removeItem('favoriteMovies');
        }
    }, [favoriteMovies]);

    // Using useCallback to memoize the function
    const getMovieRequest = useCallback(async (search) => {
        if (!search || search.trim().length < 3) return;

        const url = `https://www.omdbapi.com/?s=${search}&apikey=d9b0b8a9`;

        try {
            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getMovieRequest(searchValue);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchValue, getMovieRequest]);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 600;
        } else {
            current.scrollLeft += 600;
        }
    };

    return (
        <div className='movie-app w-full px-4 md:px-8 py-10 bg-[#141414] min-h-screen'>
            <div className="flex justify-between mb-4 items-center">
                <MovieListHeading heading="Movies" />
                <SearchBox searchValue={searchValue} setValue={setValue} />
            </div>

            <div className="relative">
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-3xl cursor-pointer"
                >
                    <IoIosArrowBack />
                </button>

                <div className="row flex overflow-x-auto scrollbar-hide scroll-smooth" ref={scrollRef}>
                    {movies && movies.length > 0 ? (
                        <MovieList movies={movies} setFavoriteMovies={setFavoriteMovies} favoriteMovies={favoriteMovies}/>
                    ) : (
                        <div className="text-gray-400 text-lg py-10">Type in the search box to find movies...</div>
                    )}
                </div>

                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-3xl cursor-pointer"
                >
                    <IoIosArrowForward />
                </button>
            </div>

            <div className="favorite">
                <FavoriteMovies 
                    favoriteMovies={favoriteMovies} 
                    setFavoriteMovies={setFavoriteMovies}
                />
            </div>

            <div className="footer">
                <p className="text-center text-gray-500 text-sm mt-10">
                    &copy; Made with ❤️ by Othmane
                </p>
            </div>
        </div>
    );
}

export default App;