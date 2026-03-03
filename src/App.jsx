import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import EmployeeMgmt from "./pages/EmployeeMgmt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  User,
  UserDropdown,
  UserProfile,
} from "@asgardeo/react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Header
        rightSlot={
          <>
            <SignedOut>
              <div className="auth-button-wrap">
                <SignInButton />
              </div>
            </SignedOut>

            <SignedIn>
              <UserDropdown />
              <div className="auth-button-wrap">
                <SignOutButton />
              </div>
            </SignedIn>
          </>
        }
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <SignedIn>
                  <User>
                    {(user) => (
                      <p style={{ marginTop: 16 }}>
                        Welcome back,{" "}
                        {user?.email || user?.userName || user?.username || user?.sub}
                      </p>
                    )}
                  </User>
                  <UserProfile />
                </SignedIn>
              </>
            }
          />

          <Route
            path="/employee-mgmt"
            element={
              <ProtectedRoute>
                <EmployeeMgmt />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;