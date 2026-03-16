import { useEffect,useState } from "react"
import axios from "axios"

import AddNote from "./components/AddNote"
import NotesList from "./components/NotesList"

function App(){

const [notes,setNotes]=useState([])

const fetchNotes=()=>{

axios.get("http://127.0.0.1:8000/api/notes/")
.then((res)=>{
setNotes(res.data)
})

}

useEffect(()=>{
fetchNotes()
},[])

return(

<div>

<h1>Notes App</h1>

<AddNote fetchNotes={fetchNotes}/>

<NotesList notes={notes} fetchNotes={fetchNotes}/>

</div>

)

}

export default App