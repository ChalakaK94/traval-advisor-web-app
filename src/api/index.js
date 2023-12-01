import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async  (sw,ne) =>{
    try{
        const {data: {data}} = await axios.get(URL,  {

            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'b83976f888msh6a7734d7a6ad385p17c140jsnd45fc6910496',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data;

    }catch (e){
        console.log(e)
    }
}