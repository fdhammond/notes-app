import Form from './Form';

interface Note {
    title: string;
    body: string;
    id: string;
}

interface NewNoteProps {
    newNote: Note[];
    setNewNote: (notes: Note[]) => void;
}

export default function NewNote({ newNote, setNewNote }: NewNoteProps) {
    return (
        <div className='w-full h-full flex flex-col justify-center'>
            <h1 className='text-center mb-40 font-bold font-mono text-6xl mt-12'>Create a New Note</h1>
            <div className='w-2/3 h-full flex justify-center self-center'>
                <Form newNote={newNote} setNewNote={setNewNote} />
            </div>
        </div>
    );
}