import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '300px',
};


function MyComponent({locations}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBektsjMOXQFB5GrDW3RwDkOiG8LeTaIds',
    })

    const center = locations && locations.length > 0 ? locations[0] : { lat: 0, lng: 0 };

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds();
        locations.forEach((point) => {
            bounds.extend(new window.google.maps.LatLng(point.lat, point.lng));
        });
        map.fitBounds(bounds); // Adjust the map to fit all markers
        setMap(map);
    }, [locations])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            className="map-container"
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                streetViewControl: false,
                mapTypeControl: false
            }}
        >

        {
                locations.map((point, i) => (
                    <MarkerF position={point}></MarkerF>
                ))
            }
            <></>
        </GoogleMap>
    ) : (
        <></>
    )
}

export default React.memo(MyComponent)