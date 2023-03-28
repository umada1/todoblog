import "/Users/ugneadamo/todoblog/src/styling/MemoPreview.scss";
import "/Users/ugneadamo/todoblog/src/fonts/PermanentMarker-Regular.ttf";
import "/Users/ugneadamo/todoblog/src/stock.jpg";

function MemoPreview(props){

    const {name, date, pics, note} = props;

    return (
        <div className="single_memo">

            <img className="title_photo" src={require("/Users/ugneadamo/todoblog/src/stock.jpg")} alt={"Pretty"}/>
            <div className="title_name">{name}</div>
            <div className="memory_note">{note}</div>

        </div>
        
    )
}

export default MemoPreview;