const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .navbar-custom {
            background-color: #007bff;
        }
        
        .navbar-brand-custom {
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
        }
        
        .search-input {
            width: 250px;
        }
        
        .search-button {
            background-color: #ffffff;
            color: #007bff;
        }
        
        #result {
            border: 1px solid #ccc;
            padding: 10px;
            margin-top: 10px;
            background-color: #f9f9f9;
        }
        
        .data-item {
            margin-bottom: 5px;
            font-size: 16px;
        }
        
        .data-label {
            font-weight: bold;
        }
    `;
    document.head.appendChild(styleElement);

var data = [
    {
        ID: 1010,
        Isim: "Orzubek",
        Familya: "Kamariddinoov",
        Yosh: 18,
        "Soch rangi": "Qora",
        Boyi: 190,
        Rasm: "Rasim.jpg" // Sizning shaxsiy rasmingizni nomi
    },
    {
        ID: 1020,
        Isim: "John",
        Familya: "Doe",
        Yosh: 30,
        "Soch rangi": "Qizil",
        Boyi: 180,
        Rasm: "https://example.com/john.jpg" // Sizning rasmingizning URL manzili
    },
    // Qolgan obyektlar...
    // 20 ta obyekt
  ];
  
  function searchByID() {
    var searchID = parseInt(document.getElementById("searchInput").value); // ID ni olish
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Natijani qayta yozishdan oldin divni bo'shatish
  
    // Obyektlarni qidirish
    var found = false;
    for (var i = 0; i < data.length; i++) {
        if (data[i].ID === searchID) {
            found = true;
            var personHTML = "<div class='person'>";
            for (var key in data[i]) {
                if (data[i].hasOwnProperty(key)) {
                    personHTML += "<p>" + key + ": " + data[i][key] + "</p>";
                }
            }
            personHTML += "<img src='" + data[i].Rasm + "' alt='" + data[i].Isim + "' />";
            personHTML += "</div>";
            resultDiv.innerHTML += personHTML;
            break;
        }
    }
  
    if (!found) {
        resultDiv.innerHTML = "Bunday ID topilmadi";
    }
  }
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }

  function clearDisplay() {
    document.getElementById("display").value = '';
  }

  function calculateResult() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
  }
  let currentExpression = ''; // Store current expression

  function appendToDisplay(value) {
    currentExpression += value; // Append value to expression
    document.getElementById("display").value = currentExpression; // Update display
  }

  function clearDisplay() {
    currentExpression = ''; // Clear expression
    document.getElementById("display").value = ''; // Clear display
  }

  function calculateResult() {
    try {
      let result = eval(currentExpression); // Evaluate expression
      if (result === Infinity || isNaN(result)) {
        throw new Error('Invalid expression');
      }
      document.getElementById("display").value = result; // Update display with result
      currentExpression = ''; // Clear current expression
    } catch (error) {
      alert('Invalid expression'); // Handle invalid expressions
      clearDisplay(); // Clear display
    }
  }

  
  let displayValue = ''; // Store current display value
  let firstOperand = ''; // Store first operand
  let operator = ''; // Store operator

  function appendToDisplay(value) {
    displayValue += value; // Append value to display
    document.getElementById("display").value = displayValue; // Update display
  }

  function clearDisplay() {
    displayValue = ''; // Clear display value
    document.getElementById("display").value = ''; // Clear display
  }

  function calculateResult() {
    if (displayValue === '') return; // If display is empty, return
    if (operator === '' || firstOperand === '') return; // If operator or first operand is missing, return

    let secondOperand = displayValue.slice(firstOperand.length + 1); // Get second operand
    let result;
    
    switch(operator) { // Perform calculation based on operator
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
      default:
        return; // Invalid operator, return
    }

    document.getElementById("display").value = result; // Update display with result
    displayValue = ''; // Clear display value
    firstOperand = ''; // Clear first operand
    operator = ''; // Clear operator
  }

  function setOperator(op) {
    if (displayValue === '') return; // If display is empty, return
    if (operator !== '' && firstOperand !== '') {
      calculateResult(); // If there's an existing operator and operand, calculate the result first
    }
    operator = op; // Set the operator
    firstOperand = displayValue; // Store the first operand
    displayValue += op; // Update display with the operator
    document.getElementById("display").value = displayValue; // Update display
  }
  // Sayfanın gömülü olup olmadığını kontrol etme
if (window.self !== window.top) {
  window.top.location = window.self.location;
}

// Console.log kullanarak basit hata ayıklama
console.log("Bu bir debug mesajıdır.");

// Debugger kullanarak adım adım hata ayıklama
function myFunction() {
    let x = 10;
    debugger;
    console.log(x);
}
myFunction();

// Try-catch blokları kullanarak hata yönetimi
try {
    // Potansiyel olarak hata verebilecek kodlar
} catch (error) {
    // Hata oluşursa burası çalışır
    console.error("Hata yakalandı:", error);
}

// Console.error kullanarak hataları raporlama
console.error("Bu bir hata mesajıdır.");

// typeof operatörü kullanarak tür kontrolü
let myVariable = 5;
if (typeof myVariable !== 'string') {
    console.error("myVariable bir string değil!");
}
function reverseArray(arr) {
  return arr.reverse();
}

let myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray));

// Matnni yozish
var matn = "Assalomu alaykum, dunyo!";

// Matnni konsolga chiqarish
console.log(matn);
