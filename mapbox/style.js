
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "GoogleMaps_1": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "western_area_full_2": {
            "type": "geojson",
            "data": json_western_area_full_2
        }
                    ,
        "western_area_points_3": {
            "type": "geojson",
            "data": json_western_area_points_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_GoogleMaps_1_1",
            "type": "raster",
            "source": "GoogleMaps_1"
        },
        {
            "id": "lyr_western_area_full_2_0",
            "type": "fill",
            "source": "western_area_full_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#377eb8'}
        }
,
        {
            "id": "lyr_western_area_points_3_0",
            "type": "circle",
            "source": "western_area_points_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#ffffff', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#000000'}
        }
],
}