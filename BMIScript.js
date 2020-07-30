function bmi() {
    var height = Number((document.getElementById("height").value) * (document.getElementById("height").value));
    var weight = Number((document.getElementById("weight").value) * 703);
    var result = weight / (height);
    document.getElementById("result").innerHTML = "Your bmi score is : " + result;
}