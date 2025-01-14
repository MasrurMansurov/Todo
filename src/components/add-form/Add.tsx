import { useState } from "react"
import { useStore } from "../store/useStore"
import "./style.scss"
import axios from "axios"

const api = "https://jsonplaceholder.typicode.com/todos"

const Add = () => {

    const [value, setValue] = useState("")
    const {postData} = useStore()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!value.trim().length) {
          return false
        }
        try {
          const newTodo = await axios.post(api, { title: value })
          postData(newTodo.data.title)
        } 
        catch (error) {
          console.error(error)
        }
         
        setValue("") 
    }

  return (
    <div className="add-task">
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" value={value} onChange={(e)=> setValue(e.target.value)} type="text" placeholder="Enter a new task" />
        <button className="button" type="submit">+ Add</button>
      </form>
    </div>
  )
}

export default Add
