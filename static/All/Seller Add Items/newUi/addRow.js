$(document).ready(function () {
  var i = 1;

  $("#add_row1").click(function () {
    var j = document.getElementById('number').value;
    document.getElementById('number').value = ++j;
    $('#addr' + i).html("<td class='text-center'>" + (i + 1) + "</td><td><input name='Fname" + i + "' type='text' form='update' placeholder='FeatureName' class='form-control input-md'  /> </td><td><input  name='value" + i + "' form='update'  type='text' placeholder='Value'  class='form-control input-md'></td>");

    $('#tab_logic').append('<tr class="text-center" id="addr' + (i + 1) + '"></tr>');
    i++;
  });

  $("#delete_row1").click(function () {
    var j = document.getElementById('number').value;
    document.getElementById('number').value = --j;
    console.log(i)
    if (i > 1) {
      $("#addr" + (i - 1)).html('');
      --i;
    }
  });

});