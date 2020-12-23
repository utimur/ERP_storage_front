import styled from 'styled-components'
import NavBar from './NavBar'
import AppRouter from './AppRouter'

const App = ({ className }) => (
  <div className={className}>
    <NavBar />
    <AppRouter />
  </div>
)

export default styled(App)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background: #f1f1f1;
`
