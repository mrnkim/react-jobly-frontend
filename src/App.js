import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import userContext from "./userContext";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import Spinner from "react-bootstrap/Spinner";

const LOCAL_STORAGE_TOKEN_KEY = "token";

/** App component.
 *
 * Renders NavBar and RouteList
 */
function App() {
  const [currUser, setCurrUser] = useState({ user: null, isLoaded: false });
  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  );
  useEffect(
    function changeUser() {
      getUser();
    },
    [token]
  );

  /** Make a get request to api and receive and set a current user*/
  async function getUser() {
    if (token) {
      JoblyApi.token = token;
      const { username } = jwt_decode(token);
      const user = await JoblyApi.getUser(username);
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
      setCurrUser({ user: user, isLoaded: true });
    } else {
      setCurrUser({ user: null, isLoaded: true });
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    }
  }

  /** Make a login request to api and receive and set a token*/
  async function handleLogIn({ username, password }) {
    const token = await JoblyApi.login(username, password);
    // localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setToken(token);
  }

  /** Make a sign up request to api and receive and set a token*/
  async function handleSignUp({
    username,
    password,
    firstName,
    lastName,
    email,
  }) {
    const token = await JoblyApi.signUp(
      username,
      password,
      firstName,
      lastName,
      email
    );
    // localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setToken(token);
  }

  /** Make a patch request to api and receive and set a current user*/
  async function handleUpdate(formData) {
    const { username, firstName, lastName, email } = formData;

    const user = await JoblyApi.updateUser(
      username,
      firstName,
      lastName,
      email
    );

    setCurrUser({ user: user, isLoaded: true });
  }

  /** sets current user and token to null and empty string */
  function handleLogout() {
    setCurrUser({ user: null, isLoaded: true });
    setToken("");
  }
  if (!currUser.isLoaded)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <div className="App">
      <userContext.Provider value={currUser}>
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <RoutesList
            handleLogIn={handleLogIn}
            handleSignUp={handleSignUp}
            handleUpdate={handleUpdate}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
