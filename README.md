# Netflix GPT

-Create react app
-Configured TailwindCSS
-Header
-Routing of App
-Login Form
-Sign up form
-Form Validation
-useRef Hook 
-Firebase Setup
-Deploying app to Production.
-Create SignUp User Account
-Implement Sign In user API
-Created Redux Store with userSlice
-Implemented Sign out feature
-Update Profile Api 
-Fetch movies from TMDB Movies
-Bugfix: Sign Up user displayName and profile picture update
-Bugfix: if user is not logged in Redirect /browse to Login page and vice-versa.
-Unsubscribed to the onAuthStateChanged callback
-Add hardcoded values to the constants file(imp).
-Register TMDB API $ create an app & get access token
-Get Data from TMDB now playing movies list API
-Custom Hook for Now Playing movies list API
-Create movieSlice
-Update Store with movies Data
-Planning for MainContainer $ secondary container
-Fetch Data for Trailer Video
-Update Store with Trailer Video Data
-Embedded the Youtube video and made it autoplay and mute 
-Tailwind Classe to make Main Container look awesome
-Build Secondary Component 
-Build Movie List
-Build Movie Card
-TMDB Image CDN URL
-Made the Browse page amazing with Tailwind CSS
-usePopularMovies Custom Hook
-useUpcomingMovies Custom Hook
-useTopRatedMovies Custom Hook



* MainContainer
    -VideoBackground
    -VideoTitle
  SecondaryContainer
    -MovieList * n
       -Cards * n

* Secondary Container
    -MovieList - Popular
        -MovieCards * n
    -MovieList - Now Playing
        -MovieCards * n
    -MovieList - Trending
        -MovieCards * n 
     -MovieList - Horror
        -MovieCards * n

# Features
-Login/Sign Up
    - Sign In / Sign up Form
    -redirect to Browse page
-Browse (after authentication)
    -Header
    -Main Movie
        -Trailer in Background
        -Title & Description
        -Movie Suggessions
            -MovieLists * N
-NetflixGPT
    -Search Bar
    -Movie Suggestions