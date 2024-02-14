// Hämta dagens datum
var nu = new Date();

// Sätt måldatumet till 1 april 2024
var malDatum = new Date("2024-04-01");

// Hämta elementet med ID "countdown"
var nedrakningElement = document.getElementById('countdown');

// Funktion för att uppdatera nedräkningen varje sekund
var nedrakning = setInterval(function() {
    // Uppdatera nuvarande tid
    nu = new Date();

    // Beräkna skillnaden mellan nu och måldatumet
    var skillnad = malDatum - nu;

    // Tidsberäkningar för dagar, timmar, minuter och sekunder
    var dagar = Math.floor(skillnad / (1000 * 60 * 60 * 24));
    var timmar = Math.floor((skillnad % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuter = Math.floor((skillnad % (1000 * 60 * 60)) / (1000 * 60));
    var sekunder = Math.floor((skillnad % (1000 * 60)) / 1000);

    // Skriv ut resultatet i nedräkningselementet
    nedrakningElement.innerHTML = "Tid kvar: " + dagar + "d " + timmar + "h " + minuter + "m " + sekunder + "s ";

    // Om nedräkningen är över, skriv ut något text
    if (skillnad < 0) {
        clearInterval(nedrakning);
        nedrakningElement.innerHTML = "Det är nu 1 april 2024!";
    }
}, 1000);
