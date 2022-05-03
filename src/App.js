import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
function App() {

  const [isSelect, setIsSelect] = useState(true);

  const updateSelect = () => {
    console.log("click");
    setIsSelect(false);
  }

  // get characters
  const characters = ["Alex", "Alfred", "Anita", "Anne", "Bernard", "Bill", "Charles", "Claire", "David", "Eric", "Frans", "George", "Herman", "Joe", "Maria", "Max", "Paul", "Peter", "Philip", "Richard", "Robert", "Sam", "Susan", "Tom"];

  return (
    <div className="App">
      <div className="container">
        {characters.map(c => {
          return <Card key={c} name={c} isSelect={isSelect} updateSelect={updateSelect} />
        })}
      </div>
    </div>
  );
}

export default App;
