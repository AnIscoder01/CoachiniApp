import { GET_USERSLIST,FAIL} from "../types/authTypes"
import axios from 'axios'

export const get_userslist=()=>async (dispatch)=>{
    try {
        const res = await axios.get('/api/auth/userslist')
        dispatch(
           {
            type:GET_USERSLIST,
            payload:res.data,
           }
        )
    } catch (error) {
        dispatch(
            {
                type:FAIL
            }
        )
        
    }}