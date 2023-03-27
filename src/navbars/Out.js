import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../Login";
import "/Users/ugneadamo/todoblog/src/styling/navigation.scss";

function Out() {
    return (  
        <header className="nav">
        <nav className="navelements">
            <Link className="linkbutton" to="/login">Log in</Link>
        </nav>
       </header>);
}

export default Out;