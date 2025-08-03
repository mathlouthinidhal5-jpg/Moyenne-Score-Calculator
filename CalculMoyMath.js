// Arabe
const inputArabe = document.getElementById("synthesearabe");
const resultArabe = document.getElementById("Moyenarabe");

if (inputArabe && resultArabe) {
  inputArabe.addEventListener("input", () => {
    const value = parseFloat(inputArabe.value.replace(/,/g, '.'));

    if (isNaN(value)) {
      resultArabe.textContent = "Moyenne Arabe:";
      resultArabe.classList.remove("error");
      resultArabe.classList.add("gradient-text");
      return;
    }

    if (value < 0 || value > 20) {
      resultArabe.textContent = "!!:la note saisie est supérieur à 20";
      resultArabe.classList.remove("gradient-text");
      resultArabe.classList.add("error", "shake");
      setTimeout(() => resultArabe.classList.remove("shake"), 400);
      return;
    }

    resultArabe.textContent = `Moyenne Arabe: ${value.toFixed(2)}`;
    resultArabe.classList.remove("error");
    resultArabe.classList.add("gradient-text");
  });
}

// Anglais
function calculateMoyenneanglais() {
  const oraleInput = document.getElementById("oraleanglais");
  const controleInput = document.getElementById("controleanglais");
  const syntheseInput = document.getElementById("syntheseanglais");
  const result = document.getElementById("moyenanglais");

  if (!oraleInput || !controleInput || !syntheseInput || !result) return;

  const synthese = parseFloat(syntheseInput.value.replace(/,/g, '.'));
  const orale = oraleInput.value.trim() === "" ? 0 : parseFloat(oraleInput.value.replace(/,/g, '.'));
  const controle = controleInput.value.trim() === "" ? 0 : parseFloat(controleInput.value.replace(/,/g, '.'));
  
  const elementsCount = 
    (oraleInput.value.trim() === "" ? 0 : 1) + 
    (controleInput.value.trim() === "" ? 0 : 1) + 
    2;

  if (isNaN(synthese)) {
    result.textContent = "Moyenne Anglais:";
    result.classList.remove("error");
    result.classList.add("gradient-text");
    return;
  }

  const valuesToCheck = [synthese];
  if (oraleInput.value.trim() !== "") valuesToCheck.push(orale);
  if (controleInput.value.trim() !== "") valuesToCheck.push(controle);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.classList.remove("gradient-text");
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  const moyenne = (orale + controle + synthese * 2) / elementsCount;
  result.textContent = `Moyenne Anglais: ${moyenne.toFixed(2)}`;
  result.classList.remove("error");
  result.classList.add("gradient-text");
}

if (document.getElementById("oraleanglais")) {
  document.getElementById("oraleanglais").addEventListener("input", calculateMoyenneanglais);
}
if (document.getElementById("controleanglais")) {
  document.getElementById("controleanglais").addEventListener("input", calculateMoyenneanglais);
}
if (document.getElementById("syntheseanglais")) {
  document.getElementById("syntheseanglais").addEventListener("input", calculateMoyenneanglais);
}

// Français
function calculateMoyennefrancais() {
  const oraleInput = document.getElementById("oralefrancais");
  const controleInput = document.getElementById("controlefrancais");
  const syntheseInput = document.getElementById("synthesefrancais");
  const result = document.getElementById("moyenfrançais");

  if (!oraleInput || !controleInput || !syntheseInput || !result) return;

  const orale = oraleInput.value.trim() === "" ? null : parseFloat(oraleInput.value.replace(/,/g, '.'));
  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));
  const synthese = syntheseInput.value.trim() === "" ? null : parseFloat(syntheseInput.value.replace(/,/g, '.'));

  let total = 0;
  let weights = 0;
  
  if (orale !== null) {
    total += orale;
    weights += 1;
  }
  
  if (controle !== null) {
    total += controle;
    weights += 1;
  }
  
  if (synthese !== null) {
    total += synthese * 2;
    weights += 2;
  }

  if (weights === 0) {
    result.textContent = "Moyenne Français:";
    result.classList.remove("error");
    result.classList.add("gradient-text");
    return;
  }

  const valuesToCheck = [];
  if (orale !== null) valuesToCheck.push(orale);
  if (controle !== null) valuesToCheck.push(controle);
  if (synthese !== null) valuesToCheck.push(synthese);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.classList.remove("gradient-text");
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  const moyenne = total / weights;
  result.textContent = `Moyenne Français: ${moyenne.toFixed(2)}`;
  result.classList.remove("error");
  result.classList.add("gradient-text");
}

if (document.getElementById("oralefrancais")) {
  document.getElementById("oralefrancais").addEventListener("input", calculateMoyennefrancais);
}
if (document.getElementById("controlefrancais")) {
  document.getElementById("controlefrancais").addEventListener("input", calculateMoyennefrancais);
}
if (document.getElementById("synthesefrancais")) {
  document.getElementById("synthesefrancais").addEventListener("input", calculateMoyennefrancais);
}

// Option
function calculateMoyenneoption() {
  const oraleInput = document.getElementById("oraleoption");
  const controleInput = document.getElementById("controleoption");
  const syntheseInput = document.getElementById("syntheseoption");
  const result = document.getElementById("moyenoption");

  if (!oraleInput || !controleInput || !syntheseInput || !result) return;

  const orale = oraleInput.value.trim() === "" ? null : parseFloat(oraleInput.value.replace(/,/g, '.'));
  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));
  const synthese = syntheseInput.value.trim() === "" ? null : parseFloat(syntheseInput.value.replace(/,/g, '.'));

  let total = 0;
  let weights = 0;
  
  if (orale !== null) {
    total += orale;
    weights += 1;
  }
  
  if (controle !== null) {
    total += controle;
    weights += 1;
  }
  
  if (synthese !== null) {
    total += synthese * 2;
    weights += 2;
  }

  if (synthese === null) {
    result.textContent = "Moyenne Option:";
    result.classList.remove("error");
    result.classList.add("gradient-text");
    return;
  }

  const valuesToCheck = [];
  if (orale !== null) valuesToCheck.push(orale);
  if (controle !== null) valuesToCheck.push(controle);
  if (synthese !== null) valuesToCheck.push(synthese);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.classList.remove("gradient-text");
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  const moyenne = total / weights;
  result.textContent = `Moyenne Option: ${moyenne.toFixed(2)}`;
  result.classList.remove("error");
  result.classList.add("gradient-text");
}

if (document.getElementById("oraleoption")) {
  document.getElementById("oraleoption").addEventListener("input", calculateMoyenneoption);
}
if (document.getElementById("controleoption")) {
  document.getElementById("controleoption").addEventListener("input", calculateMoyenneoption);
}
if (document.getElementById("syntheseoption")) {
  document.getElementById("syntheseoption").addEventListener("input", calculateMoyenneoption);
}

// Math
function calculateMoyennemath() {
  const controleInput = document.getElementById("controlemath");
  const syntheseInput = document.getElementById("synthesemath");
  const result = document.getElementById("moyenmath");

  if (!controleInput || !syntheseInput || !result) return;

  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));
  const synthese = syntheseInput.value.trim() === "" ? null : parseFloat(syntheseInput.value.replace(/,/g, '.'));

  if (synthese === null) {
    result.textContent = "Moyenne Math:";
    result.classList.remove("error");
    result.classList.add("gradient-text");
    return;
  }

  const valuesToCheck = [];
  if (controle !== null) valuesToCheck.push(controle);
  if (synthese !== null) valuesToCheck.push(synthese);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.classList.remove("gradient-text");
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  let moyenne;
  if (controle === null) {
    moyenne = synthese;
  } else {
    moyenne = (controle + synthese * 2) / 3;
  }

  result.textContent = `Moyenne Math: ${moyenne.toFixed(2)}`;
  result.classList.remove("error");
  result.classList.add("gradient-text");
}

if (document.getElementById("controlemath")) {
  document.getElementById("controlemath").addEventListener("input", calculateMoyennemath);
}
if (document.getElementById("synthesemath")) {
  document.getElementById("synthesemath").addEventListener("input", calculateMoyennemath);
}

// Physique
function calculateMoyennephysique() {
  const tpInput = document.getElementById("tpphysique");
  const controleInput = document.getElementById("controlephysique");
  const syntheseInput = document.getElementById("synthesephysique");
  const result = document.getElementById("moyenphysique");

  if (!tpInput || !controleInput || !syntheseInput || !result) return;

  const tp = tpInput.value.trim() === "" ? null : parseFloat(tpInput.value.replace(/,/g, '.'));
  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));
  const synthese = parseFloat(syntheseInput.value.replace(/,/g, '.'));

  result.classList.remove("gradient-text", "shake");
  result.style.color = "";

  if (isNaN(synthese)) {
    result.textContent = "Moyenne Physique:";
    return;
  }

  const valuesToCheck = [synthese];
  if (tp !== null) valuesToCheck.push(tp);
  if (controle !== null) valuesToCheck.push(controle);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.style.color = "red";
    result.classList.add("shake");
    return;
  }

  let total = synthese * 2;
  let weights = 2;

  if (tp !== null) {
    total += tp;
    weights += 1;
  }

  if (controle !== null) {
    total += controle;
    weights += 1;
  }

  const moyenne = total / weights;
  result.textContent = `Moyenne Physique: ${moyenne.toFixed(2)}`;
  result.classList.add("gradient-text");
}

if (document.getElementById("tpphysique")) {
  document.getElementById("tpphysique").addEventListener("input", calculateMoyennephysique);
}
if (document.getElementById("controlephysique")) {
  document.getElementById("controlephysique").addEventListener("input", calculateMoyennephysique);
}
if (document.getElementById("synthesephysique")) {
  document.getElementById("synthesephysique").addEventListener("input", calculateMoyennephysique);
}

// Technique
function calculateMoyennetechnique() {
  const controleInput = document.getElementById("controlemeca");
  const syntheseInput = document.getElementById("synthesemeca");
  const result = document.getElementById("moyentechnique");
  
  if (!controleInput || !syntheseInput || !result) return;

  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));
  const synthese = syntheseInput.value.trim() === "" ? null : parseFloat(syntheseInput.value.replace(/,/g, '.'));

  result.classList.remove("error", "shake", "gradient-text");

  if (synthese === null) {
    result.textContent = "Moyenne S.V.T:";
    return;
  }

  const valuesToCheck = [synthese];
  
  if (controle !== null) valuesToCheck.push(controle);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieure à 20";
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  let total = synthese * 2;
  let weights = 2;

  if (controle !== null) {
    total += controle;
    weights += 1;
  }

  const moyenne = total / weights;
  result.textContent = `Moyenne S.V.T: ${moyenne.toFixed(2)}`;
  result.classList.add("gradient-text");
}

if (document.getElementById("controlemeca")) {
  document.getElementById("controlemeca").addEventListener("input", calculateMoyennetechnique);
}
if (document.getElementById("synthesemeca")) {
  document.getElementById("synthesemeca").addEventListener("input", calculateMoyennetechnique);
}

// Philosophie
function calculateMoyennephilosophie() {
  const oraleInput = document.getElementById("oralephilo");
  const controleInput = document.getElementById("controlephilo");
  const syntheseInput = document.getElementById("synthesephilo");
  const result = document.getElementById("moyenphilo");

  if (!oraleInput || !controleInput || !syntheseInput || !result) return;

  const orale = oraleInput.value.trim() === "" ? null : parseFloat(oraleInput.value.replace(/,/g, '.'));
  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));
  const synthese = syntheseInput.value.trim() === "" ? null : parseFloat(syntheseInput.value.replace(/,/g, '.'));

  if (synthese === null) {
    result.textContent = "Moyenne Philosophie:";
    result.classList.remove("error");
    result.classList.add("gradient-text");
    return;
  }

  const valuesToCheck = [synthese];
  if (orale !== null) valuesToCheck.push(orale);
  if (controle !== null) valuesToCheck.push(controle);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.classList.remove("gradient-text");
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  let total = synthese * 2;
  let weights = 2;

  if (orale !== null) {
    total += orale;
    weights += 1;
  }

  if (controle !== null) {
    total += controle;
    weights += 1;
  }

  const moyenne = total / weights;
  result.textContent = `Moyenne Philosophie: ${moyenne.toFixed(2)}`;
  result.classList.remove("error");
  result.classList.add("gradient-text");
}

if (document.getElementById("oralephilo")) {
  document.getElementById("oralephilo").addEventListener("input", calculateMoyennephilosophie);
}
if (document.getElementById("controlephilo")) {
  document.getElementById("controlephilo").addEventListener("input", calculateMoyennephilosophie);
}
if (document.getElementById("synthesephilo")) {
  document.getElementById("synthesephilo").addEventListener("input", calculateMoyennephilosophie);
}

// Informatique
function calculateMoyenneinformatique() {
  const controleInput = document.getElementById("controleinfo");
  const syntheseInput = document.getElementById("syntheseinfo");
  const result = document.getElementById("moyeninfo");

  if (!controleInput || !syntheseInput || !result) return;

  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));
  const synthese = parseFloat(syntheseInput.value.replace(/,/g, '.'));

  if (isNaN(synthese)) {
    result.textContent = "Moyenne Informatique:";
    result.classList.remove("error");
    result.classList.add("gradient-text");
    return;
  }

  const valuesToCheck = [synthese];
  if (controle !== null) valuesToCheck.push(controle);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.classList.remove("gradient-text");
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  let moyenne;
  if (controle === null) {
    moyenne = synthese;
  } else {
    moyenne = (controle + synthese ) / 2;
  }

  result.textContent = `Moyenne Informatique: ${moyenne.toFixed(2)}`;
  result.classList.remove("error");
  result.classList.add("gradient-text");
}

if (document.getElementById("controleinfo")) {
  document.getElementById("controleinfo").addEventListener("input", calculateMoyenneinformatique);
}
if (document.getElementById("syntheseinfo")) {
  document.getElementById("syntheseinfo").addEventListener("input", calculateMoyenneinformatique);
}

// Sport
function calculateMoyennesport() {
  const controleInput = document.getElementById("controlesport");
  const syntheseInput = document.getElementById("synthesesport");
  const result = document.getElementById("moyensport");

  if (!controleInput || !syntheseInput || !result) return;

  const synthese = syntheseInput.value.trim() === "" ? null : parseFloat(syntheseInput.value.replace(/,/g, '.'));
  
  if (synthese === null) {
    result.textContent = "Moyenne Sport: (Exempté)";
    result.classList.remove("error");
    result.classList.add("gradient-text");
    return;
  }

  const controle = controleInput.value.trim() === "" ? null : parseFloat(controleInput.value.replace(/,/g, '.'));

  const valuesToCheck = [synthese];
  if (controle !== null) valuesToCheck.push(controle);

  if (valuesToCheck.some(n => n < 0 || n > 20)) {
    result.textContent = "!!:la note saisie est supérieur à 20";
    result.classList.remove("gradient-text");
    result.classList.add("error", "shake");
    setTimeout(() => result.classList.remove("shake"), 400);
    return;
  }

  let moyenne;
  if (controle === null) {
    moyenne = synthese;
  } else {
    moyenne = (controle + synthese * 2) / 3;
  }

  result.textContent = `Moyenne Sport: ${moyenne.toFixed(2)}`;
  result.classList.remove("error");
  result.classList.add("gradient-text");
}

if (document.getElementById("controlesport")) {
  document.getElementById("controlesport").addEventListener("input", calculateMoyennesport);
}
if (document.getElementById("synthesesport")) {
  document.getElementById("synthesesport").addEventListener("input", calculateMoyennesport);
}

// Calculate General Average
function getNumberFromText(id) {
  const el = document.getElementById(id);
  if (!el) return 0;

  const text = el.textContent.replace(/,/g, '.'); // تحويل الفواصل إلى نقاط
  if (text.includes("Exempté")) return 0;

  const numberMatch = text.match(/(\d+\.\d+|\d+)/); // مطابقة الأرقام مع النقاط العشرية
  if (!numberMatch) return 0;
  
  const number = parseFloat(numberMatch[0]);
  return isNaN(number) ? 0 : number;
}

if (document.getElementById("resBtn")) {
  document.getElementById("resBtn").addEventListener("click", () => {
    const arabe = getNumberFromText("Moyenarabe");
    const anglais = getNumberFromText("moyenanglais");
    const francais = getNumberFromText("moyenfrançais");
    const option = getNumberFromText("moyenoption");
    const math = getNumberFromText("moyenmath");
    const physique = getNumberFromText("moyenphysique");
    const technique = getNumberFromText("moyentechnique");
    const philo = getNumberFromText("moyenphilo");
    const info = getNumberFromText("moyeninfo");
    
    const sportElement = document.getElementById("moyensport");
    let sport = 0;
    let sportCoefficient = 0;
    
    if (sportElement && !sportElement.textContent.includes("Exempté")) {
      sport = getNumberFromText("moyensport");
      sportCoefficient = 1;
    }

    const totalCoefficients = 15 + sportCoefficient;
    const total = (
      arabe * 1 +
      anglais * 1 +
      francais * 1 +
      option * 1 +
      math * 4 +
      physique * 4 +
      technique * 1 +
      philo * 1 +
      info * 1 +
      sport * sportCoefficient
    );

    const moyenneGenerale = (total / totalCoefficients).toFixed(2);

    const whiteBox = document.getElementById("whiteBox");
    if (whiteBox) {
      whiteBox.innerHTML = `<h2>Votre moyenne générale est ${moyenneGenerale}</h2>`;
    }
  });
}

    
    
    
    

    

    


// BAC Calculator
function calculateMoyenneScoreTech() {
  try {
    const technique = parseFloat(document.getElementById('noteTechnique').value) || 0;
    const math = parseFloat(document.getElementById('noteMath').value) || 0;
    const physique = parseFloat(document.getElementById('notePhysique').value) || 0;
    const anglais = parseFloat(document.getElementById('noteAnglais').value) || 0;
    const francais = parseFloat(document.getElementById('noteFrancais').value) || 0;
    const arabe = parseFloat(document.getElementById('noteArabe').value) || 0;
    const philosophie = parseFloat(document.getElementById('notePhilosophie').value) || 0;
    const informatique = parseFloat(document.getElementById('noteInformatique').value) || 0;
    
    // جعل الرياضة اختيارية
    const sportInput = document.getElementById('noteSport');
    const sport = sportInput.value.trim() === "" ? null : parseFloat(sportInput.value);
    
    const optionValue = parseFloat(document.getElementById('noteOption').value) || 0;
    // إذا كانت option أقل من 10، نجعل ضربها صفر
    const optionContribution = optionValue >= 10 ? (optionValue - 10) : 0;

    // تحقق من القيم المدخلة (باستثناء الرياضة إذا كانت null)
    const inputsToValidate = [technique, math, physique, anglais, francais, 
                            arabe, philosophie, informatique, optionValue];
    if (sport !== null) inputsToValidate.push(sport);
    
    if (inputsToValidate.some(v => v < 0 || v > 20)) {
      showErrorResults();
      return;
    }

    // حساب المعدل مع استبعاد الرياضة إذا لم تُدخل
    let totalCoefficients = 14; // الأساس بدون الرياضة (3+2+3+1+1+1+1+1+2)
    let totalMoyenne =  technique + (math * 4) + (physique * 4) + 
                      anglais + francais + arabe + philosophie + 
                      informatique + optionContribution ;

    // إضافة الرياضة إذا دخلت
    if (sport !== null) {
      totalMoyenne += sport;
      totalCoefficients += 1; // معامل الرياضة = 1
    }
    
    const moyenne = parseFloat((totalMoyenne / totalCoefficients).toFixed(2));
    
    // حساب النقاط (بنفس المنطق)
    let score = 4 * moyenne + 0.5 * technique + 2 * math + 1.5 * physique + 
               francais + anglais;
    if (sport !== null) score += 0; // إذا كان للرياضة تأثير في النقاط، أضفها هنا

    const moyenneElement = document.getElementById('moyenne');
    const scoreElement = document.getElementById('score');
    const bottomSheet = document.getElementById('bottomSheet');

    if (moyenneElement) {
      moyenneElement.innerHTML = `
        <span class="text-label">Moyenne BAC: </span>
        <span class="number-value">${moyenne.toFixed(2)}</span>
      `;
    }
    
    if (scoreElement) {
      scoreElement.innerHTML = `
        <span class="text-label">Score BAC: </span>
        <span class="number-value">${score.toFixed(2)}</span>
      `;
    }

    if (bottomSheet) {
      bottomSheet.style.display = 'block';
    }

  } catch (error) {
    console.error('Error:', error);
    showErrorResults();
  }
}
function showErrorResults() {
  const moyenneElement = document.getElementById('moyenne');
  const scoreElement = document.getElementById('score');

  if (moyenneElement) {
    moyenneElement.innerHTML = `
      <span class="text-label">Moyenne BAC: </span>
      <span class="number-value">-</span>
    `;
  }
  
  if (scoreElement) {
    scoreElement.innerHTML = `
      <span class="text-label">Score BAC: </span>
      <span class="number-value">-</span>
    `;
  }
}

// Add event listeners for BAC calculator
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.login-card input[type="number"]')) {
    document.querySelectorAll('.login-card input[type="number"]').forEach(input => {
      input.addEventListener('input', calculateMoyenneScoreTech);
    });
  }

  // Philosophie input validation
  const inputPhilosophie = document.getElementById("notePhilosophie");
  if (inputPhilosophie) {
    inputPhilosophie.addEventListener("input", function() {
      const value = parseFloat(this.value);
      
      const existingError = this.parentNode.querySelector('.input-error');
      if (existingError) {
        existingError.remove();
      }
      
      if (!isNaN(value) && (value > 20 || value < 0)) {
        const errorElement = document.createElement('span');
        errorElement.className = 'input-error';
        errorElement.textContent = '!!';
        errorElement.style.color = 'red';
        errorElement.style.position = 'absolute';
        errorElement.style.right = '10px';
        errorElement.style.top = '50%';
        errorElement.style.transform = 'translateY(-50%)';
        
        this.parentNode.style.position = 'relative';
        this.parentNode.appendChild(errorElement);
        
        calculateMoyenneScoreTech();
        return;
      }
      
      calculateMoyenneScoreTech();
    });
  }
});