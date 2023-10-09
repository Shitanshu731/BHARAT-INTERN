"use client"
import { useState } from 'react'
import './globals.css'
import React from 'react'


const page = () => {
  const [title, settitle] = useState("");
  const [img, setimg] = useState("");
  const [desc, setdesc] = useState("");
  const [Tasks,setTasks]  = useState([]);
  let renderTask = <h1 className = "font-bold">No Blogs Available</h1>
    const submithandler = (e) =>{
      e.preventDefault();
      setTasks([...Tasks,{title,desc,img}]);
      console.log(Tasks);
      settitle("");
      setdesc("");
      setimg("");

    }
    const deletehandler =(e)=>{
      let copyTask  = [...Tasks];
      copyTask.splice(e,1);
      setTasks(copyTask);

    }
if(Tasks.length>0){
  renderTask = Tasks.map((t,i) =>{
    return (
    <div key={i} className = 'flex justify-between h-40 gap-10'>
      <img className = "h-40 w-5/6 absolute -z-50  outline-double outline-8 " src = {t.img}/>
      <div className="flex-col">
      <h1 className =' text-black w-1/3  text-xl text-start mb-2 '>{t.title}</h1>
      <h1 className ='  text-black  text-xl w-1/3 text-start mb-2 '>{t.desc}</h1></div>
      <button onClick= {()=>{
        deletehandler(i);
      }} className = 'bg-red-500 rounded-lg mt-14 text-lg h-12 w-20 hover:bg-red-700 hover:scale-110 transition-all'>Remove</button>
    </div>
    )
  })
}
  return (
    <div>
      <h1 className = 'text-black font-extrabold bg-slate-500 text-center p-5 text-3xl '>BLOG</h1>
      <form onSubmit={submithandler}  className = "items-center">
        
        <input type ='text' placeholder = 'Enter the title' className = 'm-10 w-50 h-10 outline rounded-lg p-4 ml-28' value = {title} onChange = {(e) =>{settitle(e.target.value)}}/>
        <input type ='text' placeholder = 'Enter the image url' className = 'm-10 w-50 h-10 outline rounded-lg p-4 ml-40' value = {img} onChange = {(e) =>{setimg(e.target.value)}}/>
        <input type ='text' placeholder = 'Enter the description' className = 'm-10 w-50 h-10 outline rounded-lg p-4  ml-40' value = {desc} onChange = {(e) =>{setdesc(e.target.value)}}/>
        <button type = 'submit' className = 'bg-black ml-24 p-5 text-white rounded-lg hover:bg-slate-700 hover:scale-110 transition-all'>Add Blog</button>
      </form>
      <div className = 'p-5 h-11 items-center text-center'>
        <ul>
       {renderTask}
       </ul>
      </div>
    </div>

  )
}

export default page
