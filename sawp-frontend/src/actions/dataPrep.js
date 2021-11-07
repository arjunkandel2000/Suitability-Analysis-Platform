import axios from 'axios';
import { tokenConfigFileUpload } from './auth';
import {
    CLIP_VECTOR,
    CLIP_RASTER,
    MERGE_VECTORS,
    BUFFER_VECTOR,
    VECTOR_TO_RASTER,
    RASTER_TO_VECTOR,
    VECTOR_TO_SHAPEFILE,
} from './types';

export const clipVector = (data) => (dispatch, getState) => {
    axios
        .post(
            'http://localhost:8000/api/data/clipvector',
            data,
            tokenConfigFileUpload(getState)
        )
        .then((res) => {
            dispatch({
                type: CLIP_VECTOR,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: CLIP_VECTOR,
                payload: null,
            });
        });
};

export const clipRaster = (data) => (dispatch, getState) => {
    axios
        .post(
            'http://localhost:8000/api/data/clipperaster',
            data,
            tokenConfigFileUpload(getState)
        )
        .then((res) => {
            dispatch({
                type: CLIP_RASTER,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: CLIP_RASTER,
                payload: null,
            });
        });
};

export const mergeVectors = (data) => (dispatch, getState) => {
    axios
        .post(
            'http://localhost:8000/api/data/mergevector',
            data,
            tokenConfigFileUpload(getState)
        )
        .then((res) => {
            dispatch({
                type: MERGE_VECTORS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: MERGE_VECTORS,
                payload: null,
            });
        });
};

export const bufferVector = (data) => (dispatch, getState) => {
    axios
        .post(
            'http://localhost:8000/api/data/buffervector',
            data,
            tokenConfigFileUpload(getState)
        )
        .then((res) => {
            dispatch({
                type: BUFFER_VECTOR,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: BUFFER_VECTOR,
                payload: null,
            });
        });
};

export const vectorToRaster = (data) => (dispatch, getState) => {
    axios
        .post(
            'http://localhost:8000/api/data/vectortoraster',
            data,
            tokenConfigFileUpload(getState)
        )
        .then((res) => {
            dispatch({
                type: VECTOR_TO_RASTER,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: VECTOR_TO_RASTER,
                payload: null,
            });
        });
};

export const rasterToVector = (data) => (dispatch, getState) => {
    axios
        .post(
            'http://localhost:8000/api/data/rastertovector',
            data,
            tokenConfigFileUpload(getState)
        )
        .then((res) => {
            dispatch({
                type: RASTER_TO_VECTOR,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: RASTER_TO_VECTOR,
                payload: null,
            });
        });
};

export const vectorToShapefile = (data) => (dispatch, getState) => {
    axios
        .post(
            'http://localhost:8000/api/data/vectortoshapefile',
            data,
            tokenConfigFileUpload(getState)
        )
        .then((res) => {
            dispatch({
                type: VECTOR_TO_SHAPEFILE,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: VECTOR_TO_SHAPEFILE,
                payload: null,
            });
        });
}