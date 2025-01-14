import { useEffect, useState } from "react"
import { useStore } from "../store/useStore"
import axios from "axios"
import Item from "../item-list/Item"
import "./style.scss"

const api = "https://jsonplaceholder.typicode.com/todos"

const List = () => {

    const [search, setSearch] = useState("")
    const {data, setData, filter} = useStore() 

    const loadData = async () => {
      try {
        const response = await axios.get(api)
        setData(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    const filteredData = data.filter((task)=>{
        if (filter === 'Active') {
          return task.completed === true
        } else if (filter === 'Inactive') {
          return task.completed === false
        } else {
          return true
        }
    })

    useEffect(()=>{
      loadData()
    },[])


  return (
    <div className="main">
      <input 
        className="search-input" 
        value={search} 
        onChange={(e)=> setSearch(e.target.value)} 
        type="text"
        placeholder="Search..." 
      />
      <div className="list">
      {
        filteredData.length === 0 ? 
        <div className="nothing">Nothing to do...</div> :
        filteredData.filter((task)=> task.title?.toLowerCase().includes(search.toLowerCase()))
          .map((el)=>(  
            <Item key={el.id} data={el} />
          ))
      }
      </div>  
    </div>
  )
}

export default List
