import './App.css';

function App() {

    return (<div className="App">
            <h1 className="name">尚帅</h1>
            <User className="name" name="尚帅" age={30} email="doit_2017@outlook.com"/>
            <User name="张三" age={20} email="doit_2017@outlook.com"/>
            <User name="李四" age={10} email="doit_2017@outlook.com"/>
        </div>

    );
}

const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}

const GetName = () => {
    return "尚帅";
}

const GetNameComponent = () => {
    return <h1>{GetName()}</h1>;
}

export default App;
