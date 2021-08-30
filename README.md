# Leaflet Homework: Visualizing Data with Leaflet

## Background

https://wustl.bootcampcontent.com/wustl-bootcamp/wustl-stl-virt-data-pt-05-2021-u-c/-/raw/master/02-Homework/15-Mapping-Web/Instructions/Images/1-Logo.png

Welcome to the United States Geological Survey, or USGS for short. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. This homework uses exercises from Leaflet to vizualize earthquake data. 

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Analysis

### Level 1: Basic Visualization

https://wustl.bootcampcontent.com/wustl-bootcamp/wustl-stl-virt-data-pt-05-2021-u-c/-/raw/master/02-Homework/15-Mapping-Web/Instructions/Images/2-BasicMap.png
![2-BasicMap](Images/2-BasicMap.png)

Your first task is to visualize an earthquake data set.

1. **Get your data set**

   https://earthquake.usgs.gov/earthquakes/feed/
   https://wustl.bootcampcontent.com/wustl-bootcamp/wustl-stl-virt-data-pt-05-2021-u-c/-/raw/master/02-Homework/15-Mapping-Web/Instructions/Images/3-Data.png
   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page, the data set for weekly updates was selected for the analysis/ vizualization. The URL of the JSON representation that was obtained was pulled for the vizualization. A topographical map from openstreetmap was used as a tile layer. 
   
   https://wustl.bootcampcontent.com/wustl-bootcamp/wustl-stl-virt-data-pt-05-2021-u-c/-/raw/master/02-Homework/15-Mapping-Web/Instructions/Images/4-JSON.png
   ![4-JSON](Images/4-JSON.png)

2. **Import & Visualize the Data**

   A map was created using Leaflet that plots all of the earthquakes from the selescted data set based on their longitude and latitude.

   * Data markers were created to reflect the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes were made to  appear larger and earthquakes with greater depth should appear darker in color.

   * Popups with additional information about the earthquake were included for when a marker is clicked.

   * A legend was created to provide context to the map data.
- - -	
