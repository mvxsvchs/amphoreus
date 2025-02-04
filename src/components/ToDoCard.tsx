import {useState} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {FaTimes} from "react-icons/fa";

interface ToDoCardProps {
    title: string,
    body: string,
    onDelete: () => void // Funktion für das Löschen
}

function ToDoCard(props: ToDoCardProps) {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    }

    return (
        <div className="card-container">
        <Card style={{ width: '15rem', borderRadius: '15px', backgroundColor: checked ? 'darkslategrey' : '#c9bfaf' }}>
    <Card.Body>
        <Card.Title style={{
        textDecoration: checked ? 'line-through' : 'none',
            color: checked ? '#c9bfaf' : 'darkslategrey'
    }}>{props.title}</Card.Title>
    <Card.Text style={{
        textDecoration: checked ? 'line-through' : 'none',
            color: checked ? '#c9bfaf' : 'darkslategrey'
    }}>{props.body}</Card.Text>
    <Form>
    <Form.Check
        type="checkbox"
    label="Erledigt"
    checked={checked}
    onChange={handleCheckboxChange}
    />
    </Form>
    </Card.Body>
    <button className="custom-delete-button" onClick={props.onDelete}>
        <FaTimes />
        </button>
        </Card>
        </div>
);
}

export default ToDoCard;