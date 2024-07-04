import { useParams } from "react-router-dom"
import Form from "./Form";

interface Note {
    title: string;
    body: string;
    id: string;
}
interface EditNoteProps {
    newNote: Note[];
    setNewNote: (notes: Note[]) => void
}
export default function EditNote({ newNote, setNewNote }: EditNoteProps) {
    const { id } = useParams<{ id: string }>()
    const editNote = newNote.find(note => note.id === id);

    if (!editNote) return <div>Note Not Found</div>;

    return (
        <>
            <div className="flex justify-center w-full h-full">
                <h1>Edit Note</h1>

                <div className="mt-12">
                    <Form
                        title={editNote.title}
                        body={editNote.body}
                        noteId={editNote.id}
                        newNote={newNote}
                        setNewNote={setNewNote}
                    />
                </div>
            </div>
        </>
    )
}