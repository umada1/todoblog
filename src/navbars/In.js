import { BrowserRouter ,Routes, Route, Link} from "react-router-dom";
import Home from "../Home";
import ToDoLibrary from "../ToDoLibrary";
import Memories from "../Memories";
import "/Users/ugneadamo/todoblog/src/styling/navigation.scss";


function In() {
    return ( 
        <header className="nav">
        <nav className="navelements">
            <Link id="logout" className="linkbutton" to="/">Log out</Link>
            <Link id="memories" className="linkbutton" to="/memories">Memories</Link>
            <Link id="todos" className="linkbutton" to="/todos">To do library</Link>
        </nav>
        
    </header>
    );
}

export default In;