import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Porjetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal from './styles'
import { Container } from './styles'
import light from './themes/light'
import dark from './themes/dark'
import { useState } from 'react'



function App() {

  const [themeDark, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!themeDark);
  }
  
  return (
    <ThemeProvider theme={themeDark ? dark : light}>
      <EstiloGlobal />
      <Container>
      <Sidebar toggleTheme={toggleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
