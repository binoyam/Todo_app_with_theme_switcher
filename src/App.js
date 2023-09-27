import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <form>
          <input type="text" placeholder='Create a new todo' />
        </form>
      </main>
    </div>
  )
}

export default App