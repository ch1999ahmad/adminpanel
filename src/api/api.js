import path from "./path";



export default function api(path, method, params) {
    let options;
 

    options = {
        headers: {

            'Content-Type': 'application/json',

        },
        method: method,  
    };
    if(params){
        options.body=JSON.stringify(params)
    }

    return fetch(path, options)
        .then(resp => resp.json())
        .then(json => {

            return json
        })
        .catch(error => {

            alert('Network error. Please make sure you are connected to internet.')
            console.log(error.message)

        });
}
const getUsers = async () => {

    let getData = [];
    let h = new Headers();
    // h.append('Authorization', token)

    let req = new Request(path.user, { method: 'GET'})

    await fetch(req)
        .then(res => res.json())
        .then((dat) => { getData = dat; })
        .catch(err => { alert(err.message); getData = false })

    // console.log('get user->', getData)
    // if (getData?.success === 'false' || getData?.success === 'Auth failed') {
    //     alert(getData.message + getData?.reason); getData = false
    // }
    return getData
}
