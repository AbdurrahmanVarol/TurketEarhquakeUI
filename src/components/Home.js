import React from 'react'
import TabComponent from './TabComponent'

function Home() {
  return (
    <div className='text-center'>
      <h1 className='text-danger'>Deprem Bilgi Sistemi</h1>
      <TabComponent></TabComponent>
    </div>
  );
}

export default Home