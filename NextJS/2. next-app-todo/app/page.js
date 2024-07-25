"use client"
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const [todoData, setTodoData] = useState([])
  const fetchTodos = async () => {
    const res = await axios.get("/api")
    setTodoData(res.data.todos)
  }
  useEffect(() => {
    fetchTodos()
  }, [])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // api code
      const res = await axios.post("/api", formData)
      toast.success(res.data.msg)
      setFormData({
        title: "",
        description: ""
      })
      await fetchTodos()
    } catch (error) {
      toast.error(error)
    }
  }

  const handleDeleteTodo = async (id) => {
    const res = await axios.delete("/api", {
      params: {
        mongoId: id
      }
    })
    toast.success(res.data.msg)
    await fetchTodos()
  }

  const handleUpdateTodo = async (id) => {
    const res = await axios.put("/api", {}, {
      params: {
        mongoId: id
      }
    })
    toast.success(res.data.msg)
    await fetchTodos()
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full" onChange={handleChange} value={formData.title} />
        <textarea name="description" placeholder="Enter description" className="px-3 py-2 border-2 w-full" onChange={handleChange} value={formData.description}></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[80%] max-w-[900px] mx-auto mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Id
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              todoData.map((el, i) => (
                <Todo key={el._id} title={el.title} description={el.description} completed={el.isCompleted} id={i + 1} deleteTodo={handleDeleteTodo} mongoId={el._id} updateTodo={handleUpdateTodo} />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
