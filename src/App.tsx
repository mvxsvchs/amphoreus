import './App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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

function App() {
    const [cards, setCards] = useState([
        { title: "Titel 1", body: "Informativer Text 1" },

    ]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }

    const addCard = () => {
        const newCard = {
            title: title,
            body: body
        };
        setCards([...cards, newCard]);
        setTitle("");
        setBody("");
    }

    const deleteCard = (index: number) => {
        const updatedCards = cards.filter((_, i) => i !== index);
        setCards(updatedCards);
    }

    return (
        <div className="App">
            <Form>
                <Form.Group controlId="formTitle">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Titel eingeben"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBody">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Text eingeben"
                        value={body}
                        onChange={handleBodyChange}
                    />
                </Form.Group>
                <Button variant="primary" onClick={addCard}>Karte hinzufügen</Button>
            </Form>
            <div>
                {cards.map((card, index) => (
                    <ToDoCard
                        key={index}
                        title={card.title}
                        body={card.body}
                        onDelete={() => deleteCard(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
