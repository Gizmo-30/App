import { MdAdd } from "react-icons/md";
import {Button} from "react-bootstrap";
import CreateCollections from "./CreateCollections";
import {useState} from "react";
const Collections = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
      <div>
          <h1>Collections</h1>
          <CreateCollections
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
          <Button variant="primary" onClick={() => setModalShow(true)}>
              <MdAdd />
          </Button>
      </div>
  )
}

export default Collections