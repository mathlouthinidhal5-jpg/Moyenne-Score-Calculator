document.addEventListener("DOMContentLoaded", function () {
  // ✅ التحقق من زر "valider"
  const bouton = document.getElementById("validerBtn");
  if (bouton) {
    bouton.addEventListener("click", verifierEtRediriger);
  }

  // ✅ زر السهم والعناصر المرتبطة به
  const arrowBtn = document.getElementById("arrowBtn");
  const textContainer = document.querySelector(".text-container");
  const scTexte = document.querySelector(".sc-texte");

  if (arrowBtn && textContainer && scTexte) {
    arrowBtn.addEventListener("click", () => {
      // تبديل الكلاسات لإظهار/إخفاء العناصر
      arrowBtn.classList.toggle("moved");
      textContainer.classList.toggle("visible");
      scTexte.classList.toggle("visible");
    });
  }
});

// ✅ دالة التوجيه حسب الاختيارات
function verifierEtRediriger() {
  const sectionInput = document.getElementById("section");
  const typeCalculInput = document.getElementById("scoremoy");

  if (!sectionInput || !typeCalculInput) return;

  const section = sectionInput.value.trim().toLowerCase();
  const typeCalcul = typeCalculInput.value.trim().toLowerCase();

  console.log("Section:", section);
  console.log("Type de calcul:", typeCalcul);

  // حالة Sc.Techniques
  if (section === "sc.techniques" && typeCalcul === "moyenne") {
    window.location.href = "MoytechWeb.html";
  } 
  else if (section === "sc.techniques" && typeCalcul === "score") {
    window.location.href = "ScoreTechWeb.html";
  }
  // حالة Economie et Gestion
  else if (section === "economie et gestion" && typeCalcul === "moyenne") {
    window.location.href = "MoyEcoWeb.html";
  }
  else if (section === "economie et gestion" && typeCalcul === "score") {
    window.location.href = "ScoreEcoWeb.html";
  }
  // الحالات الجديدة لـ Lettres
  else if ((section === "lettres" || section === "lettre") && typeCalcul === "moyenne") {
    window.location.href = "MoyLettreWeb.html";
  }
  else if ((section === "lettres" || section === "lettre") && typeCalcul === "score") {
    window.location.href = "ScoreLettreWeb.html";
  }
  
  
  else if ((section === "mathématiques" || section === "mathématique") && typeCalcul === "score") {
    window.location.href = "ScoreMathWeb.html";
  }
  else if ((section === "mathématiques" || section === "mathématique") && typeCalcul === "moyenne") {
    window.location.href = "MoyMathWeb.html";
  }
  else if ((section === "sc.expérimentale" || section === "sc.expérimentales" || section === "sc.experimentale" || section === "sc.experimentales") && typeCalcul === "score") {
    window.location.href = "ScoreScienceWeb.html";
  }
  else if ((section === "sc.expérimentales" || section === "sc.expérimentale" || section === "sc.experimentale" || section === "sc.experimentales"   ) && typeCalcul === "moyenne") {
    window.location.href = "MoyScienceWeb.html";
  }
  else if ((section === "sc.de l'informatique" || section === "informatique") && typeCalcul === "score") {
    window.location.href = "ScoreInfoWeb.html";
  }
  else if ((section === "sc.de l'informatique" || section === "informatique") && typeCalcul === "moyenne") {
    window.location.href = "MoyInfoWeb.html";
  }
  else if ((section === "sport" || section === "sports") && typeCalcul === "score") {
    window.location.href = "ScoreSportWeb.html";
  }
  else if ((section === "sport" || section === "sports") && typeCalcul === "moyenne") {
    window.location.href = "MoySportWeb.html";
  }
  
  else {
    alert("Aucune page correspondante pour cette combinaison.");
  }
}