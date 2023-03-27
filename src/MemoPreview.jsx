import "/Users/ugneadamo/todoblog/src/styling/MemoPreview.scss";
import "/Users/ugneadamo/todoblog/src/fonts/PermanentMarker-Regular.ttf";
import "/Users/ugneadamo/todoblog/src/stock.jpg";

function MemoPreview(props){

    const {name, date, pics} = props;

    return (
        <div className="single_memo">
            <img className="title_photo" src={require("/Users/ugneadamo/todoblog/src/stock.jpg")} alt={"Pretty"}/>
           
            <span className="title_name">{name}</span>
        </div>
        
    )
}

export default MemoPreview;