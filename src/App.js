import './App.css';
import Header from './Header';
import Counter from './Counter';
import ArtWall from './ArtWall';

function App() {
  console.log("app has rendered")
  return (
    <div className="App">
      <Header />

      <Counter />

      <ArtWall />
    </div>
  );
}

export default App;
