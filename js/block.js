document.addEventListener("keydown", function (e) {
  if (e.key === "PrintScreen") {
    alert("Screenshot tidak diperbolehkan!");
    e.preventDefault();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText("Screenshot tidak diperbolehkan!");
    alert("Screenshot dicegah!");
  }
});
