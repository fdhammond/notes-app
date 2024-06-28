import { Routes, Route, Navigate } from 'react-router-dom'
import NewNote from './components/NewNote'

function App() {

  return (
    <>
      <div className='my-8 mx-8 text-4xl'>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/:id">
            <Route index element={<h1>Show</h1>} />
            <Route path="edit" element={<h1>Edit</h1>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
