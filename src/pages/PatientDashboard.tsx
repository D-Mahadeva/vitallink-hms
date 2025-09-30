import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, CreditCard, Stethoscope } from "lucide-react";
import Header from "@/components/Header";

const PatientDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
  };

  // Mock data
  const patientInfo = {
    name: "John Smith",
    age: 35,
    gender: "Male",
    contact: "+1 234-567-8900",
    bedNo: "A-12",
    admitted: "2025-01-15",
  };

  const appointments = [
    { id: 1, date: "2025-01-20", doctor: "Dr. Sarah Johnson", specialization: "Cardiologist" },
    { id: 2, date: "2025-01-25", doctor: "Dr. Michael Chen", specialization: "General Physician" },
  ];

  const billingInfo = {
    outstanding: 1250,
    paid: 3500,
    total: 4750,
  };

  const availableDoctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialization: "Cardiologist", available: "Mon, Wed, Fri" },
    { id: 2, name: "Dr. Michael Chen", specialization: "General Physician", available: "Tue, Thu, Sat" },
    { id: 3, name: "Dr. James Miller", specialization: "Neurologist", available: "Mon, Tue, Wed" },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header isAuthenticated={true} userRole="patient" onLogout={handleLogout} />
      
      <main className="pt-20 pb-12 px-6 container mx-auto">
        <div className="mb-8 fade-in">
          <h1 className="text-3xl font-bold mb-2">Patient Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {patientInfo.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Patient Info */}
          <div className="space-y-6 slide-in">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  My Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">{patientInfo.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{patientInfo.age}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium">{patientInfo.gender}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <p className="font-medium">{patientInfo.contact}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Bed No.</p>
                    <p className="font-medium text-accent">{patientInfo.bedNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Admitted</p>
                    <p className="font-medium">{patientInfo.admitted}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Billing Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Bill</span>
                  <span className="font-semibold">${billingInfo.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Paid</span>
                  <span className="font-semibold text-success">${billingInfo.paid}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="font-medium">Outstanding</span>
                  <span className="font-bold text-accent">${billingInfo.outstanding}</span>
                </div>
                <Button className="w-full mt-4">Pay Now</Button>
              </CardContent>
            </Card>
          </div>

          {/* Appointments & Booking */}
          <div className="lg:col-span-2 space-y-6 slide-in" style={{ animationDelay: "0.1s" }}>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  My Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{appointment.doctor}</p>
                          <p className="text-sm text-muted-foreground">{appointment.specialization}</p>
                        </div>
                        <span className="text-sm font-medium text-accent">{appointment.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Book New Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {availableDoctors.map((doctor) => (
                    <Card key={doctor.id} className="border-border hover-lift">
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-1">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{doctor.specialization}</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          Available: {doctor.available}
                        </p>
                        <Button size="sm" className="w-full">Book Appointment</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
