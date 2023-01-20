import logo from './logo.svg';
import './App.css';
import Pages from './imad_cc/imad_cc/Pages'
import Father from './imad_cc/imad_cc/Father';

function App() {
  return (
    <div className="todo-app">
      <Father>
        <Pages/>
      </Father>

    </div>
  );
}

export default App;
