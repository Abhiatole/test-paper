import React from "react";
import "./Dashboard.css"; // Add styles for the dashboard

const Dashboard = ({ stats }) => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to EduQuest MCQ</h1>
      </header>
      <div className="dashboard-content">
        <div className="stats">
          <h2>Summary Statistics</h2>
          <p>Tests Created: {stats.testsCreated}</p>
          <p>Questions in Database: {stats.questionsCount}</p>
        </div>
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <button onClick={() => navigateTo("create-test")}>Create Test</button>
          <button onClick={() => navigateTo("manage-questions")}>Manage Questions</button>
          <button onClick={() => navigateTo("account")}>Account</button>
        </div>
      </div>
      <nav className="dashboard-nav">
        <ul>
          <li onClick={() => navigateTo("create-test")}>Create Test</li>
          <li onClick={() => navigateTo("manage-questions")}>Manage Questions</li>
          <li onClick={() => navigateTo("account")}>Account</li>
        </ul>
      </nav>
    </div>
  );
};

const navigateTo = (path) => {
  // Replace this with your routing logic
  console.log(`Navigating to ${path}`);
};

export default Dashboard;