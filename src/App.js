import './App.css';
import {Header} from "./components/Header/Header";
import {CssBaseline, Grid} from "@material-ui/core";
import {List} from "./components/List/List";
import {Map} from "./components/Map/Map";
import {useEffect, useState} from "react";
import {getPlacesData} from "./api";

function App() {
    const [places, setPlaces] = useState([]);

    const [coordinaties, setCoordinaties] = useState({lat:0 ,lng:0})
    const [bounds, setBounds] = useState({});
    const [childClick, setChildClick] = useState(null)

    const [loading, setLoading] = useState(false)



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
            setCoordinaties({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(() => {
        setLoading(false)
        if (bounds){
            getPlacesData(bounds.sw, bounds.ne)
                .then((data)=>{
                    console.log('places data',data);
                    setPlaces(data)
                    setLoading(false)
                })
        }

    }, [coordinaties, bounds]);

  return (
    <>
      <CssBaseline/>
        <Header/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places} childClick={childClick}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinaties={setCoordinaties}
               setBounds={setBounds}
               coordinaties={coordinaties}
               places={places}
               setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
