import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useCities } from '../contexts/CitiesContext';
import { useGeolocation} from '../hooks/useGeolocation';

const Map = () => {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([30,0])
  const [searchParams] = useSearchParams();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation()
  
  const mapLat = searchParams.get("lat") || 30;
  const mapLng = searchParams.get("lng") || 0;

  useEffect(()=> {
   if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng])

  return (
    <div className={styles.mapContainer} onClick={()=> navigate('form')}>
    <MapContainer
    className={styles.map}
       center={mapPosition} 
       zoom={6} 
       scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
      <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
        <Popup>
          <span>{city.cityName}</span>
        </Popup>
      </Marker>))}
      <ChangeCenterMap position={mapPosition} />
      <FetchMyClick/>
    </MapContainer>
    </div>
  )
}

export default Map

function ChangeCenterMap({position}) {
  const map = useMap()
  map.setView(position)
  return null
}

function FetchMyClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => 
    navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
}
