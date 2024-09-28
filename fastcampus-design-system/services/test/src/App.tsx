import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import { vars } from '@fastcampus/themes'

function App() {
  const theme = {
    colors: vars.colors.$static.light
  }
  return (
      <View />
  )
}

export default App;

const View = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
          Font Color is ${vars.colors.$static.light.red[500]}
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Text = styled.p`
  color: ${vars.colors.$static.light.red[500]}
`

