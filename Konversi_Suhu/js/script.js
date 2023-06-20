// Function to convert Fahrenheit to Celsius
function convertToCelsius() {
  var fahrenheitInput = document.getElementById('fahrenheit').value;
  const explanationDiv = document.getElementById('explanation');

  // Validate input
  if (fahrenheitInput === "") {
    alert("Masukkan suhu Fahrenheit");
    return;
  }

  var celsiusResult = (fahrenheitInput - 32) * 5 / 9;
  document.getElementById('resultText').innerHTML = fahrenheitInput + " Fahrenheit = " + celsiusResult.toFixed(2) + " Celsius";
  explanationDiv.innerHTML = `
              <strong>Penjelasan :</strong>
              <p>Untuk mengonversi suhu dari Fahrenheit ke Celcius, kita harus mengurangi suhu dalam Fahrenheit dengan 32, kemudian kalikan dengan 5/9.</p>
              <p>Rumus : (suhu - 32) * 5/9</p>
          `;
}

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit() {
  var celsiusInput = document.getElementById('celsius').value;
  const explanationDiv = document.getElementById('explanation');

  // Validate input
  if (celsiusInput === "") {
    alert("Masukkan suhu Celsius");
    return;
  }

  var fahrenheitResult = (celsiusInput * 9 / 5) + 32;
  document.getElementById('resultText').innerHTML = celsiusInput + " Celsius = " + fahrenheitResult.toFixed(2) + " Fahrenheit";
  explanationDiv.innerHTML = `
              <strong>Penjelasan :</strong>
              <p>Untuk mengonversi suhu dari Celcius ke Fahrenheit, kita harus mengalikan suhu dalam Celcius dengan 9/5, kemudian tambahkan 32.</p>
              <p>Rumus : (suhu * 9/5) + 32</p>
          `;
}