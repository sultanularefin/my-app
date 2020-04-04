

import Login from './../components/Login';
import userDetail from './../components/UserDetail';
import signup from './../components/SignUp';
// import PortfolioArefin from './PortfolioArefin';

const routesDef = [

	{
		path:"/",
		exact: true,
		component: Login,
	},
	{
		path: "/user",
		exact: true,
		component: userDetail
	},
	{
		path: "/signup",
		exact: true,
		component: signup
	}


];
export default routesDef;
