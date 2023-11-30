
import {useMediaQuery} from "@material-ui/core";
import  GoogleMapReact from 'google-map-react'
import useStyle from './styles'

export function Map() {
    const classes = useStyle();
    const isMobile = useMediaQuery('{min-width:600px}')

    const cordi = {lat:0, lng:0}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyAKE7d10sGug7ja4M8y0IL4PAzqFWy36G4'}}
                defaultCenter={cordi}
                center={cordi}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''} />



        </div>
    )
}