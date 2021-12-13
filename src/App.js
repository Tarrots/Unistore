import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import NotFound from 'components/NotFound/NotFound'
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import 'assets/styles/style.css';
import './App.css';

// Lazy load - Code spliting
const Home = React.lazy(() => import('./pages/Home/Home'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const Gallery = React.lazy(() => import('./pages/Gallery/Gallery'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Signup = React.lazy(() => import('./pages/Signup/Signup'))
const Products = React.lazy(() => import('./pages/Products/Products'))
const Details = React.lazy(() => import('./pages/Details/Details'))



export default function App() {
	return (
		<div>

   
			<Suspense fallback={<div></div>}>
				<BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>

            <Route path="/home" component={Home}></Route>
            <Route path="/catalog" component={Products}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/details" component={Details}></Route>
            <Route component={NotFound}></Route>
          </Switch>

          <Footer />
				</BrowserRouter>
			</Suspense>
		</div>
	)
}
