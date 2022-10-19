import React, { useState } from 'react'

export const Models = () => {
    console.log("io am adfd")
    return (
        <div>Models</div>
    )
}
export const errpopup = (time, error) => {
    const [visible, setvisible] = useState("")
    const [logerror, setlogerror] = useState("enter name to start game")
        setTimeout(() => {
            setvisible("")
        }, time);
        setvisible("visible")
        setlogerror(error)
    }


export default { Models, errpopup}