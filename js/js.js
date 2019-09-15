<p id="myfunction1"></p>
<script>
function myFunction() {
  var str = "How to split a string into an array of words?";
  var res = str.split("", 10);
  document.getElementById("myfunction1").innerHTML = res;
}
</script>

num = "400"
console.log(-num);

function centuryFromYear(year) {
    let centuryCount = 0;
    while (year > 0){
      year = year - 100;
      centuryCount = centuryCount + 1;
    }
    return centuryCount;
}

var totn_string = 'RepeatTheFuckingString';
console.log(totn_string.repeat(10));