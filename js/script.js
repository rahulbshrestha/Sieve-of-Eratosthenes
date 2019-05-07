$(document).ready(function() {
  var numberofCells;
  var cell;
  var h;

  $('#textbox').hide();
  var submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', function(e) {
    var inputval = parseInt(jQuery("#input").val());

    if (inputval != inputval){
      alert("Error: No data entered!")
    }else if (inputval <= 2 || inputval > 5000) {
      alert("Error: Input maximum number must be > 2 and <= 5000!");
    }else{
      $('#textbox').show();
      $('#inputbox').hide();

      var numberofCells = inputval;
      var primeArr = getPrimes(numberofCells);

      for (var i = 1; i <= numberofCells; i++) { //Add cells
        if (i == 1) { //Blank space left for 1
          cell = $('<div>').addClass('cell').attr('data-cell', i).text("");
        } else {
          cell = $('<div>').addClass('cell').attr('data-cell', i).text(i);
        }
        var isprime = false;
        for (var j = 1; j <= primeArr.length; j++) {
          if (primeArr[j] == i) { //Check if current number is prime and color if it is
            cell.addClass('prime');
            $("#textbox").addClass('text').append(primeArr[j] + "&nbsp; &nbsp; ");
            isprime = true;
          }
        }
        if (isprime == false && i != 1){ //Coloring non prime numbers
          cell.addClass('notprime');
        }
        $('#numberchart').append(cell);
      }

      h = $('.cell:last-of-type').width();
      $('.cell').css({
        height: h,
        lineHeight: h + 'px'
      });
    }
  });
});

function getPrimes(n) {
  var arr = [...Array(n + 1).keys()]; //arr contains elements from 0 to n
  arr[1] = 0; //Removing 1 from being a prime number
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (var j = i * i; j <= n; j += i) {
        arr[j] = 0; //Replacing non prime numbers with 0
      }
    }
  }
  return arr.filter(Number); //Removing 0's from array
}
