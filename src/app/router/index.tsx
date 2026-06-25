import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AuthPage from "../../pages/AuthPage";
import ProfilePage from "../../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth", element: <AuthPage /> },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
]);