import api from '../../api/api';
import { login,  } from '../actions/authActions'
// import { set_loading,  } from '../actions/globalActions' 
import path from '../../api/path';

export const _login = (param) => {

    return async (dispatch, getState) => {
        // dispatch(set_loading(true))





        let response = await api(path.login, "POST", param)

        console.log(response)
        // console.log(response)

        if (response.success == true) {
           
            dispatch(login(response.result))
            return response
        }
        else {
            // response.success == "false"
            alert(response.success)




        }


        // dispatch(set_loading(false));
        // return false
    }
}
export const _updateuser = (param, _id) => {

    return async (mapDispatch, getState) => {

      console.log(_id)
        let response = await api(path.update +   _id, "PATCH", param);
        console.log(response)
        // dispatch(set_loading(false));
        // if (response.success == true) {

        //     dispatch(updateuser(response.result))
        //     return true
        // }
        // else{
        //     alert(response.success)
        // }
    }
}

export const _deleteitem = (param, _id) => {
        return async (mapDispatch, getState) =>{
        console.log(_id)
        let response = await api(path.delete +  _id, "DELETE", param)
        console.log(response)
    }
}
