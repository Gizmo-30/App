import {Outlet} from "react-router-dom";

const Container = () => {
    return (
        <div className="Conatiner" style={{"maxWidth": '1200px', "width": "100%", "margin": "0 auto"}}>
            <Outlet />
        </div>
    )
}

export default Container