import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Edit from "./Edit";
import Modal from 'react-bootstrap/Modal';

const baseUrl = 'http://localhost:5000/';

function Profile() {

    const [myrecipes, setMyrecipes] = useState(null)
    const [showEditModal, setShowEditModal] = useState(false)
    const [recipeToEdit, setRecipeToEdit] = useState('');
    // const resData = null

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            const response = await fetch(`https://recipesharingbackend.herokuapp.com/api/recipes/myrecipes`, {

                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            const resData = await response.json()
            // if data is the same, don't update
            if (resData != myrecipes) {
                setMyrecipes(resData)
            }

        }
        fetchData()
    }, [])

    const getRecipeIndexById = (recipeId, recipes) => {
        let newRecipes = [];
        if (!recipes) {
            // creates a new array 
            newRecipes = [...myrecipes];
        } else {
            newRecipes = recipes;
        }

        let index = -1;
        newRecipes.forEach((item, i) => {
            if (item._id === recipeId) {
                index = i;
            }
        })
        return index;
    }

    const getRecipeById = (id) => {
        const r = myrecipes.find(item => item._id === id)
        return r;
    }

    const onSubmitCompleted = (recipe) => {
        let index = -1;
        const newRecipe = [...myrecipes];
        newRecipe.find((k, i) => { if (k._id === recipe._id) { index = i; } })
        newRecipe[index] = recipe;
        setMyrecipes(newRecipe);
        onModalClose();

    }

    if (myrecipes === null) {
        return <h1>Loading</h1>
    }
    const onRecipeDelete = (e) => {
        const { currentTarget } = e;
        if (currentTarget) {
            const recipeId = currentTarget.getAttribute('data-id');
            if (recipeId) {
                fetch(`${baseUrl}api/recipes/myrecipes/${recipeId}`, {
                    method: 'DELETE', headers: {
                        'x-auth-token': localStorage.getItem('token'),
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                    if (response.status === 200) {
                        // creates a new array 
                        const newRecipes = [...myrecipes];
                        let index = getRecipeIndexById(recipeId, newRecipes);
                        // delete the recipe by index
                        delete newRecipes[index];
                        // update state so a re-render will occur
                        setMyrecipes(newRecipes);
                    }
                });
            }
        }
    }

    const onRecipeEdit = (e) => {
        const { currentTarget } = e;
        if (currentTarget) {
            const id = currentTarget.getAttribute('data-id');
            if (id) {
                setRecipeToEdit(id);
                setShowEditModal(true);
            }
        }
    }

    const onModalClose = () => {
        setRecipeToEdit('');
        setShowEditModal(false);
    }


    return (<>
        <h1 className="text-center">My Recipes</h1>
        {myrecipes.map((myrecipe) => {
            return (
                <Container>
                    <Card>
                        <Accordion defaultActiveKey={myrecipe._id}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{myrecipe.recipename}</Accordion.Header>
                                <Accordion.Body>
                                    <div class="container my-5">
                                        <div class="card row flex-row-reverse">
                                            <img class="col-lg-4 card-img-end img-fluid p-0" src={myrecipe.image} />
                                            <div class="col-lg-8 card-body">
                                                <h4 class="card-title">{myrecipe.description}</h4>
                                                <p class="card-text">
                                                    <ul>
                                                        <li><b>Cuisine:</b> {myrecipe.cuisines}</li>
                                                        <li><b>Difficulty</b> {myrecipe.difficulty}</li>
                                                        <li><b>Ingredients:</b> {myrecipe.ingredients}</li>
                                                        <li><b>Prep Time:</b> {myrecipe.preptime}</li>
                                                        <li><b>Cook Time:</b> {myrecipe.cooktime}</li>
                                                         <li><b>Directions:</b> {myrecipe.steps}{myrecipe.directions}</li>
                                                    </ul>
                                                </p>                                                
                                                <Button onClick={onRecipeEdit} data-id={myrecipe._id}>Edit Recipe</Button>
                                                <br></br>
                                                <Button className="btn btn-danger" onClick={onRecipeDelete} data-id={myrecipe._id}>Delete Recipe</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Container>
            )
        })
        }
        {showEditModal && <Modal
            show={showEditModal}
            onHide={onModalClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Edit Recipe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body> <Edit recipe={getRecipeById(recipeToEdit)} onSubmitCompleted={onSubmitCompleted} /></Modal.Body>
        </Modal>}
    </>)
}

export default Profile
