
import './App.css';
import Card from './components/Card';
import Testing from './components/Testing';

function App() {

  return (
    <div className="App">
      {/* <Heading>This is Children</Heading> */}
      {/* <Card title="Welcom to the Card Comoponent" content="This is simple string as content" />
      <Card title="This is another Card Comoponent" content={<p style={{ color: 'blue' }}>This is dynamic content!</p>} /> */}
      <Card> <Testing/> </Card>
    </div>
  );
}

export default App;
