
// Toggle

(function(){
  var el = document.querySelector('[data-toggle]');

  if (!el) return;

  document.addEventListener('click', function(e) {
    var target = e.target;
    var toggleEl = target.closest('[data-toggle]');

    if (!toggleEl) return;

    var toggleId = toggleEl.dataset.toggle;
    var toggleContent = document.querySelector('[data-hidden-id="' + toggleId + '"]');

    if (!toggleContent) return;

    toggleContent.toggleAttribute('hidden');
  });
})();
