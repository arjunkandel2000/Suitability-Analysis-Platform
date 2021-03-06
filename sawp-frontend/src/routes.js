import { useEffect } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import {Provider} from 'react-redux';
import { loadUser } from "./actions/auth";
import PrivateRoute from './components/common/PrivateRoute';
import Home from "./components/pages/home";
import DataInput from "./components/pages/dataInput"; 
import SuitabilityCalculation from "./components/pages/suitabilityCalculation";
import Visualization from "./components/pages/visualization";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import User from './components/pages/user';
import Navbar from './components/layout/navbar';
import Setting from './components/pages/setting';
import DataPrep from './components/pages/dataPrep';
import ClipVector from './components/layout/dataprep/clipVector';
import ClipRaster from './components/layout/dataprep/clipRaster';
import MergeVector from './components/layout/dataprep/mergeVector';
import BufferVector from './components/layout/dataprep/bufferVector';
import About from './components/pages/about';
import RasterToVector from './components/layout/dataprep/rasterToVector';
import VectorToShapefile from './components/layout/dataprep/vectorToShapefile';
import ShapefileToGeojson from './components/layout/dataprep/shapefileToGeojson';
import VectorToRaster from './components/layout/dataprep/vectorToRaster';

function Routes() {
    useEffect(() => {store.dispatch(loadUser());}, [])
    return (
        <Provider store={store}>
        <HashRouter>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/login' exact component={Login} />
                <Route path='/about' exact component={About} />
                <PrivateRoute path='/dataInput' exact component={DataInput} />
                <PrivateRoute path='/dataPrep' exact component={DataPrep} />
                <PrivateRoute path='/clipVector' exact component={ClipVector} />
                <PrivateRoute path='/clipRaster' exact component={ClipRaster} />
                <PrivateRoute path='/mergeVector' exact component={MergeVector} />
                <PrivateRoute path='/bufferVector' exact component={BufferVector} />
                <PrivateRoute path='/rasterToVector' exact component={RasterToVector} />
                <PrivateRoute path='/vectorToRaster' exact component={VectorToRaster} />
                <PrivateRoute path='/vectorToShapefile' exact component={VectorToShapefile} />
                <PrivateRoute path='/shapefileToGeojson' exact component={ShapefileToGeojson} />
                <PrivateRoute path='/suitabilityCalculation' exact component={SuitabilityCalculation} />
                <PrivateRoute path='/visualization' exact component={Visualization} />
                <PrivateRoute path='/user' exact component={User} />
                <PrivateRoute path='/setting' exact component={Setting} />
            </Switch>
        </HashRouter>
        </Provider>
    );
}

export default Routes;