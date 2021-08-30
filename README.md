# Leaflet Homework: Visualizing Data with Leaflet

## Background

![1-Logo](https://user-images.githubusercontent.com/82990618/131291688-91a64a93-876a-4d4a-a221-d7b36f60bafd.png)

Welcome to the United States Geological Survey, or USGS for short. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. This homework uses exercises from Leaflet to vizualize earthquake data. 

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Analysis

### Level 1: Basic Visualization

![2-BasicMap](https://user-images.githubusercontent.com/82990618/131291774-de3fb731-3f48-4410-9686-e9ee44319c77.png)

Your first task is to visualize an earthquake data set.

1. **Get your data set**

![3-Data](https://user-images.githubusercontent.com/82990618/131291824-83992ad1-7320-4c9b-b894-819b05daee72.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page, the data set for weekly updates was selected for the analysis/ vizualization. The URL of the JSON representation that was obtained was pulled for the vizualization. A topographical map from openstreetmap was used as a tile layer. 
   
![4-JSON](https://user-images.githubusercontent.com/82990618/131291618-63666831-6941-407a-9961-2ba36b49dc4b.png)


2. **Import & Visualize the Data**

   A map was created using Leaflet that plots all of the earthquakes from the selescted data set based on their longitude and latitude.

   * Data markers were created to reflect the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes were made to  appear larger and earthquakes with greater depth should appear darker in color.

   * Popups with additional information about the earthquake were included for when a marker is clicked.

   * A legend was created to provide context to the map data.
- - -	
