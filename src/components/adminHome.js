import React from 'react';
import {Route,NavLink,Switch} from 'react-router-dom';
//import PrivateRoute from './privateRoute';
import EventList from '../containers/events';
//import StudList from '../containers/students';
const Links=()=>{
    return(
        <ul className={'navbar bg-dark '}>
            <NavLink to={'/admin/event'}>Events</NavLink>
            <NavLink to={'/admin/students'}>Students</NavLink>
            <button className={'btn btn-light'} onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('userType');
            }}>Logout
            </button>
        </ul>
    )
};
class AdminHome extends React.Component {

    render() {
        return (
                <div>
                    Admin Home
                    <div>
                        <Links/>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path={'/admin/event'} component={EventList}/>
                            {/*<PrivateRoute exact path={'/admin/students'} component={StudList}/>*/}
                        </Switch>
                    </div>
                </div>
        )
    };
}
export default AdminHome;