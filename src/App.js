import './App.css';
import {User} from './User';
import {Planet} from "./Planet";

function App() {

    // const age = 12;
    // const isGreen = true
    //
    // return (
    //     <div className="App"> {age >= 18 ? <h1> overage </h1> : <h1>underage </h1>}
    //     <h1 style={{color: "red"}}> This a color</h1>
    //         {isGreen && <h1> This is green</h1>}
    //     </div>
    // )

    // const names = ["尚帅", "张三", "李四", "王五", "赵六"]
    //
    // const users = [
    //     { name: "尚帅", age: 12, email: "123@qq.com" },
    //     { name: "张三", age: 12, email: "123@qq.com" },
    //     { name: "李四", age: 12, email: "123@qq.com" },
    //     { name: "王五", age: 12, email: "123@qq.com" },
    // ]
    //
    // return (
    //     <div className="App">
    //         {
    //             users.map((user, index) => {
    //                 console.log(user, index);
    //                 return <User key={index} name={user.name} age={user.age} email={user.email} />
    //             })
    //         }
    //     </div>
    // )

    const planets = [
        {name: "Mercury", isGasPlanet: true},
        {name: "Venus", isGasPlanet: true},
        {name: "Earth", isGasPlanet: true},
        {name: "Mars", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Saturn", isGasPlanet: false},
    ]

    return (
        <div className="App">
            {
                planets.map((planet, index) => planet.isGasPlanet && <Planet key={index} name={planet.name} isGasPlanet={planet.isGasPlanet} />)
            }
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
