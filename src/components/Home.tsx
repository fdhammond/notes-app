import { useState } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

interface Note {
    title: string;
    body: string;
    id: string;
}

interface HomeProps {
    newNote: Note[];
    setNewNote: (notes: Note[]) => void;
}

export default function Home({ newNote, setNewNote }: HomeProps) {
    const [searchNote, setSearchNote] = useState<string>('')
    const handleDeleteNote = (noteId: string) => {
        const updatedNotes = newNote.filter(note => note.id !== noteId);
        setNewNote(updatedNotes);
        localStorage.setItem("newNote", JSON.stringify(updatedNotes));
    };

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchNote(e.target.value)
    }

    const filteredNotes = searchNote
        ? newNote.filter(note => note.body.includes(searchNote) || note.title.includes(searchNote)) : newNote

    const renderNotes = (notes: Note[]) => {
        return notes.map(note => (
           <div key={note.id} className='border-2 gap-4 flex justify-center align-middle border-black mx-4 my-4'>
                <Note title={note.title} body={note.body} noteId={note.id} onDelete={handleDeleteNote} />
            </div>
        ));
    };

    return (
        <div className='flex justify-center align-center w-full h-full'>
            <h1>Home</h1>
            <div className="mt-12 w-full h-full">
                <div className='flex justify-between'>
                    <h2>Notes</h2>
                    <Link to={"/new"}>Create New</Link>
                </div>
                <div className='flex flex-col justify-center mt-4 mb-12 w-[200px]'>
                    <p>Search</p>
                    <input
                        type="text"
                        className='border-2 border-black mt-4'
                        value={searchNote}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full h-full flex flex-wrap'>
                    { renderNotes(filteredNotes) }
                </div>
            </div>
        </div>
    );
}