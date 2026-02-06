
function openForm(doctor) {
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("doctorName").value = doctor;
}

function bookAppointment(event) {
  event.preventDefault();

  const appointment = {
    doctor: document.getElementById("doctorName").value,
    patient: document.getElementById("patientName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value
  };

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));

  document.getElementById("completedapointment").innerText =
    "✔️ Appointment Booked Successfully";

  event.target.reset();
}

function loadAppointments() {
  const table = document.getElementById("appointmentsTable");
  if (!table) return;

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  appointments.forEach(a => {
    const row = `
      <tr>
        <td>${a.doctor}</td>
        <td>${a.patient}</td>
        <td>${a.email}</td>
        <td>${a.phone}</td>
        <td>${a.date}</td>
      </tr>`;
    table.innerHTML += row;
  });
}

loadAppointments();