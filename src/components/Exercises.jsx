import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise, deleteExercise } from '../features/exerciseSlice';
import { Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

const Exercises = () => {
    const exercises = useSelector((state) => state.exercises.exercises);
    
    const [exerciseType, setExerciseType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addExercise({ id: Date.now(), exerciseType, duration, calories }));
        setExerciseType('');
        setDuration('');
        setCalories('');
    };

    const handleDeleteExercise = (id) => {
        dispatch(deleteExercise(id));
    };


    return (
        <Container>
            <Row>
                <Col>
                    <h2>Add New Exercise</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-2'>
                            <Form.Label>Type of Exercise</Form.Label>
                            <Form.Control type='text' placeholder='Enter the exercise type' value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Duration (in minutes) of exercise</Form.Label>
                            <Form.Control type='number' placeholder='duration in minutes' value={duration} onChange={(e) => setDuration(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Calories Burned</Form.Label>
                            <Form.Control type='number' placeholder='Calories burned' value={calories} onChange={(e) => setCalories(e.target.value)} />
                        </Form.Group>
                        <Button type='submit' variant='secondary'>
                            Add Exercise
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <ListGroup>
                        {exercises.map((exercise) => (
                            <ListGroup.Item key={exercise.id} className="d-flex justify-content-between align-items-center">
                                <span>{exercise.exerciseType} - {exercise.duration} minutes - {exercise.calories} kcal</span>
                                <Button onClick={() => handleDeleteExercise(exercise.id)}>
                                    Delete
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
};

export default Exercises;