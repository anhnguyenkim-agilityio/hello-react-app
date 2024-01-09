import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anh Nguyen</h1>
        <p>Test pull request previews</p>
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/anhnguyenkim-agilityio/hello-react-app">
          <img src="https://oneclick.amplifyapp.com/button.svg" alt="Deploy to Amplify Hosting"/>
        </a>
      </header>
    </div>
  );
}

export default App;
