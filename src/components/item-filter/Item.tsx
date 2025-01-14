import { useStore } from "../store/useStore"
import "./style.scss"

const Item = () => {
  const {filter, setFilter} = useStore()
  return ( 
    <>
      <div className="item-filter">
        <button onClick={()=> setFilter('All')} className={`${filter === "All" ? "active-filter" : ""}`}>
          All
          </button>
        <button onClick={()=> setFilter('Active')} className={`${filter === "Active" ? "active-filter" : ""}`}>
          Active
          </button>
        <button onClick={()=> setFilter('Inactive')} className={`${filter === "Inactive" ? "active-filter" : ""}`}>
          Inactive
          </button>
      </div>
    </>
  )
}

export default Item
