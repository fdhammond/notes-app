import { Link } from "react-router-dom";

interface NoteProps {
    title: string;
    body: string;
    noteId: string;
    onDelete: (noteId: string) => void;
}

export default function Note({ title, body, noteId, onDelete }: NoteProps) {
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onDelete(noteId)
    }

    return (
        <div className="flex flex-col justify-center align-middle w-[400px] h-auto px-12 py-12">
            <h2 className="text-4xl font-bold">Note</h2>
            <div className="mt-12">
                <strong>Title:</strong> {title}
            </div>
            <div className="mt-12">
                <strong>Body:</strong> {body}
            </div>
            <div className="mt-12">
                <button className="mr-4 border-2 bg-blue-500 px-4 py-2 rounded-2xl text-white">
                    <Link to={`/${noteId}/edit`}>
                        Edit
                    </Link>
                </button>
                <button className="border-2 bg-red-500 px-4 py-2 rounded-2xl text-white" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}