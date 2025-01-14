import axios from "axios"
import { useStore } from "../store/useStore"
import "./style.scss"
import { Todo } from "../type/Todo"

const api = "https://jsonplaceholder.typicode.com/todos"

interface Props {
    data: Todo
}

const Item = ({ data }: Props) => {
    const {deleteData, completedData} = useStore()

    const completed = async (data: Todo) => {
        try {
          await axios.put(`${api}/${data.id}`, {
            id: data.id, 
            completed: !data.completed 
          })
          completedData(data.id) 
        } catch (error) {
          console.error(error)
        }
      } 
    
    const deleteList = async (id: number) => {
        try {
          const deleted = await axios.delete(`${api}/${id}`)
          deleteData(deleted.data.id)
        } catch (error) {
          console.error(error)
        }
      }

  return (
      <div className="main-list">
        <p className={`task ${data.completed ? 'completed' : ''}`}>{data.title}</p>
          <div className="changes">
           <p className={`inactive ${data.completed ? 'active' : ''}`}>{data.completed ? 'Active' : 'Inactive' }</p>
           <input checked={data.completed} onChange={()=> completed(data)} type="checkbox" />
          <button className="btn-delete" onClick={()=> deleteList(data.id)}>Delete</button>
        </div>
      </div>
  )
}

export default Item
