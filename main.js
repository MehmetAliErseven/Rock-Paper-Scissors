const oyna = () => {
  let senSkor = 0;
  let bilgiSkor = 0;

  const seçenekler = document.querySelectorAll(".seçenekler button");
  const senEl = document.getElementById("sen-el");
  const bilgiEl = document.getElementById("bilgi-el");
  const bilgiSeçenekler = ["taş", "kağıt", "makas"];
  const eller = document.querySelectorAll(".oyun img");

  eller.forEach((el) => {
    el.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });

  seçenekler.forEach((seçenek) => {
    seçenek.addEventListener("click", function () {
      senEl.src = "./img/taş.png";
      bilgiEl.src = "./img/taş.png";

      const bilgiSayı = Math.floor(Math.random() * 3);
      const bilgiSeçim = bilgiSeçenekler[bilgiSayı];

      setTimeout(() => {
        elleriKıyasla(this.textContent, bilgiSeçim);

        senEl.src = `./img/${this.textContent}.png`;
        bilgiEl.src = `./img/${bilgiSeçim}.png`;
      }, 2000);

      senEl.style.animation = "senSalla 2s ease";
      bilgiEl.style.animation = "bilgiSalla 2s ease";
    });
  });

  const skorGüncel = () => {
    const seninSkor = document.getElementById("sen-skor");
    const bilgininSkor = document.getElementById("bilgi-skor");
    seninSkor.textContent = senSkor;
    bilgininSkor.textContent = bilgiSkor;
  };

  const elleriKıyasla = (senSeçim, bilgiSeçim) => {
    const durum = document.getElementById("durum");

    if (senSeçim === bilgiSeçim) {
      durum.textContent = "Berabere";
      return;
    }

    if (senSeçim === "taş") {
      if (bilgiSeçim === "makas") {
        durum.textContent = "Sen Kazandın";
        senSkor++;
        skorGüncel();
        return;
      } else {
        durum.textContent = "Bilgisayar Kazandı";
        bilgiSkor++;
        skorGüncel();
        return;
      }
    }

    if (senSeçim === "kağıt") {
      if (bilgiSeçim === "makas") {
        durum.textContent = "Bilgisayar Kazandı";
        bilgiSkor++;
        skorGüncel();
        return;
      } else {
        durum.textContent = "Sen Kazandın";
        senSkor++;
        skorGüncel();
        return;
      }
    }

    if (senSeçim === "makas") {
      if (bilgiSeçim === "kağıt") {
        durum.textContent = "Sen Kazandın";
        senSkor++;
        skorGüncel();
        return;
      } else {
        durum.textContent = "Bilgisayar Kazandı";
        bilgiSkor++;
        skorGüncel();
        return;
      }
    }
  };
};

oyna();
