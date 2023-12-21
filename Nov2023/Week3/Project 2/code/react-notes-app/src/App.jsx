// lets import necessary hooks and styles
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // lets declare states for new note and all notes array
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // now lets create functions to
  // 1. add new note in notes array
  // 2. delete note from notes array
  // 3. update notes in localstorage

  const addNote = () => {
    // lets first check whether the note has some value or not
    // then only save or add note in notes array
    if (note.trim() !== "") {
      setNotes([...notes, note.trim()]);

      // before this we will have to update notes in local storage also
      // lets call the function to update notes in local storage
      updateStorage([...notes, note.trim()]); // this function will take an array of notes
      // we will complete update Storage notes later

      // lets now clear the note
      setNote("");
    }
  };

  // lets create delete note function
  const deleteNote = (index) => {
    const updatedState = [...notes]; // old notes
    updatedState.splice(index, 1); // removed element present at given index

    // update notes array
    setNotes(updatedState);

    // call function to update local storage
    updateStorage(updatedState);
  };

  // now lets create this function
  const updateStorage = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes)); // here is a catch
    // we cant store notes object inside localstorage
    // we will have to stringify notes object to save or store in local storage
    // for that we will use JSON.stringify() method
    // and inside this we will pass notes object
  };

  // we completed functions to add, delete and update notes
  // now we need a way by which we can update notes array everytime we load our app
  // for this we can use useEffect hook
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || []; // here
    // but here again we will get JSON string by localStorage.getItem("notes");
    // to make it an array object we first have to parse it
    // using JSON.parse() function
    // now we have all stored notes
    // lets now update notes array state
    setNotes([...storedNotes]);

    // if we are using this app first time
    // then there will be no object by "notes" key inside localstorage
    // because of this we will get null or undefined
    // and this will cause issue
    // to solve this
    // we will have to give a default value as empty array
    // in case we are getting undefined
    // and we are done
  }, []);

  // we are almost done with logic part
  // lets now create UI part
  // but before this one thing to note
  // lets now create UI part

  return (
    <div className="App">
      <h1>React Notes App</h1>

      <div>
        <input
          type="text"
          placeholder="Enter your note."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      {notes.length === 0 && <p>No Notes Available</p>}
      <ul>
        {notes.length !== 0 &&
          notes.map((note, index) => (
            <li key={note}>
              {note}
              <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;

// lets see the output now 