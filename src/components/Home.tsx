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

export default function Home({ newNote }: HomeProps) {
    return (
        <div className='flex justify-center align-center w-full h-full'>
            <h1>Home</h1>
            <div className="mt-12 w-full h-full">
                <div className='flex justify-between'>
                    <h2>Notes</h2>
                    <Link to={"/new"}>Create New</Link>
                </div>
                <div className='w-full h-full flex flex-wrap'>
                    {newNote.map(note => (
                        <div key={note.id} className='border-2 gap-4 flex justify-center align-middle border-black mx-4 my-4'>
                            <Note title={note.title} body={note.body} noteId={note.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}