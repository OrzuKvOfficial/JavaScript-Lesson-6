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