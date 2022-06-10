import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';


function InlineMap({...props}) {

  const options = { closeBoxURL: '', enableEventPropagation: true };

    return (
        <div>
          <GoogleMap
              defaultZoom={7}
              defaultCenter={{ lat: 7, lng: 105 }}
            >
              <Marker
              icon={{
                url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              position={props.dataMarker.coor}
          >
            <InfoBox
              options={options}
            >
              <>
                <div style={{ backgroundColor: 'green', color: 'white', borderRadius:'1em', padding: '0.2em' }}>
                  {props.dataMarker.name}
                </div>
              </>
            </InfoBox>  
          </Marker>
          </GoogleMap>
        </div>
      );
}

export default withScriptjs(withGoogleMap(InlineMap));