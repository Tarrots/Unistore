import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import NotFound from 'components/NotFound/NotFound'
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import 'assets/styles/style.css';

// Lazy load - Code spliting
const Home = React.lazy(() => import('./pages/Home/Home'))
const CatalogContainer = React.lazy(() => import('./containers/CatalogContainer.js'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const Gallery = React.lazy(() => import('./pages/Gallery/Gallery'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Signup = React.lazy(() => import('./pages/Signup/Signup'))

export default function App() {
	return (
		<div>
			<Suspense fallback={<div></div>}>
				<BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>

            <Route path="/home" component={Home}></Route>
            <Route path="/catalog" component={CatalogContainer}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route component={NotFound}></Route>
          </Switch>

          <Footer />
				</BrowserRouter>
			</Suspense>
		</div>
	)
}
