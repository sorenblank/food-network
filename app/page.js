import PageHeader from './layouts/PageHeader'
import SideBar from './layouts/SideBar'
import ActionBar from './layouts/ActionBar'
import MainBar from './layouts/MainBar'
import Content from './layouts/Content'
import Settings from './layouts/Settings'
import Image from 'next/image'

import './page.css'

function App() {

  return (
    <>
    <div className='flex flex-col max-h-screen'>
      <PageHeader />
      <ActionBar />
      <div className="flex flex-row flex-grow overflow-y-auto scrollbar-hidden ">
          <SideBar />
          <div className="w-full flex flex-row gap-3 overflow-x-hidden px-4 py-3 bg-gray-100 rounded-tl-3xl">
            <div className='max-w-[300px] w-full flex flex-row scrollbar-hidden overflow-y-auto max-md:hidden'>
              <MainBar/>
            </div>
            <div className='rounded-[10px] hiding flex-grow w-full h-full overflow-auto overflow-x-hidden '>
              <Content/> 
            </div>
            <div className='max-w-[250px] w-full max-md:hidden max-lg:hidden'>
              <Settings/>
            </div>
          </div>
        </div>
    </div>
    </>
  )

}

export default App
