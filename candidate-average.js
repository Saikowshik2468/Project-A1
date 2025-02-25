const params = new URLSearchParams(window.location.search);
const candidateId = params.get("id");

// Simulate displaying candidate attendance data
document.getElementById("chartContainer").innerHTML =
  "<p>Candidate " + candidateId + " Attendance: 75% Present, 25% Absent</p>";
