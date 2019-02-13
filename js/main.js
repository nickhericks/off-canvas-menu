// START EDITING YOUR JAVASCRIPT HERE
// ===============
const jsOffsiteToggle = document.querySelector('.jsOffsiteToggle');
const body = document.querySelector('body');

jsOffsiteToggle.addEventListener('click', function() {
  console.log('push screen');
  body.classList.toggle('offsite-is-open');
});
