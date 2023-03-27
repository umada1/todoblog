import In from "./navbars/In";
import MemoPreview from "./MemoPreview";
import "/Users/ugneadamo/todoblog/src/styling/Memories.scss";
function DonesLibrary() {

    // temporary item list

    const items = [
        {name: "Birthday", date: "2022-02-13", note:"Not getting younger, unsurprisingly", pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg']},
        {name: "Anniversary", date: "2022-04-11", note:"Can't believe it's been six weeks. Happy anniversary babe", pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg']}, 
        {name: "Cats birthday", date: "2022-12-11", note:"Mr Headbutt is 4 years old today. Congrats!", pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg']},
        {name: "Boyfriend meets cat", date: "2022-12-11", note:"He's always been a cat lover",  pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg']},
        {name: "Cat plots boyfriends demise", date: "2022-12-11",note:"The cat really hates him now",  pictures: ['/Users/ugneadamo/todoblog/src/stock.jpg']}]

    return (  <div>
        <In/>
        <div className="memory_carousel">
            <div className="memory_board">
            {items.map((item,i) => <MemoPreview id={i} name = {item.name} date = {item.date} pics = {item.pictures}/>)}
        </div>
        </div>
        
    </div>);
}

export default DonesLibrary;