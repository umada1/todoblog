import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import ToDoLibrary from "./ToDoLibrary";
function Login() {

    return ( 
        <div>

        <nav>
            <Link to="/todos">Log in after filling a form!</Link>
        </nav>

        </div> 
    )
}

export default Login;