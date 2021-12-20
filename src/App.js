import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import NotFound from 'components/NotFound/NotFound'
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import 'assets/styles/style.css';
import './App.css';

// Lazy load - Code spliting
const Home = React.lazy(() => import('./pages/Home/Home'))
const CatalogContainer = React.lazy(() => import('./containers/CatalogContainer.js'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const Gallery = React.lazy(() => import('./pages/Gallery/Gallery'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Signup = React.lazy(() => import('./pages/Signup/Signup'))

// Admin
const AdminHome = React.lazy(() => import('./pages/Admin/Home/Home'))
const AdminOder = React.lazy(() => import('./pages/Admin/Oder/Oder'))
const AdminProduct = React.lazy(() => import('./pages/Admin/Product/Product'))
const AdminReport = React.lazy(() => import('./pages/Admin/Report/Report'))
const AdminAccount = React.lazy(() => import('./pages/Admin/Account/Account'))


export default function App() {

	return (
		<div>
			<Suspense fallback={<div></div>}>
				<BrowserRouter>
          {/* <Header /> */}

          <Switch>
          
            <Redirect exact from="/" to="/home"></Redirect>

            {/** Client */}
            <Route path="/home" component={Home}></Route>
            <Route path="/catalog" component={CatalogContainer}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>

            { /**Admin */}
            <Route path="/admin-dashboard" component={AdminHome}></Route>
            <Route path="/admin-account" component={AdminAccount}></Route>
            <Route path="/admin-oder" component={AdminOder}></Route>
            <Route path="/admin-product" component={AdminProduct}></Route>
            <Route path="/admin-report" component={AdminReport}></Route>
            <Route component={NotFound}></Route>
          </Switch>

          {/* <Footer /> */}
				</BrowserRouter>
			</Suspense>
		</div>
	)
}
