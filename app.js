const t=document.getElementById("t")
const n=document.getElementById("n")
const a=document.getElementById("a")
const d=document.getElementById("d")
const ev=document.getElementById("ev")
const input = document.getElementById("m");
const r = document.getElementById("r");
let values = [];
let dataType = "text";
let sortDirection = "ascending";

t.addEventListener("click", function(){document.getElementById("m").placeholder="Type texts";});
n.addEventListener("click", function() {document.getElementById("m").placeholder="Type numbers";});
a.addEventListener("click", function() {sortDirection = "ascending";});
d.addEventListener("click", function() {sortDirection = "descending";});

ev.addEventListener("click", function () {
    values = input.value
        .split(",")
        .map(function (value) {return value.trim();})
        .filter(function (value) {return value !== "";});
    if (dataType === "number") {
        values = values.map(function (value) {return Number(value);});
        if (values.some(function (value) {return Number.isNaN(value);})) {
            r.textContent = "Please enter valid numbers.";
            return;
        }
    }
    sortValues();
    r.textContent = "Sorted values: " + values.join(", ");
});

function sortValues() {
    if (dataType === "number") {values.sort(function (first, second) {return first - second;});} 
    else {values.sort(function (first, second) {return first.localeCompare(second);});}
    if (sortDirection === "descending") {values.reverse();}
}
