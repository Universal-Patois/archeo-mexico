# Archeo-Mexico

## Basic Overview of the Project

1. **Map API**: Google Maps API, Mapbox, or Leaflet to display the map of Mexico.

2. **GeoJSON data**: To display the state boundaries of Mexico, you will need GeoJSON data for Mexico that includes state boundaries. You can use a publicly available dataset, such as the one provided by Natural Earth.

3. **Clickable state functionality**: Use the React-Leaflet library to create clickable functionality on the map. This library allows you to add interactive layers to the map that respond to user clicks.

4. **Archaeological sites data**: Obtain data on archaeological sites in Mexico. There are several publicly available datasets you can use, such as the Archaeological Sites in Mexico dataset provided by the National Institute of Anthropology and History.

5. **Pin markers**: To display the location of archaeological sites on the map, add pin markers. Use the Leaflet library to add markers to the map.

6. **Backend API**: To store and access the archaeological sites data set up a backend API. A serverless solution like Firebase or AWS Lambda, or a more traditional server setup.

7. **Database**: Store the archaeological sites data in a database. Use a NoSQL database like MongoDB or a relational database like PostgreSQL.

## MVP

### Iteration 1
* **Map**: Display a map of Mexico with state boundaries.
* **Pin markers**: Display pin markers on the map to indicate the location of archaeological sites.
* **Testing**: Write tests with Jest and Cypress

### Iteration 2
* **Clickable state functionality**: When a user clicks on a state, the map should zoom in to that state and display the archaeological sites in that state.
* **Archaeological sites data**: Display data about each archaeological site in a popup when the user clicks on a pin marker.

### Iteration 3

* **PWA**: Make the application a PWA.
* **Authentication**: Set up authentication to login to the application.

### Iteration 4

* **Backend API**: Set up a backend API to store the archaeological sites data.
* **Database**: Store the archaeological sites data in a database.

### Iteration 5

* **Create User**: Create a user in the database when a user signs up.
* **Login**: Log in a user when they enter their username and password.

## This project will be to practice using
  * Typescript
  * Leaflet
  * Jest
  * Node
  * Express
  * React Context
  * Firebase/passportJS
  * Bootstrap
  * PWA
  * CircleCI
  * Mobile first design
  * Slider
  
## Colors to use

939935 moss green
B4AB61 Ecru
BBC08E Sage
D4D7CB Timber wolf

  ## Features

  ### First Iteration

  * Ability to click state and see sites appear on map as pins
  * Ability to click pin and see site information
  * Ability to toggle all site on map
  <!-- * Ability to show in pin that user has visited site
  * Ability to show in pin that user wants to visit site -->
  <!-- * Ability to filter sites by time period
  * Ability to filter sites by type
  * Ability to filter sites by group of people -->
  <!-- * Show different pin color for time periods, groups of people, and types(pyramids are shaped like pyramids) -->

### Second Iteration

  * Separate page where visited sites are listed
  * Separate page where sites to visit are listed
  * Login page
  * Home page with slider of sites
  * About page
  * Page to show all sites as a list
    * Ability to filter sites by time period
    * Ability to filter sites by type
    * Ability to filter sites by group of people
    * Ability to filter sites by state
    * Ability to filter sites by UNESCO status
  * Ability to add new sites

### Future Additions

  * Add map of Guatemala with archaeological sites and same functionality
  * Add map of Belize with archaeological sites and same functionality
  * Add map of Honduras with archaeological sites and same functionality
  * Add map of El Salvador with archaeological sites and same functionality

  * Add map of Nicaragua with archaeological sites and same functionality
  * Add map of Costa Rica with archaeological sites and same functionality
  * Add map of Panama with archaeological sites and same functionality

  * Add map of Colombia with archaeological sites and same functionality
  * Add map of Ecuador with archaeological sites and same functionality
  * Add map of Peru with archaeological sites and same functionality
  * Add map of Bolivia with archaeological sites and same functionality

  * Filter by country
  * Filter by Civilization
  * Filter by region
  * Filter by continent

