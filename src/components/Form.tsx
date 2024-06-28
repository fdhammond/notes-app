import CreatableReactSelect from 'react-select/creatable'

export default function Form() {

    return (
        <>
            <form className='text-2xl'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-4'>
                        <label>Title</label>
                        <input required type="text" className='border-2 ' />
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
                    <textarea required className='border-2' rows={15} />
                </div>
                <div className='flex justify-end gap-4 mt-4'>
                    <button type='submit' className='bg-blue-500 rounded-xl px-6 py-2 text-white'>Add</button>
                    <button type='button' className='bg-gray-500 rounded-xl px-6 py-2 text-white'>Cancel</button>
                </div>
            </form>
        </>
    )
}