import axios from "axios"

function NotesList({ notes, fetchNotes }) {

const deleteNote=(id)=>{

axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`)
.then(()=>{
fetchNotes()
})

}

return(

<div>

<h2>Notes</h2>

{notes.map((note)=>(

<div key={note.id} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>

<h3>{note.title}</h3>

<p>{note.description}</p>

<p>{note.category}</p>

<button onClick={()=>deleteNote(note.id)}>Delete</button>

</div>

))}

</div>

)

}

export default NotesList