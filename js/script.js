window.onload = function() {
  var numberofCells = 300;
  var cell;
  var h;

  var a = getPrimes(numberofCells);

  for (var i = 1; i <= numberofCells; i++) {
    if (i == 1) { //Blank space left for 1
      cell = $('<div>').addClass('cell').attr('data-cell', i).text("");
    }else{
      cell = $('<div>').addClass('cell').attr('data-cell', i).text(i);
    }

    for (var j = 1; j <= numberofCells; j++) {
      if (a[j] == i) { //Check if number fal;s under array of prime numbers
        cell.addClass('prime');
      }
    }

    if (i % 2 == 0) {
      cell.addClass('multipleof2');
    }
    if (i % 3 == 0) {
      cell.addClass('multipleof3');
    }
    if (i % 4 == 0) {
      cell.addClass('multipleof4');
    }
    if (i % 5 == 0){
      cell.addClass('multipleof5');
    }
    if (i % 7 == 0){
      cell.addClass('multipleof7');
    }
    $('#game').append(cell);
  }

  h = $('.cell:last-of-type').width();
  $('.cell').css({
    height: h,
    lineHeight: h + 'px'
  });
}

function getPrimes(num) {
  var arr = [...Array(num + 1).keys()]; // =[0,1,...,num]
  arr[1] = 0; //Removing 1 from being a prime number
  var rt = Math.sqrt(num); // calculate only once
  for (i = 2; i <= rt; i++) {
    for (var j = i * i; j <= num; j += i) {
      arr[j] = 0; //Replacing non prime numbers with 0
    }
  }
  return arr.filter(Number); // kick out the zeroes
}
