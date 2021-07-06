import {  SET_USERS, SET_ITEMS, SET_CATEGORIES, SET_ORDERS } from '../actions/Types'

const initialState = {
    categories: [], items: [], 
    favourites: [], users: [], 
    orders: [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

       
        
        // case SET_FAVOURITE: {
        //     return {
        //         ...state,
        //         favourites: action.payload,
        //     }
        // }
        // case SET_FEATURED: {
        //     return {
        //         ...state,
        //         featured: action.payload,
        //     }
        // }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        case SET_ITEMS: {
            return {
                ...state,
                items: action.payload,
            }
        }
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload,
            }
        }
        
        // case SET_COUPON: {
        //     return {
        //         ...state,
        //         coupons: action.payload,
        //     }
        // }
        case SET_ORDERS: {
            return {
                ...state,
                orders: action.payload,
            }
        }
        // case SET_TRANSACTIONS: {
        //     return {
        //         ...state,
        //         transactions: action.payload,
        //     }
        // }

        default:
            return state;

    }

}
export default appReducer