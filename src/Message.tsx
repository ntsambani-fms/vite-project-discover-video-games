let count = 0;

function Message(){
    console.log('Message called', count)
    count++;
    const name =''
    if(name)
    return <h1> Hello, {name}</h1>
        return <h1> Message {count}</h1>
}

export default Message;