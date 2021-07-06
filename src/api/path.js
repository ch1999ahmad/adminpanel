// import { deleteitem } from "../store/actions/authActions"

let BASE_URL = 'https://cashandcarryapp.herokuapp.com/'
// let localhost = 'http:///192.168.100.25:3000/'

export default {
    login: BASE_URL + 'login',
    register: BASE_URL + 'register',
    update: BASE_URL + 'update/',
    getuser: BASE_URL + 'users',
    itemsadd: BASE_URL +'items/add',
    getitem: BASE_URL + 'items',
    categoriesadd: BASE_URL + 'categories/add',
    deletecat: BASE_URL + 'categories/delete',
    getcategories: BASE_URL + 'categories',
    deleteitem: BASE_URL + 'items/delete',
    getorders: BASE_URL + 'orders'
}