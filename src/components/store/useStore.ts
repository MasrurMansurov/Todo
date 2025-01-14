import { create } from 'zustand'
import { Todo } from '../type/Todo'

type Filter = 'All' | 'Active' | 'Inactive'

interface IStore {
    data: Todo[],
    setData: (data: Todo[]) => void,
    deleteData: (id: number) => void,
    completedData: (id: number) => void,    
    postData: (title: string) => void,
    filter: Filter,
    setFilter: (filter: Filter) => void
}


export const useStore = create<IStore>((set) => ({
    
    data: [],
    setData: (data) => {
        set({ data })
    },

    deleteData: (id) => {
        set((state) => {
            const updatedData = state.data.filter((todo) => todo.id !== id)
            return { data: updatedData } 
        })
    },

    
    postData: (title) => {
        set((state) => {
            const newTodo: Todo = {
                id: state.data.length + 1,
                title,
                userId: Math.floor(Math.random() * 10) + 1,
                completed: false
            }
            const updatedData = [...state.data, newTodo]
            return { data:  updatedData }
        })
    },
    

    completedData: (id) => {
       set((state)=> {
        const idx = state.data.findIndex(item => item.id === id)
        const findItem = state.data[idx]
        findItem.completed = !findItem.completed
        return {
            data: [
                ...state.data.slice(0, idx),
                findItem,
                ...state.data.slice(idx + 1)
            ]
        }
       })
    },
    
    filter: 'All',
    setFilter: (filter) => set({ filter }),

}))

