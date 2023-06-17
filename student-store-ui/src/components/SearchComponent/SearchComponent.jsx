// import React from 'react'
// import { useState } from "react";
// import ProductCard from '../ProductCard/ProductCard';


// const SearchComponent = (props) => {
// console.log("search")
// console.log(props.products)
// // console.log(setProducts())
// const [searchTerm, setSearchTerm] = useState("");
// const [filteredData, setFilteredData] = useState(data);

// const handleSearch = (event) =>{
//     event.preventDefault();
//     setSearchTerm(event.target.value);

// console.log(event.target.value)
//     setFilteredData(
//         products.filter((item) =>
//             item.name.toLowerCase().includes(event.target.value.toLowerCase())
//         )
//     )
//     console.log(filteredData)

// }

// return (
//     <div>
//         searchTerm =  {searchTerm}
//         <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearch}
//         placeholder="Enter search....."
//         />
//         {filteredData.map((item) =>(
//             <ProductCard
//             name={item.name}
//             id={item.id}
//             image={item.image}
//             price={item.price}
//             key={item.id}
//           />
//         ))}
//     </div>
//     );
// };
// export default SearchComponent;