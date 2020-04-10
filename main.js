//RIPPLE EFFECT

let addRippleEffect = function (e) {
    let target = e.target;
    if (target.tagName.toLowerCase() !== 'button') return false;
    let rect = target.getBoundingClientRect();
    let ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    let top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    let left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}
 
document.addEventListener('click', addRippleEffect, false);

//ANIMATION


const karlTL = new TimelineMax({
    
});


karlTL.to("#karl-two", 0.2, {ease: Power1.easeOut, y: 0})
      .to("#karl-two", 0.2, {ease: Power1.easeOut, y: 30})
      .to("#karl-two", 0.2, {ease: Power1.easeOut, y: 0})
      .to("#karl-two", 0.2, {ease: Power1.easeOut, y: 30})
      .to("#karl-two", 0.2, {ease: Power1.easeOut, y: 0});

//AUDIO

let suz = document.querySelector('#pink');
let karl = document.querySelector('#blue');

var suzShout = new Howl({
    src: ["audio/suzanne.mp3"]
  });

var karlShout = new Howl({
    src: ["audio/karl.mp3"]
});

suz.addEventListener('click', function (){
    suzShout.play();
});

karl.addEventListener('click', function(){
    karlShout.play();
    karlTL.restart();
});
