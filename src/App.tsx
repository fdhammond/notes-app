import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewNote from './components/NewNote';
import Home from './components/Home';
import EditNote from './components/EditNote';

interface Note {
    title: string;
    body: string;
    id: string;
}

function App() {
    const [newNote, setNewNote] = useState<Note[]>([]);

    useEffect(() => {
        const savedNotes = localStorage.getItem('newNote');
        if (savedNotes) {
            setNewNote(JSON.parse(savedNotes));
        }
    }, []);

    return (
        <div className='my-8 mx-8 flex justify-center'>
            <Routes>
                <Route path="/" element={<Home newNote={newNote} setNewNote={setNewNote} />} />
                <Route path="/new" element={<NewNote newNote={newNote} setNewNote={setNewNote} />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/:id">
                    <Route index element={<h1>Show</h1>} />
                    <Route path="edit" element={<EditNote newNote={newNote} setNewNote={setNewNote} />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
