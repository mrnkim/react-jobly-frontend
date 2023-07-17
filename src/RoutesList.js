import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./Company/CompanyList";
import JobList from "./Job/JobList";
import CompanyDetail from "./Company/CompanyDetail";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";
import userContext from "./userContext";

/** RouteList component.
 *
 * RoutesList -> {Home, CompanyList, JobList, CompanyDetail}
 *
 * Component to hold the routes
 */

function RoutesList({ handleLogIn, handleSignUp, handleUpdate, error }) {
  const user = useContext(userContext);

  // Routes for logged in users
  if (user.user) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/companies/:name" element={<CompanyDetail />} />
        <Route
          path="/profile"
          element={<ProfileForm handleUpdate={handleUpdate} error={error} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
  // Routes for users who haven't logged in
  else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LogInForm handleLogIn={handleLogIn} error={error} />}
        />
        <Route
          path="/signup"
          element={<SignUpForm handleSignUp={handleSignUp} error={error} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
}

export default RoutesList;
