import './App.css';
import {TallCardCollection} from "./ui-components";

function App() {
  return (
    <div className="App">
        <TallCardCollection isPaginated itemsPerPage={3}/>
    </div>
  );
}

export default App;
