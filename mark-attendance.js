document.getElementById("scanBtn").addEventListener("click", function() {
  // Simulate scanning the QR code and marking attendance
  const infoDiv = document.getElementById("attendanceInfo");
  infoDiv.innerHTML = "Attendance marked on " + new Date().toLocaleString();
});
