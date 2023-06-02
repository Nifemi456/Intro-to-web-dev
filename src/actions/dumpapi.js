// import axios from "axios";

// export const fetchApi= async()=>{
//     try{
//         const responses = await axios.get('https://reqres.in/api/unknown');
//     return responses.data;
//     }
//     catch(err){
//         return [];
//     }
    
// }



import axios from 'axios'

const dumpapi = {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://jsonplaceholder.typicode.com/users',
    })
};

export default dumpapi;