import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicGenerator from './components/MusicGenerator'; // Ensure the import path is correct
import Navbar from './components/Navbar';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-custom">
        <Navbar />
        <Header />
        <ActionButtons />
        <Switch>
          <Route path="/MusicGenerator" component={MusicGenerator} />
          {/* Define other routes here */}
        </Switch>
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
