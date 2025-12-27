# 🎬 Movie Search & Favorites App

A modern React application that allows users to search for movies using the OMDB API and save their favorite movies locally.

## ✨ Features

- 🔍 **Movie Search**: Search for movies by title with real-time results
- ❤️ **Favorites System**: Add/remove movies to your favorites list
- 💾 **Local Storage**: Your favorite movies persist across browser sessions
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices
- ⌨️ **Debounced Search**: Optimized API calls with 500ms debounce
- 🖱️ **Smooth Scrolling**: Horizontal scroll with arrow navigation
- 🎭 **Interactive Cards**: Hover effects with movie poster previews

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd movie-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **OMDB API** - Movie data
- **React Icons** - Icon library
- **LocalStorage API** - Data persistence

## 📁 Project Structure
```
src/
├── components/
│   ├── MovieList.jsx          # Displays movie posters with favorite toggle
│   ├── MovieListHeading.jsx   # Section headings
│   ├── SearchBox.jsx          # Search input component
│   └── FavoriteMovies.jsx     # Favorite movies section
├── App.jsx                    # Main application component
├── App.css                    # Global styles
└── main.jsx                   # Application entry point
```

## 🎯 How It Works

### Movie Search
- Type a movie title in the search box (minimum 3 characters)
- Results appear after 500ms debounce delay
- Scroll through results using arrow buttons or mouse

### Adding to Favorites
- Hover over any movie poster
- Click the heart icon to add/remove from favorites
- Red filled heart = movie is in favorites
- Empty heart = movie is not in favorites

### Data Persistence
- Favorites are automatically saved to browser's localStorage
- Data persists even after closing the browser
- Automatically loads saved favorites on app restart

## 🔑 API Configuration

This app uses the OMDB API. The API key is included in the code:
```javascript
const url = `https://www.omdbapi.com/?s=${search}&apikey=d9b0b8a9`;
```

To use your own API key:
1. Get a free API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Replace the apikey in `App.jsx`

## 🎨 Key Components

### App.jsx
- Main application logic
- Manages movie search state
- Handles localStorage operations
- Implements scroll functionality

### MovieList.jsx
- Renders movie posters
- Handles favorite toggle logic
- Shows/hides overlay on hover
- Manages favorite status display

### FavoriteMovies.jsx
- Displays saved favorite movies
- Shows empty state when no favorites exist
- Uses MovieList component for rendering

## 📝 Features Breakdown

### Search Functionality
```javascript
- Debounced search (500ms delay)
- Minimum 3 characters required
- Real-time results update
- Error handling for failed requests
```

### Favorites Management
```javascript
- Add movies to favorites
- Remove movies from favorites
- Visual feedback (red heart icon)
- Duplicate prevention using imdbID
```

### LocalStorage Integration
```javascript
- Auto-save on favorites change
- Auto-load on app mount
- Error handling for corrupted data
- Clear storage when empty
```

## 🐛 Known Issues & Solutions

**Issue**: Movies disappear when clicking heart icon
- **Solution**: Ensure `favoriteMovies` and `setFavoriteMovies` props are passed to all MovieList instances

**Issue**: Favorites don't persist
- **Solution**: Check browser localStorage is enabled and not in private browsing mode

## 🚧 Future Enhancements

- [ ] Movie details modal
- [ ] Filter by genre/year
- [ ] Sort favorites alphabetically
- [ ] Export/import favorites
- [ ] Dark/light theme toggle
- [ ] Share favorites via URL
- [ ] Movie ratings display
- [ ] Watchlist feature

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/othmane-triki)
- Email: trikiotmane@gmail.com

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for movie data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons

---

Made with ❤️ and React
