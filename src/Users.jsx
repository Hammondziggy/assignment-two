import React, {useState, useEffect} from 'react'
import Pagination from './Paginate'
//import axios from 'axios'

//make an Api call to end point
function Users() { 
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  
  useEffect(() => {
    
    const fetchData = async () => {
      {/*setLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=20");
      setData(res.data);
      setLoading(false);
    }*/}
      const res = await fetch("https://randomuser.me/api/?results=20")
         const {results} = await res.json()
             //console.log(results)
             setData(results);
             //setLoading(false)
    };
    
     fetchData();
  }, []);
  //where it merges
 
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage);
  
  return (
        <div className='container mt-5'>
            <h2> Simple Pagination Example in React </h2>
            <ol>
        {data.map((user,index) => (
              <li key = {index}>
                <img src= {user.picture.thumbnail} alt=""/>
            {user.name.title} {user.name.first} 
            {user.name.last}
               </li>
        ))}
            </ol>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );

 };

export default Users



























