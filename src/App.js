import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import Projects from './components/Projects/Projects';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
				<Switch>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/articles">
						<Articles />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			<Footer />
		</div>
	);
}

export default App;
