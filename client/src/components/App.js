import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './NavMenu';
import Homepage from '../routerComponents/Homepage';
import CreateRoom from '../routerComponents/CreateRoom';
import RoomDetail from '../routerComponents/RoomDetail';

function App() {
	return (
		<BrowserRouter>
			<NavMenu />
			<div className='container'>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/new-room' component={CreateRoom} />
				<Route exact path='/:id' component={RoomDetail} />
			</div>
		</BrowserRouter>
	);
}

export default App;
