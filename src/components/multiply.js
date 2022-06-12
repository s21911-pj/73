import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Multiply() {

    const {a, b} = useParams();

    return (
        <div>The result of the multiplication {a} * {b} is: {parseFloat(a)*parseFloat(b)}</div>
    )
}
