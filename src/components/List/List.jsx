import useStyle from './styles'
import {FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {createRef, useEffect, useState} from "react";
import {PlaceDetails} from "../PlaceDetails/PlaceDetails";
export function List({places,childClick}) {
    const classes = useStyle();
    const [type,setType] = useState('restaurants');
    const [rating,setRating] = useState('');

    const [elRefs, setElRefs] = useState([])
    useEffect(() => {
        const refs= Array(places?.length).fill().map((_,i)=>elRefs[i] || createRef());
        setElRefs(refs);

    }, [places]);
    return (
        <div className={classes.container}>
            <Typography variant='h4'> Restaurants, Hotels and Other Places Around you</Typography>
            <FormControl className={classes.formcontrol}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>

                </Select>
            </FormControl>

            <FormControl className={classes.formcontrol}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={5}>Above 5.0</MenuItem>

                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                    <Grid item key={i} xs={12} >
                        <PlaceDetails place={place} selected={Number(childClick) === i} refProp={elRefs[i]}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}