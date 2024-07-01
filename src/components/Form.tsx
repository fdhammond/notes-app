import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CreatableReactSelect from 'react-select/creatable'
import { Link } from 'react-router-dom';

interface Note {
    title: string;
    body: string;
    id: string;
}

interface FormProps {
    newNote: Note[];
    setNewNote: (notes: Note[]) => void;
    noteId?: string
    title?: string
    body?: string
}

export default function Form({ newNote, setNewNote, noteId, title = '', body = '' }: FormProps) {
    const [newTitle, setNewTitle] = useState<string>('')
    const [newBody, setNewBody] = useState<string>('')
    const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        setNewTitle(title)
        setNewBody(body)
    }, [title, body])

    const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value)
    }

    const handleOnChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewBody(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (noteId) {
            const updateNotes = newNote.map(note => (
                note.id === noteId ? {...note, title: newTitle, body: newBody} : note
            ))

            setNewNote(updateNotes)
            localStorage.setItem("newNote", JSON.stringify(updateNotes))
            setNewTitle('')
            setNewBody('')

        } else {
            const newNoteItem = {
                title: newTitle,
                body: newBody,
                id: uuidv4()
            }

            const updatedNotes = [...newNote, newNoteItem];
            setNewNote(updatedNotes);
            localStorage.setItem("newNote", JSON.stringify(updatedNotes));
        }

        // Reset title and body fields after submission
        setNewTitle('');
        setNewBody('');
        setIsEditing(!isEditing)
    }

    return (
        <>
            {
                !isEditing ? (
                    <form className='text-2xl' onSubmit={handleSubmit}>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-4'>
                        <label>Title</label>
                        <input
                            required
                            type="text"
                            className='border-2'
                            value={newTitle}
                            onChange={handleOnChangeTitle}
                            />
                    </div>
                    <div className='flex flex-col gap-4 w-[200px]'>
                        <label>Tags</label>
                        <CreatableReactSelect
                            isMulti
                            />
                    </div>
                </div>
                <div className='flex flex-col justify-start w-full h-[300px]'>
                    <label>Body</label>
                    <textarea
                        required
                        className='border-2'
                        rows={15}
                        value={newBody}
                        onChange={handleOnChangeBody}
                        />
                </div>
                <div className='flex justify-end gap-4 mt-4'>
                    <button type='submit' className='bg-blue-500 rounded-xl px-6 py-2 text-white'>
                        {noteId ? 'Edit' : 'Add'}
                    </button>
                    <button type='button' className='bg-gray-500 rounded-xl px-6 py-2 text-white'>Cancel</button>
                </div>
            </form>
                ) : (
                    <>
                        <button>
                            <Link to="/">
                                Go Home
                            </Link>
                        </button>
                    </>

                )
            }
        </>
    )
}
