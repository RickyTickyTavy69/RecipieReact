import './App.css'
import Title from "../shared/common/Title/Title.tsx";

import Recipe from "../entities/Recepies/ui/Recepie.tsx";

function App() {


  return (
    <>
      <div className={'text-red-300'}>
          <Title>
              Random Recipes for you!
          </Title>
          <Recipe/>
      </div>
    </>
  )
}

export default App
