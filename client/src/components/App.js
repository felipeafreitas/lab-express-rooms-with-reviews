import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './NavMenu';
import Homepage from '../routerComponents/Homepage';

function App() {
	return (
		<BrowserRouter>
			<NavMenu />
			<div classname="container">
				<Homepage />
			</div>
		</BrowserRouter>
	);
}

export default App;
