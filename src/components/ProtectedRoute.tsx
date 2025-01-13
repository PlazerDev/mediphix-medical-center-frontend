import { Navigate } from "react-router-dom";
import { AlertService } from "../services/AlertService";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const role = localStorage.getItem("role");

  if (!role || !allowedRoles.includes(role)) {
    AlertService.showErrorTimerAlert("", "Redirecting to main page");
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
