function convert() {
  const valueInput = document.getElementById("value");
  const conversion = document.getElementById("conversion");
  const result = document.getElementById("result");

  const value = Number(valueInput.value);

  if (valueInput.value === "" || isNaN(value)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  if (conversion.value === "cm-to-m") {
    const convertedValue = value / 100;

    result.textContent = `${value} cm = ${convertedValue} m`;
  } else if (conversion.value === "km-to-m") {
    const convertedValue = value * 1000;

    result.textContent = `${value} km = ${convertedValue} m`;
  } else if (conversion.value === "kg-to-g") {
    const convertedValue = value * 1000;

    result.textContent = `${value} kg = ${convertedValue} g`;
  } else {
    result.textContent = "Please select a conversion.";
  }
}

// STUDENT FORM

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const studentData = {
    name: document.getElementById("name").value,
    matric: document.getElementById("matric").value,
    department: document.getElementById("department").value,
    level: document.getElementById("level").value,
    email: document.getElementById("email").value,
  };

  try {
    const response = await fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    const data = await response.json();

    document.getElementById("message").textContent = data.message;

    if (response.ok) {
      studentForm.reset();
    }
  } catch (error) {
    console.error("Error:", error);

    document.getElementById("message").textContent =
      "Unable to submit student information.";
  }
});
