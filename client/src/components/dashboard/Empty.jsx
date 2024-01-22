import {Alert} from "react-bootstrap";

const Empty = () => {
    return (
        <Alert variant="info">
            <Alert.Heading>No Collection found</Alert.Heading>
            <p>
                Lets create new Collection :)
            </p>
        </Alert>
    )
}

export default Empty