// HTML filmdagi obyektlar
var data = [
  {
      ID: 1010,
      Isim: "Orzubek",
      Familya: "Kamariddinoov",
      Yosh: 18,
      "Soch rangi": "Qora",
      Boyi: 190
  },
  {
      ID: 1020,
      Isim: "John",
      Familya: "Doe",
      Yosh: 30,
      "Soch rangi": "Qizil",
      Boyi: 180
  },
  {
      ID: 1030,
      Isim: "Alice",
      Familya: "Smith",
      Yosh: 25,
      "Soch rangi": "Oq",
      Boyi: 170
  },
  {
      ID: 1040,
      Isim: "Fatima",
      Familya: "Khan",
      Yosh: 22,
      "Soch rangi": "Qora",
      Boyi: 165
  },
  {
      ID: 1050,
      Isim: "Max",
      Familya: "Johnson",
      Yosh: 28,
      "Soch rangi": "Oq",
      Boyi: 175
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
          for (var key in data[i]) {
              if (data[i].hasOwnProperty(key)) {
                  resultDiv.innerHTML += "<p>" + key + ": " + data[i][key] + "</p>";
              }
          }
          break;
      }
  }

  if (!found) {
      resultDiv.innerHTML = "Bunday ID topilmadi";
  }
}
