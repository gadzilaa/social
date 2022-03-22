import './App.css';

function App() {
  return (

    <div>
      <Header />
      <Technologie />
      asad
    </div>

  );
}


const Technologie = () => {
  return(
    <div>
    <ul>
      <li>html</li>
      <li>css</li>
      <li>js</li>
    </ul>
  </div> 
  )
  


}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>News Feed</a>
      <a>Messages</a>
    </div>
  )
}




export default App;
