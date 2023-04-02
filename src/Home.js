import Out from "./navbars/Out";
import "./general.sass"
import Scene from "./Scene";

function Home() {
    return (  
        <div className="mainwindow">
            <Out/>
            <Scene/>
            Hello! this is where you'll see the initial page
        </div>
    );
}

export default Home;