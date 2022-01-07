//video var
     var vid = document.getElementById("player");

//naruto
      var Nep1 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20001%20-%20Enter%20Naruto%20Uzumaki[][RapidBot].mkv";
      var Nep2 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20002%20-%20My%20Name%20is%20Konohamaru[][RapidBot].mkv";
      var Nep4 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20004%20-%20Pass%20or%20Fail%20Survival%20Test[][RapidBot].mkv";
      var Nep5 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20005%20-%20You%20Failed%20Kakashis%20Final%20Decision[][RapidBot].mkv";
      var Nep6 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20006%20-%20A%20Dangerous%20Mission%20Journey%20to%20the%20Land%20of%20Waves[][RapidBot].mkv";
      var Nep7 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20007%20-%20The%20Assassin%20of%20the%20Mist[][RapidBot].mkv";
      var Nep8 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20008%20-%20The%20Oath%20of%20Pain[][RapidBot].mkv";
      var Nep9 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20009%20-%20Kakashi%20Sharingan%20Warrior[][RapidBot].mkv";
      var Nep10 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20010%20-%20The%20Forest%20of%20Chakra[][RapidBot].mkv";
      var Nep11 = "https://store.animewat.ch//Naruto/Naruto%20Episode%20011%20-%20The%20Land%20Where%20a%20Hero%20Once%20Lived[][RapidBot].mkv";
const naruto = (n) => {
  console.log(n);
          if (n == 1) {
              vid.src = Nep1;
          }
          else if (n == 2) {
              vid.src = Nep2;
          }
          else if (n == 4) {
              vid.src = Nep4;
          }
          else if (n == 5) {
              vid.src = Nep5;
          }
          else if (n == 6) {
              vid.src = Nep6;
          }
          else if (n == 7) {
              vid.src = Nep7;
          }
          else if (n == 8) {
              vid.src = Nep8;
          }
          else if (n == 9) {
              vid.src = Nep9;
          }
          else if (n == 10) {
              vid.src = Nep10;
          }
          else if (n == 11) {
              vid.src = Nep11;
          }
}
