import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Music } from "./components/Music/Music";
import { Navbar } from './components/Navbar/Navbar';
import { News } from "./components/News/News";
import { Profile } from './components/Profile/Profile';
import { Setting } from "./components/Setting/Setting";

function App(props) {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />



        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch = {props.dispatch} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
