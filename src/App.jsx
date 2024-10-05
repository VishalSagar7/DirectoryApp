import { useState } from 'react'
import { Fragment } from 'react'
import AddUserComponent from './Components/AddUserComponent'
import RetriveInformation from './Components/RetriveInformation'


function App() {

  const [showForm, setShowForm] = useState(true);
  const [showretriveInfo, setShowretriveInfo] = useState(false);


  return (
    <div className='w-[100vw]' >

      <div className='navbar bg-sky-600 h-[100px] w-full pt-[30px]'>
        <h1 className='text-3xl font-medium text-white  text-center'>The Directory</h1>
      </div>

      <div className='px-[60px] mt-[10px] h-[60px] flex items-center justify-start gap-[20px]'>
        <button
          onClick={() => {
            setShowForm(prevValue => !prevValue)
            setShowretriveInfo(false)
          }}
          className='h-[40px] w-[120px] bg-sky-600 text-white hover:bg-sky-500 rounded'>Add user</button>
        <button
          onClick={() => {
            setShowretriveInfo(prevValue => !prevValue);
            setShowForm(false)
          }}
          className='h-[40px] w-[120px] bg-sky-600 text-white hover:bg-sky-500 rounded'>Retrive users</button>
      </div>

      <div className='w-full'>

        {showForm && <AddUserComponent />}

        {showretriveInfo && <RetriveInformation/>}

      </div>

    </div>
  )
}

export default App
