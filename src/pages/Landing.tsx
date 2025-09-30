import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Stethoscope, Bed, Calendar, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Smart Hospital Management
              <span className="block text-accent mt-2">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Streamline patient care, manage doctors, allocate beds, and book appointments 
              with our premium, easy-to-use hospital management system.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="hover-lift">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="hover-lift">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools for modern healthcare management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift border-border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
                <p className="text-muted-foreground">
                  Register and manage patient records with ease. Track medical history and personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Doctor Portal</h3>
                <p className="text-muted-foreground">
                  Dedicated dashboard for doctors to manage patients, prescriptions, and appointments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Bed className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bed Allocation</h3>
                <p className="text-muted-foreground">
                  Visual bed management system with real-time status updates and quick allocation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Appointment Booking</h3>
                <p className="text-muted-foreground">
                  Schedule and manage appointments with doctors based on availability.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
                <p className="text-muted-foreground">
                  Secure dashboards for patients, doctors, and receptionists with appropriate permissions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                <p className="text-muted-foreground">
                  Stay informed with instant notifications and live status updates across the system.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Hospital Management?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join modern healthcare facilities using our system to deliver better patient care.
              </p>
              <Link to="/register">
                <Button size="lg" variant="secondary" className="hover-lift">
                  Start Free Trial
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 MediCare HMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
