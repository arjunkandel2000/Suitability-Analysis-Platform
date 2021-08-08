import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import FormLabel from "../common/FormLabel";
import FormInput from "../common/FormInput";
import TextArea from "../common/TextArea";
import Submit from "../common/btn/Submit";
import { getProject, addProject } from "../../actions/project";

function Project() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch();

    const projects = useSelector((state) => state.project.project);

    const onNameChange = (e) => {
        setName(e.target.value);
    };
    
    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const OnSubmit = (e) => {
        e.preventDefault();
        dispatch(addProject(name, description));

        setName('')
        setDescription('')
    };
    useEffect(() => {
        dispatch(getProject())
    }, [dispatch])
    return (
        <div className="container-fluid mt-5">
            <h3 className="text-center heading">Project</h3>
            <div className="row mx-5">
                <div className="col-xl-9">
                    <form
                        className="form-group"
                        encType="multipart/form-data"
                    >
                        <div className="row">
                            <div className="col-lg-6 required">
                                <FormLabel name="Project Name" />
                                <FormInput
                                    name={"name"}
                                    value={name}
                                    onChange={onNameChange}
                                    placeholder="Enter name of Project..."
                                    required="required"
                                />
                            </div>

                            <div className="col-lg-6 ">
                                <FormLabel name="Description" />
                                <TextArea
                                    name="description"
                                    value={description}
                                    rows="1"
                                    onChange={onDescriptionChange}
                                    placeholder="Add description for Project..."
                                />
                            </div>
                        </div>
                        <Submit name="Submit" onClick={OnSubmit} />
                        <h6>{projects.map(e => <>{e.name} <p>{e.description}</p></>)}</h6>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Project;