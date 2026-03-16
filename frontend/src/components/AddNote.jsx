import { useState } from "react"
import axios from "axios"

function AddNote({ fetchNotes }) {

const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [category,setCategory]=useState("")

const handleSubmit=(e)=>{
e.preventDefault()

axios.post("http://127.0.0.1:8000/api/create/",{
title,
description,
category
}).then(()=>{
setTitle("")
setDescription("")
setCategory("")
fetchNotes()
})
}

return(

<div>

<h2>Add Note</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/>

<input
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<br/>

<input
placeholder="Category"
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<br/>

<button type="submit">Add</button>

</form>

</div>

)

}

export default AddNote