import {useEffect} from "react";

export const Text = (props) => {

    useEffect(() => {
        console.log("useEffect")
        document.title = props.text
        return () =>{
            console.log("unmount")
        }
    },[props.text])

    return (<div>
            <input type="text" onChange={props.inputOnChange}/>
            <h1>{props.text}</h1>
        </div>

    )
}