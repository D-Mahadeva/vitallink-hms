import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, LogOut } from "lucide-react";

interface HeaderProps {
  isAuthenticated?: boolean;
  userRole?: string;
  onLogout?: () => void;
}

const Header = ({ isAuthenticated, userRole, onLogout }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout?.();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover-scale">
          <Activity className="h-6 w-6 text-accent" />
          <span className="font-bold text-xl">MediCare HMS</span>
        </Link>

        {isAuthenticated ? (
          <nav className="flex items-center gap-6">
            {userRole === "receptionist" && (
              <>
                <Link to="/patients" className="text-sm font-medium hover:text-accent transition-colors">
                  Patients
                </Link>
                <Link to="/doctors" className="text-sm font-medium hover:text-accent transition-colors">
                  Doctors
                </Link>
                <Link to="/beds" className="text-sm font-medium hover:text-accent transition-colors">
                  Beds
                </Link>
                <Link to="/appointments" className="text-sm font-medium hover:text-accent transition-colors">
                  Appointments
                </Link>
              </>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="default">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
