import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";
import LoginPage from "./Page/LoginPage";
import MovieDetail from "./Page/MovieDetail";
import Movies from "./Page/Movies";
import ProfilePage from "./Page/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />}></Route>
          <Route path="/login" exact element={<LoginPage />}></Route>
          <Route path="/profile" exact element={<ProfilePage />}></Route>
          <Route path="/movies" exact element={<Movies />}></Route>
          <Route path="/movies/:id" exact element={<MovieDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
