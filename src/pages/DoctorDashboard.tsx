import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Pill } from "lucide-react";
import Header from "@/components/Header";

const DoctorDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
  };

  // Mock data
  const myPatients = [
    { id: 1, name: "John Smith", bed: "A-12", condition: "Post-surgery recovery" },
    { id: 2, name: "Emma Wilson", bed: "B-05", condition: "Pneumonia treatment" },
    { id: 3, name: "Robert Brown", bed: "C-08", condition: "Cardiac monitoring" },
    { id: 4, name: "Lisa Anderson", bed: "A-15", condition: "Diabetes management" },
  ];

  const myAppointments = [
    { id: 1, time: "10:00 AM", patient: "Michael Chen" },
    { id: 2, time: "11:30 AM", patient: "Sarah Johnson" },
    { id: 3, time: "2:00 PM", patient: "David Lee" },
    { id: 4, time: "3:30 PM", patient: "Jennifer Davis" },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header isAuthenticated={true} userRole="doctor" onLogout={handleLogout} />
      
      <main className="pt-20 pb-12 px-6 container mx-auto">
        <div className="mb-8 fade-in">
          <h1 className="text-3xl font-bold mb-2">Doctor Dashboard</h1>
          <p className="text-muted-foreground">Manage your patients and appointments</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* My Patients */}
          <div className="lg:col-span-2 slide-in">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>My Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient Name</TableHead>
                      <TableHead>Bed No.</TableHead>
                      <TableHead>Condition</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {myPatients.map((patient) => (
                      <TableRow key={patient.id} className="hover:bg-secondary/50">
                        <TableCell className="font-medium">{patient.name}</TableCell>
                        <TableCell>{patient.bed}</TableCell>
                        <TableCell className="text-muted-foreground">{patient.condition}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <FileText className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="default">
                              <Pill className="h-4 w-4 mr-1" />
                              Prescribe
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* My Appointments */}
          <div className="slide-in" style={{ animationDelay: "0.1s" }}>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {myAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-accent">{appointment.time}</span>
                    </div>
                    <p className="font-medium">{appointment.patient}</p>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      View Details
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border mt-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent mb-1">12</p>
                    <p className="text-sm text-muted-foreground">Total Patients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent mb-1">8</p>
                    <p className="text-sm text-muted-foreground">Today's Appointments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
