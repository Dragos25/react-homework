import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav class="nav">
            <ul class="nav__container">
                <li class="nav__item">
                    <Link to ="/posts">Posts</Link>
                </li>
                <li class="nav__item">
                    <Link to ="/users">Users</Link>
                </li>
                <li class="nav__item">
                    <Link to ="/posts">Posts</Link>
                </li>
                
            </ul>
        </nav>
        <img src = 'https://c7.alamy.com/comp/2J0Y4NK/happy-emoji-emoticon-showing-double-thumbs-up-like-2J0Y4NK.jpg'></img>
    </div>
  );
}

export default App;
