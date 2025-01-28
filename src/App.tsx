import './App.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

interface ToDoCardProps {
    title: string,
    body: string
}

function ToDoCard(props: ToDoCardProps) {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    }


    return (
        <Card style={{width: '15rem', borderRadius: '15px', backgroundColor: checked ? 'darkslategrey' : '#c9bfaf'}}>
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
        </Card>
    );
}

function App() {
    return (
        <div className="App">
            <ToDoCard title={"Titel 1"} body={"Informativer Text 1"}/>
            <ToDoCard title={"Titel 2"} body={"Informativer Text 2"}/>
            <ToDoCard title={"Titel 3"} body={"Informativer Text 3"}/>
        </div>
    )
}

export default App;