import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MediumContextProvider from './contexts/MediumContext';
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<MediumContextProvider>
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
			</MediumContextProvider>
		</div>
	);
}

export default App;
