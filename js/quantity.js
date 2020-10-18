
// Quantity

(function(){
  var el = document.querySelector('.quantity');

  if (!el) return;

  document.addEventListener('click', function(e) {
    var target = e.target;
    var action = target.dataset.quantityButton;
    var field = target.parentNode.querySelector('.quantity__field');

    if (!action || !field) return;

    var max = parseInt(field.max || Infinity);
    var min = parseInt(field.min || 0);
    var value = parseInt(field.value || 0) + (action === 'increase' ? 1 : -1);

    if (value >= min && value <= max) {
      field.value = value;
    }
  });
})();
