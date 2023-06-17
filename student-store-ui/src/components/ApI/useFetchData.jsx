// import {useEffect, useState} from 'react'
// import axios from 'axios'
// import Home from "../Home/Home"

// const useFetchData = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

    
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const { data: response } = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
//             console.log(response.products)
//             setData(response.products);

//           } catch (error) {
//             console.error("Fetching error: ", error)
//           }
//           //setLoading(false);
//         };
    
//         fetchData();
//       }, []);

//     console.log(data)
    

//     useEffect(() =>{
//       axios.get("https://codepath-store-api.herokuapp.com/store").then((response) =>{
//         setData(response.data.results);
//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//     }, []);
    
//       return {
//           data,
//           setData
//       };   
// };

// export default useFetchData;