import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';


function InlineMap({...props}) {

  const options = { closeBoxURL: '', enableEventPropagation: true };

    return (
        <div>
          <GoogleMap
              defaultZoom={7}
              defaultCenter={{ lat: 12, lng: 108 }}  
            >
              <Marker
              icon={{
                url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              position={props.dataMarker?.coor}
          >
            <InfoBox
              options={options}
            >
              <>
                <div style={{ backgroundColor: 'green', color: 'white', borderRadius:'1em', padding: '0.2em' }}>
                  {props.dataInfo ? <span>{props.dataInfo?.name}, {props.dataInfo.province}, {props.dataInfo.country}</span> : <span>{props.dataMarker?.name}</span>}
                </div>
              </>
            </InfoBox>  
          </Marker>
          </GoogleMap>
        </div>
      );
}

export default withScriptjs(withGoogleMap(InlineMap));