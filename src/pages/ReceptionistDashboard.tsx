import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Bed, Calendar, Users, Stethoscope } from "lucide-react";
import Header from "@/components/Header";

const ReceptionistDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
  };

  // Mock bed data
  const wards = [
    { name: "Ward A", beds: [1, 0, 1, 0, 1, 1] }, // 1 = free, 0 = occupied
    { name: "Ward B", beds: [0, 1, 0, 1, 1, 0] },
    { name: "Ward C", beds: [1, 1, 0, 0, 1, 1] },
  ];

  // Mock appointments
  const upcomingAppointments = [
    { id: 1, patient: "John Smith", time: "10:00 AM", doctor: "Dr. Sarah Johnson" },
    { id: 2, patient: "Emma Wilson", time: "11:30 AM", doctor: "Dr. Michael Chen" },
    { id: 3, patient: "Robert Brown", time: "2:00 PM", doctor: "Dr. Sarah Johnson" },
    { id: 4, patient: "Lisa Anderson", time: "3:30 PM", doctor: "Dr. James Miller" },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header isAuthenticated={true} userRole="receptionist" onLogout={handleLogout} />
      
      <main className="pt-20 pb-12 px-6 container mx-auto">
        <div className="mb-8 fade-in">
          <h1 className="text-3xl font-bold mb-2">Receptionist Dashboard</h1>
          <p className="text-muted-foreground">Manage patients, beds, and appointments</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="space-y-4 slide-in">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            
            <Link to="/patients/new">
              <Card className="hover-lift cursor-pointer border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <UserPlus className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Register Patient</h3>
                    <p className="text-sm text-muted-foreground">Add new patient</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/beds">
              <Card className="hover-lift cursor-pointer border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Bed className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Allocate Bed</h3>
                    <p className="text-sm text-muted-foreground">Manage bed assignments</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/appointments/new">
              <Card className="hover-lift cursor-pointer border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Book Appointment</h3>
                    <p className="text-sm text-muted-foreground">Schedule doctor visit</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Link to="/patients">
                <Card className="hover-lift cursor-pointer border-border">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold text-2xl mb-1">142</p>
                    <p className="text-xs text-muted-foreground">Patients</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/doctors">
                <Card className="hover-lift cursor-pointer border-border">
                  <CardContent className="p-4 text-center">
                    <Stethoscope className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold text-2xl mb-1">24</p>
                    <p className="text-xs text-muted-foreground">Doctors</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Bed Status */}
          <div className="slide-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-xl font-semibold mb-4">Bed Status Overview</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {wards.map((ward) => (
                    <div key={ward.name}>
                      <h3 className="font-semibold mb-3">{ward.name}</h3>
                      <div className="grid grid-cols-6 gap-2">
                        {ward.beds.map((status, index) => (
                          <button
                            key={index}
                            className={`aspect-square rounded-lg border-2 transition-all hover:scale-110 ${
                              status
                                ? "bg-success/20 border-success hover:bg-success/30"
                                : "bg-destructive/20 border-destructive hover:bg-destructive/30"
                            }`}
                            title={status ? "Free" : "Occupied"}
                          >
                            <span className="text-xs font-medium">
                              {index + 1}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-success"></div>
                      <span className="text-sm text-muted-foreground">Free</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-destructive"></div>
                      <span className="text-sm text-muted-foreground">Occupied</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Appointments */}
          <div className="slide-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium">{appointment.patient}</p>
                      <span className="text-sm text-accent font-medium">{appointment.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                  </div>
                ))}
                <Link to="/appointments">
                  <Button variant="outline" className="w-full mt-4">
                    View All Appointments
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReceptionistDashboard;
