// Create our map, giving it the streetmap and earthquakes layers to display on load.
var myMap = L.map("map", {
    center: [37.09, -122.4194],
    zoom: 5
});

//function createMap(earthquakes) {
//Add a tile layer
    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(myMap)

    // Store our API endpoint as queryUrl.
    var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

    // Perform a GET request to the query URL/
    d3.json(queryUrl).then(function (data) {
        console.log(data)

        var feature = data.features;
        console.log(feature)


        function styleInfo(feature) {
            return {
                opacity: 1,
                fillOpacity: 1,
                fillColor: getColor(feature.properties.mag),
                color: "#000000",
                radius: getRadius(feature.properties.mag),
                stroke: true,
                weight: 0.5
            };
        }
        // set different color from magnitude
        function getColor(magnitude) {
            switch (true) {
                case magnitude > 5:
                    return "#581845";
                case magnitude > 4:
                    return "#900C3F";
                case magnitude > 3:
                    return "#C70039";
                case magnitude > 2:
                    return "#FF5733";
                case magnitude > 1:
                    return "#FFC300";
                default:
                    return "#DAF7A6";
            }
        }
        // set radiuss from magnitude
        function getRadius(magnitude) {
            if (magnitude === 0) {
                return 1;
            }

            return magnitude * 4;
        }
        // GeoJSON layer

        L.geoJson(data, {
            // Maken cricles
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng);
            },
            // cirecle style
            style: styleInfo,


            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h3>Location: ' + (feature.properties.place) + '</h3><hr><p>Date: ' + new Date(feature.properties.time) + '</p><hr><p>Magnitude ' + (feature.properties.mag) + '<p');
            }
        }).addTo(myMap);

        // an object legend
        var legend = L.control({
            position: "bottomleft"

        })
        //});

        //Legend
        legend.onAdd = function (myMap) {
            var div = L.DomUtil.create("div", "info legend");

            var grades = [0, 1, 2, 3, 4, 5];
            var colors = ["#DAF7A6", "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845"];

            // Loop through
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    "<i style='background: " + colors[i] + "'>&nbsp;&nbsp;</i> " +
                    grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
            }

            //div.innerHTML = colors.join('<br>')
            return div;
        };

        // Add legend to the map.
        legend.addTo(myMap);
    });

