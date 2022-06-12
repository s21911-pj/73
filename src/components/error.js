import {useLocation} from 'react-router-dom';
export default function Error() {
    let location = useLocation();

    return (
        <div>Item not found: {location.pathname}</div>
    )
}