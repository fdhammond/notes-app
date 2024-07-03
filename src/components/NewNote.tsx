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
        <div>
            <h1>Create a New Note</h1>
            <Form newNote={newNote} setNewNote={setNewNote} />
        </div>
    );
}