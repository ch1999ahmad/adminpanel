
// import { connect } from 'react-redux';
// import { update_user } from '../actions/authActions';
import { LOGIN, UPDATE ,DELETE } from '../actions/Types';


const initialState = {
    logged: false,   user: {},
}

const authReducer = (state = initialState, action,info) => {
    switch (action.type) {
        case LOGIN:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true,  user: action.user,

                }
            }
            


            
            default:
                return state;
    
        
        case UPDATE:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    
                    type: UPDATE,   info: info
                }
            }
     
        case DELETE:
        {
            return{
            ...state,
            type: DELETE, info: info
         }
        }
    
        }

        
        
    
    
    }
    
 
export default  authReducer
     
    