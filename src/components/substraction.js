import {useParams} from "react-router-dom";

export default function Sub() {
    const {a, b} = useParams();

    return (
        <div>The result of the subtraction {a} - {b} is: {parseFloat(a)-parseFloat(b)}</div>
    )
}