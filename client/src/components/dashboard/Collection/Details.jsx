import {useLocation} from "react-router-dom";

const Details = () => {
    const location = useLocation()
    const name = new URLSearchParams(location.search).get('name');
    console.log(name)
    return (
        <section>
            <h2><span>name:</span> {name}</h2>
        </section>
    )
}

export default Details