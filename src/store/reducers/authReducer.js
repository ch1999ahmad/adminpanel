
// import { connect } from 'react-redux';
// import { update_user } from '../actions/authActions';
import { LOGIN, UPDATE, DELETE,LOGOUT } from '../actions/Types';


const initialState = {
    logged: false, user: {},
}

const authReducer = (state = initialState, action, info) => {
    switch (action.type) {
        case LOGIN:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true, user: action.user,

                }
            }


            case LOGOUT:
                {
                    // console.log(action.coin)
                    return {
                        ...state, logged: false, user: {}
                    }
                }



        // case UPDATE:
        //     {
        //         // console.log(action.coin)
        //         return {
        //             ...state,

        //             type: UPDATE, info: info
        //         }
        //     }

        case DELETE:
            {
                return {
                    ...state,
                    type: DELETE, info: info
                }
            }


            
        default:
            return state;

    }





}


export default authReducer

