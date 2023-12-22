import { Route, Navigate, Outlet } from "react-router-dom";

export const Protected = ({ children, ...rest }) => {
	
	const user = localStorage.getItem("user_id");

	return user ? <Outlet /> : <Navigate to="/login" />;
};