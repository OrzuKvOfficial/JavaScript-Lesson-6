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
