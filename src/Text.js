import {useEffect} from "react";

export const Text = (props) => {

    useEffect(() => {
        console.log("useEffect")
        return () =>{
            console.log("unmount")
        }
    },[])

    return (<div>
            <input type="text" onChange={props.inputOnChange}/>
            <h1>{props.text}</h1>
        </div>

    )
}