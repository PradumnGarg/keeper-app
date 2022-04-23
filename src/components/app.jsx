import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {

   const [notes,setnotes]=React.useState([]);

function addNote(newnote){

setnotes(prevvalue=>{
   return [...prevvalue,newnote]
});
}

function deleteNote(id1){


   setnotes(prevnotes=>{
     return prevnotes.filter((itemnote,index)=>{
         return index!==id1;
      })
   });
   
}


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
     
     { notes.map((noteItem,index) => {

        return  <Note key={index}  id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })
   }
    
      <Footer />
    </div>
  );
}

export default App;
