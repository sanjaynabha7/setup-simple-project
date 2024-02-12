import logo from './logo.svg';
import './App.css';
import RootNavigator from './navigators/root.navigator';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <RootNavigator />
    </Router>
  );
}

export default App;
