import In from "./navbars/In";
import MemoPreview from "./MemoPreview";
import "/Users/ugneadamo/todoblog/src/styling/Memories.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull as regularSquare} from "@fortawesome/free-regular-svg-icons";
import { faSquareFull as fullSquare} from "@fortawesome/free-solid-svg-icons";
import { faCircle as regularCircle } from "@fortawesome/free-regular-svg-icons";


function DonesLibrary() {

    const [active, setActive] = useState(0)
    const [selectedPic, setSelectedPic] = useState(0)
    const [pause, setPause] = useState(false);

    const changeSlide = () => {
        if(active === items.length - 1 ){
            return setActive(0)
        }
        return setActive(active+1)
    }

    useEffect(() => {
        // setInterval and clearInterval are used to make the panels shift automatically
        const interval = setInterval(() => {
            if(!pause){
                changeSlide()}
            }
            , 3000 );
        return () => clearInterval(interval)
    });

    // temporary item list

    const items = [
        {name: "Birthday", date: "2022-02-13", note:"Not getting younger, unsurprisingly. Long way to go. Long way to go. Long way to go.", pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg', '/Users/ugneadamo/todoblog/src/heyyyy.jpg', '/Users/ugneadamo/todoblog/src/giiiirl.jpg']},
        {name: "Anniversary", date: "2022-04-11", note:"Can't believe it's been six weeks. Happy anniversary babe", pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg', '/Users/ugneadamo/todoblog/src/stock.jpg']}, 
        {name: "Cats birthday", date: "2022-12-11", note:"Mr Headbutt is 4 years old today. Congrats!", pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg', '/Users/ugneadamo/todoblog/src/stock.jpg']},
        {name: "Boyfriend meets cat", date: "2022-12-11", note:"He's always been a cat lover",  pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg', '/Users/ugneadamo/todoblog/src/stock.jpg', '/Users/ugneadamo/todoblog/src/stock.jpg']},
        {name: "Cat plots boyfriends demise", date: "2022-12-11",note:"The cat really hates him now",  pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg']},
        
    ]

    return (<div className="holder">
        <In/>
        <div className="memory_component">
            <div className = "side_panel">
                <div className="timeline_bar">
                    {items.map((item,i) => 
                    
                    i===active ? 
                    <span className="active_label">
                    <FontAwesomeIcon className="icon" key = {i} icon={fullSquare} /> 
                    <text className="title"> {item.name} </text>
                    </span>
                    : 
                    <FontAwesomeIcon className="icon" key = {i} icon={regularSquare} onClick={() => setActive(i)} />
                        
                )}
                </div>
            </div>
            <div className="memory_carousel">
            {items.map((item,i) =>
            <div className="memory_board" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)} style={{transform: `translateX(-${active * 100}%)`}}>
                <div>
                    {item.pictures.map((pic, p) => p === selectedPic ? 
                    <FontAwesomeIcon className="icon" key = {p+i} id="small" icon={fullSquare} /> 
                    :
                    <FontAwesomeIcon className="icon" key = {p+i} id="small" icon={regularCircle} onClick={() => setSelectedPic(p)} /> 
                    )}
                </div>
                <MemoPreview key={i} id={i} name = {item.name} date = {item.date} pic = {item.pictures[selectedPic]} note = {item.note}/>
            </div>)}
            </div>
        </div>   
        
    </div>);
    // todo: pause on click
    // todo: implement dragging component 
    // todo: zoom in when clicked 
    // 

}

export default DonesLibrary;