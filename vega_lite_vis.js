var chart1 = "js/chart1_dot_map.vg.json";
vegaEmbed("#chart1", chart1).then(function(result) {
    // chart 1 - BioBlitz dot map
}).catch(console.error);

var chart2 = "js/chart2_top_species.vg.json";
vegaEmbed("#chart2", chart2).then(function(result) {
    // chart 2 - Top 10 species bar chart
}).catch(console.error);

var chart3 = "js/chart3_donut.vg.json";
vegaEmbed("#chart3", chart3).then(function(result) {
    // chart 3 - Taxa donut chart
}).catch(console.error);

var chart4 = "js/chart4_area_time.vg.json";
vegaEmbed("#chart4", chart4).then(function(result) {
    // chart 4 - Sightings over time area chart
}).catch(console.error);

var chart5 = "js/chart5_heatmap.vg.json";
vegaEmbed("#chart5", chart5).then(function(result) {
    // chart 5 - Taxa x Reporting method heatmap
}).catch(console.error);

var chart6 = "js/chart6_act_map.vg.json";
vegaEmbed("#chart6", chart6).then(function(result) {
    // chart 6 - ACT incidents point map
}).catch(console.error);

var chart7 = "js/chart7_incidents_bar.vg.json";
vegaEmbed("#chart7", chart7).then(function(result) {
    // chart 7 - Incidents by species bar chart
}).catch(console.error);

var chart8 = "js/chart8_incidents_line.vg.json";
vegaEmbed("#chart8", chart8).then(function(result) {
    // chart 8 - Incidents over time line chart
}).catch(console.error);

var chart9 = "js/chart9_grouped_bar.vg.json";
vegaEmbed("#chart9", chart9).then(function(result) {
    // chart 9 - Melbourne vs Canberra grouped bar
}).catch(console.error);

var chart10 = "js/chart10_choropleth.vg.json";
vegaEmbed("#chart10", chart10).then(function(result) {
    // chart 10 - Biodiversity choropleth map
}).catch(console.error);