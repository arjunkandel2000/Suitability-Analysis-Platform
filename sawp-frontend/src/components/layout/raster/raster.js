import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import FormLabel from "../../common/FormLabel";
import FormInput from "../../common/FormInput";
import FormFile from "../../common/FormFile";
import TextArea from "../../common/TextArea";
import Cancel from "../../common/btn/Cancel";
import Submit from "../../common/btn/Submit";
import { getRaster, addRaster, deleteRaster, downloadRaster } from "../../../actions/raster";
import RasterEdit from './rasterEdit';
import DeleteModal from '../deleteModal';
import MapView from '../mapView';

export default function Raster() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [file_name, setFileName] = useState("")
    const [file, setFile] = useState(null)
    const [dataId, setDataId] = useState(null)
    const [raster, setRaster] = useState("")
    const [editModal, setEditModal] = useState(false)
    const [viewModal, setViewModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const dispatch = useDispatch();

    const rasters = useSelector((state) => state.raster.raster);

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0]?.name);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();

        form_data.append("file", file, file.name);
        form_data.append("name", name);
        form_data.append("description", description);
        form_data.append("file_name", file_name);
        // form_data.append("project", localStorage.getItem("projectId"));
        dispatch(addRaster(form_data));

        setName("");
        setDescription("");
        setFile(null);
        setFileName("");
    };

    const onCancel = (e) => {
        e.preventDefault();
        setName("");
        setDescription("");
        setFile(null);
        setFileName("");
    };

    const onDelete = (id) => {
        dispatch(deleteRaster(id))
    }

    const download = id => {
        dispatch(downloadRaster(id))
    }

    useEffect(() => {
        dispatch(getRaster())
    }, [dispatch])
    return (
        <div>
            <MapView cond={viewModal} setCond={setViewModal} name={raster} type={"Raster"} />
            <RasterEdit cond={editModal} setCond={setEditModal} />
            <DeleteModal cond={deleteModal} setCond={setDeleteModal} id={dataId} handleDelete={onDelete} type={"Raster"} />
            <div className="row">
                <div className="col-lg-6 required">
                    <FormLabel name="Name" />
                    <FormInput
                        name={"Suitability"}
                        onChange={onNameChange}
                        placeholder="Enter name of raster..."
                        required="required"
                        value={name}
                    />
                </div>

                <div className="col-lg-6 ">
                    <FormLabel name="Description" />
                    <TextArea
                        name="description"
                        value={description}
                        rows="1"
                        onChange={onDescriptionChange}
                        placeholder="Add description of the raster..."
                    />
                </div>
            </div>
            <div className="row col-lg-6">
                <FormFile
                    onChange={handleFileChange}
                    accept=".tif,.tiff,.geotiff"
                    placeholder="Upload raster file"
                    value={file}
                />
            </div>
            <div className="row float-right mx-auto">
                <Submit name="Submit" onClick={onSubmit} />
                <Cancel onClick={onCancel} />
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 mt-5">
                    <h3>Raster List</h3>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>File</th>
                                <th>View</th>
                                <th>Download</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rasters.map((raster) => {
                                return (
                                    <tr key={raster.id}>
                                        <td>{raster.name}</td>
                                        <td>{raster.description}</td>
                                        <td>{raster.file_name}</td>
                                        <td>
                                            <i className="fas fa-eye" onClick={() => { setRaster(raster.name); setViewModal(true) }}></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-download" onClick={() => download(raster.id)}></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-trash-alt" onClick={() => { setDataId(raster.id); setDeleteModal(true) }}></i>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
