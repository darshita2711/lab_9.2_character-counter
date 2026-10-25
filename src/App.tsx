import { useState } from 'react'

import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
       <div>
        <h1>Character-Counter</h1>
         </div>
        <TextInput onTextChange={function (text: string): void {
          throw new Error('Function not implemented.')
        } }
        />
         <StatsDisplay />
         <CharacterCounter />
      </section>
    </>
  )
}

export default App
