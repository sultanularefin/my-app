

import Login from './../components/Login';
import userDetail from './../components/UserDetail';
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
	}
];
export default routesDef;
