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
    const { id } = useParams()
    const editNote = newNote.filter(note => note.id === id);

    if (!editNote) return <div>Note Not Found</div>;

    return (
        <>
            <div className="flex justify-center w-full h-full">
                <h1>Edit Note</h1>

                <div className="mt-12">
                    <Form
                        title={editNote[0].title}
                        body={editNote[0].body}
                        noteId={editNote[0].id}
                        newNote={newNote}
                        setNewNote={setNewNote}
                    />
                </div>
            </div>
        </>
    )
}