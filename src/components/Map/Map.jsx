import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import  GoogleMapReact from 'google-map-react'
import useStyle from './styles'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab/Rating";

export function Map({setCoordinaties,setBounds, coordinaties,places,setChildClick}) {
    const classes = useStyle();
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyAKE7d10sGug7ja4M8y0IL4PAzqFWy36G4'}}
                defaultCenter={coordinaties}
                center={coordinaties}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinaties({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child)=>setChildClick(child)}
            >
                {places?.map((place,i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!isDesktop
                            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}

                                          />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )}



                    </div>
                ))}

            </GoogleMapReact>
            {/*<GoogleMapReact*/}
            {/*    bootstrapURLKeys={{key:'AIzaSyAKE7d10sGug7ja4M8y0IL4PAzqFWy36G4'}}*/}
            {/*    defaultCenter={coordinaties}*/}
            {/*    center={coordinaties}*/}
            {/*    defaultZoom={14}*/}
            {/*    margin={[50,50,50,50]}*/}
            {/*    options={''}*/}
            {/*    onChange={(e)=>{*/}
            {/*        setCoordinaties({lat:e.center.lat, lng:e.center.lng});*/}
            {/*        setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw})*/}
            {/*    }}*/}
            {/*    onChildClick={''} >*/}
            {/*    {places?.map((place,i)=>(*/}
            {/*        <div className={classes.markerContainer}*/}
            {/*              lat={Number(place.latitude)}*/}
            {/*               lng={Number(place.longitude)}*/}
            {/*                key={i}*/}
            {/*        >*/}
            {/*            {!isDesktop*/}
            {/*                ? <LocationOnOutlinedIcon color="primary" fontSize="large" />*/}
            {/*                : (*/}
            {/*                    <Paper elevation={3} className={classes.paper}>*/}
            {/*                        <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>*/}
            {/*                        <img*/}
            {/*                            className={classes.pointer}*/}
            {/*                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}*/}
            {/*                        />*/}
            {/*                        <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />*/}
            {/*                    </Paper>*/}
            {/*                )}*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</GoogleMapReact>*/}



        </div>
    )
}