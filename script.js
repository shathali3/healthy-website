// ترحيب حسب الوقت
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow < 12) {
  greeting="  افضل مشرووع بالكون للمبدعات شذى ورغد وندى وكريمان ";
} else if (hourNow > 18) {
  greeting = "مساء الخير";
} else {
  greeting = " افضل مشرووع بالكون للمبدعات شذى ورغد وندى وكاريمان ";
}

function sayHello() {
  alert(greeting);
}

// دالة حساب السعرات الحرارية
function calculateCalories() {
  let carbs = parseFloat(document.getElementById("carbs").value) || 0;
  let protein = parseFloat(document.getElementById("protein").value) || 0;
  let fat = parseFloat(document.getElementById("fat").value) || 0;

  let calories = (carbs * 4) + (protein * 4) + (fat * 9);
  document.getElementById("result").innerText = "عدد السعرات: " + calories + " سعرة حرارية 🔥";
}

// دالة حساب مؤشر كتلة الجسم BMI
function calculateBMI() {
  let weight = parseFloat(document.getElementById("weightInput").value);
  let height = parseFloat(document.getElementById("height").value) / 100;

  if (!weight || !height) {
    document.getElementById("bmiResult").innerText = "رجاءً أدخل بيانات صحيحة 📏";
    return;
  }

  let bmi = weight / (height * height);
  document.getElementById("bmiResult").innerText = "مؤشر كتلة الجسم (BMI): " + bmi.toFixed(2);
}
