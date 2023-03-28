import "/Users/ugneadamo/todoblog/src/styling/MemoPreview.scss";
import "/Users/ugneadamo/todoblog/src/fonts/PermanentMarker-Regular.ttf";
import "/Users/ugneadamo/todoblog/src/stock.jpg";

function MemoPreview(props){

    const {name, date, pic, note} = props;

    return (
        <div className="single_memo">
            <div className="photo_holder">
                <img className="title_photo" src={require("/Users/ugneadamo/todoblog/src/stock.jpg")} alt={"Pretty"}/>
                <div className="title_details">{name} {pic}</div>
                <div className="title_details">{date}</div>
            </div>
            <div className="memory_note">{note}</div>
        </div>
        
    )
}

export default MemoPreview;