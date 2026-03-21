
function Message(){
    return(
        <div className="message">
            <h1>{GetName()}</h1>
        </div>
    )
}

function GetName(){
    return "John Doe";
}

export default Message;