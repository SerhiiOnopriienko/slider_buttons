function clearClasses(container) {
  container.forEach(function(point){
    point.classList.remove('ball');
  })
}

function updateButtonState(container){
  let buttons = container.querySelectorAll('button');
  let ball = container.querySelector('.ball');
  let points = container.querySelectorAll('.roadMapPoint');

  buttons.forEach( btn => btn.removeAttribute('disabled'));

  if (ball === points[0]) buttons[0].setAttribute('disabled', true)
  if (ball === points[points.length - 1]) buttons[1].setAttribute('disabled', true);
}

var containers = document.querySelectorAll('.roadMap__container');

containers.forEach( function( container ){
  var pointsContainer = container.querySelector('.roadMap');
  var points = pointsContainer.querySelectorAll('.roadMapPoint');
  var buttons = container.querySelectorAll('button');   

  buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
      var ball = container.querySelector('.ball');

      clearClasses(points);

      if (e.target.dataset.direction == '>'){
        if (+ball.dataset.id < points.length) {
          pointsContainer.querySelector(`[data-id~='${+ball.dataset.id + 1}']`).classList.add('ball');  
        }                               
      } else {
        if(+ball.dataset.id > 1) {                
          pointsContainer.querySelector(`[data-id~='${+ball.dataset.id - 1}']`).classList.add('ball');  
        } 
      }

      updateButtonState(container);
    })
  })
})
