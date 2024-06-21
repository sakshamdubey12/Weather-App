# Weather App

This Weather App allows users to search for weather details of various cities and manage their favorite cities. The app is built using React and leverages the OpenWeatherMap API to fetch weather data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Hooks](#hooks)
- [Context](#context)

## Features

- Search for weather details by city name
- Display weather forecast
- Add cities to favorites
- Remove cities from favorites
- Persist favorite cities using `localStorage`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sakshamdubey12/Weather.git
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a city name in the search bar and click "Search" to view the weather forecast.

4. Click the heart icon to add a city to your favorites. Click it again to remove the city from your favorites.

## Project Structure

```plaintext
src/
│
├── components/
│   ├── Search.js
│   ├── weather.js
│   ├── pills.js
│
├── context/
│   └── FavouritesContext.js
│
├── hooks/
│   └── useFetch.js
│
├── App.js
├── index.js
└── App.css
```

## Components

### `Search.js`

The main component for searching weather details and managing favorite cities.

### `Weather.js`

Displays the weather details fetched from the API.

### `Pill.js`

A component for displaying favorite cities with an option to remove them.

## Hooks

### `useFetch.js`

A custom hook for fetching weather data from the OpenWeatherMap API.

## Context

### `FavouritesContext.js`

Manages the state of favorite cities using React's Context API.

## API Key

The app requires an API key from OpenWeatherMap. Obtain your API key by signing up on the [OpenWeatherMap website](https://openweathermap.org/).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---