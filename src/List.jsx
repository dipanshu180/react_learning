function List(){
    const fruits = [{id:1 , name:'apple'},{ id:2 , name:'orange'},{id:3 ,name:'banana'},{id:4,name:'grapes'},{id:5,name:'coconut'}];
    // fruits.sort((a,b) => a.name.localeCompare(b.name))

    const items = fruits.map(fruit => <li key = {fruit.id}>{fruit.name}: &nbsp; Healthy  </li>) ;
    return(<ol>{items}</ol>);
}

export default List