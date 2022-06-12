import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Division() {

    const {a, b} = useParams();

    if (parseFloat(b) === 0) {
        return <h1>You cannot divide by zero</h1>
    }

    return (
        <div>The result of the division {a} / {b} is: {parseFloat(a)/parseFloat(b)}</div>
    )
}
