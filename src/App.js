import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { signIn, logOut } from "./authService";
import Dashboard from "./components/Dashboard";
import CreateTest from "./components/CreateTest";
import ManageQuestions from "./components/ManageQuestions";
import Account from "./components/Account";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(email, password);
      setMessage(`User signed in: ${user.email}`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      setMessage("User signed out.");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const stats = {
    testsCreated: 5,
    questionsCount: 120,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard stats={stats} />} />
        <Route
          path="/sign-in"
          element={
            <div>
              <h1>Sign In</h1>
              <form onSubmit={handleSignIn}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>
              </form>
              <button onClick={handleSignOut}>Sign Out</button>
              <p>{message}</p>
            </div>
          }
        />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="/manage-questions" element={<ManageQuestions />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;