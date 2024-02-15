import React, { useEffect, useRef } from 'react'
import * as maptilersdk from '@maptiler/sdk';

const Map = (props) => {

  useEffect(() => {
    maptilersdk.config.apiKey = '6MMEINkpsnU9W6ntASWR';
  if (props.refs.current) {
    const map = new maptilersdk.Map({
      container: props.refs.current, // container's id or the HTML element to render the map
      style: maptilersdk.MapStyle.STREETS,
      center: [ 49.4044902778, -18.1524419444], // starting position [lng, lat]
      zoom: 16, // starting zoom
    });
  }
  }, [])
  
  return (
    <div ref={props.refs} className={`${props.true ? 'absolute w-1/2 bottom-0 top-0' : 'map-sm'}`}>Map</div>
  )
}

export default Map