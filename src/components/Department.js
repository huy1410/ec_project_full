
import { useState,useEffect } from "react";
import axios from "axios"
const Department =()=>{
    useEffect(() => {
		getData();
	}, []);
    const [data , setData]=useState([]);
    const getData = async() => {
        try {
            const res = await axios.get(
       "http://127.0.0.1:8000/api/department"
            );
            console.log(res.data);
            setData(res.data)
    
        } catch (error) {
            console.log(error);
        }
        }; 
    return(
<div>
    <h1>Department</h1>

</div>
    );
        
}
export default Department;