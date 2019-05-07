$(document).ready(function() {
  var numberofCells;
  var cell;
  var h;

  $('#primeHeader').hide();

  var addValueButton = document.getElementById('testid');

  addValueButton.addEventListener('click', function(e) {

    $('#primeHeader').show();
    $('#inputBox').hide();
    var inputtext = jQuery("#input").val();
    inputtext = parseInt(inputtext);

    var numberofCells = inputtext;
    var a = getPrimes(numberofCells);

    for (var i = 1; i <= numberofCells; i++) { //Add cells
      if (i == 1) { //Blank space left for 1
        cell = $('<div>').addClass('cell').attr('data-cell', i).text("");
      } else {
        cell = $('<div>').addClass('cell').attr('data-cell', i).text(i);
      }

      for (var j = 1; j <= numberofCells; j++) {
        if (a[j] == i) { //Check if current number is prime and color if it is
          cell.addClass('prime');
          $("#textBox").addClass('text').append(a[j] + "&nbsp; &nbsp; ");
        }
      }
      $('#numberchart').append(cell);
    }

    h = $('.cell:last-of-type').width();
    $('.cell').css({
      height: h,
      lineHeight: h + 'px'
    });
  });
});

function getPrimes(n) {
  var arr = [...Array(n + 1).keys()]; //arr contains elements from 0 to n
  arr[1] = 0; //Removing 1 from being a prime number
  var rt = Math.sqrt(n); // calculate only once
  for (i = 2; i <= rt; i++) {
    if (arr[i]) {
      for (var j = i * i; j <= n; j += i) {
        arr[j] = 0; //Replacing non prime numbers with 0
      }
    }
  }
  return arr.filter(Number); //Removing 0's from array
}
