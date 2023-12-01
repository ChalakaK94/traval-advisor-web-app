
import {useMediaQuery} from "@material-ui/core";
import  GoogleMapReact from 'google-map-react'
import useStyle from './styles'

export function Map({setCoordinaties,setBounds, coordinaties}) {
    const classes = useStyle();
    const isMobile = useMediaQuery('{min-width:600px}')

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyAKE7d10sGug7ja4M8y0IL4PAzqFWy36G4'}}
                defaultCenter={coordinaties}
                center={coordinaties}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    setCoordinaties({lat:e.center.lat, lng:e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw})
                }}
                onChildClick={''} />



        </div>
    )
}