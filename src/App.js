import logo from './logo.svg';
import './App.css';

function App() {
  const isMale = true;
  const me = {
    name: 'Hung',
    age: '24',
  };
  const colorList = ['red', 'blue', 'green'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Xin chao
        </a>
        {isMale ? <p>Nam</p> : <p>Nu</p>}
        {/* {isMale && <p>Name</p>}
        {!isMale && <p>Nu</p>}
        {isMale && (
          <>
            <p>{me.name} </p> <p>{me.age}</p> <p>Name3</p>{' '}
          </>
        )} */}

        <ul>
          {colorList.map((color) => {
            return (
              <li key={color} style={{ color }}>
                {color}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
