import {Alert} from "react-bootstrap";

const ServerError = (props) => {
    return (
        <Alert variant="danger">
            <Alert.Heading>Oops! Something Went Wrong</Alert.Heading>
            <p>
                We're experiencing technical difficulties. Please try again later.
            </p>
        </Alert>
    );
}

export default ServerError