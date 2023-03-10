import { FAIL, SUCCESS } from "../constants/restuarantConstant";

 export const homeReducer =(state={restuarants:[]},action)=>{
console.log(action.type);
switch (action.type) {
    case SUCCESS:
        return{
        restuarants:action.payload
    }
    case FAIL:
        return{
            restuarants:action.payload
        }    
    

    default:
        return state
       
}

}