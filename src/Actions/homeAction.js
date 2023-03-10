import axios from "axios";
import { SUCCESS,FAIL } from "../constants/restuarantConstant";
export const RestuarantList = ()=> async(dispatch) =>{
   try {
        const {data} =await axios.get('/restaurants.json')
    console.log(data.restaurants);
    dispatch({
        payload: data.restaurants, type:SUCCESS
    })
    }
    catch (error){
        dispatch({
            payload:error, type:FAIL
        })
    }
}