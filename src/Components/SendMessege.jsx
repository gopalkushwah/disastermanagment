import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const Weather_Api_key = `9a755037c013e61e53226141f262beae`;

const SendMessege = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    }, [latitude, longitude]);
    let Weather_Api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Weather_Api_key}`;

    axios.get(Weather_Api).then((res) => {
        setCity(res.data.name);
    })
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div className='loading-div flex-align'>Loading...</div>
    return (
        <>
            <div className="send-messege-container flex-align">
                <div className='flex-align send-messege-div' s>
                    <span>Your Latitude : {latitude}</span>
                    <span>Your Longitude : {longitude}</span>
                    <span>Your City : {city}</span>
                    <button onClick={() => alert("Messege Sent to Saviers...")}>Send Messege to Saviers</button>
                </div>
                <GoogleMap
                    zoom={14}
                    center={{
                        lat: latitude,
                        lng: longitude
                    }}
                    mapContainerStyle={{
                        width: "50%",
                        height: "400px",
                        margin: "2rem 4rem"
                    }}

                >
                    <Marker
                        position={{
                            lat: latitude,
                            lng: longitude
                        }}

                    />
                </GoogleMap>
            </div>
        </>
    )
}


export default SendMessege