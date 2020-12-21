import './styles/App.css';
import MyNavbar from './components/layout/MyNavbar';
import Students from './components/students/Students';
import Student from './components/students/Student';
import StudentForm from './components/students/StudentForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { rrfProps } from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import Login from './components/pages/Login';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router>
					<div className='App'>
						<PrivateRoute component={MyNavbar} />

						<Switch>
							<PrivateRoute exact path='/' component={Students} />
							<PrivateRoute exact path='/Student/:id' component={Student} />
							<PrivateRoute
								exact
								path='/StudentForm/:id?'
								component={StudentForm}
							/>
							<Route exact path='/login' component={Login} />
						</Switch>
					</div>
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
