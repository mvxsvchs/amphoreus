import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import ToDoCard from "./components/ToDoCard.tsx";



function App() {
    const [cards, setCards] = useState([
        {title: "Titel 1", body: "Informativer Text 1"},

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
