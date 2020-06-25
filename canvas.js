const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');

c.strokeStyle = "#402103";
c.strokeRect(20, 20, 750, 550);
c.beginPath();
c.rect(20, 20, 750, 550);
//c.fillStyle = "#736f6b";
//c.fill();

let mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener('mousemove', function (e) {
  mouse.x = event.x;
  mouse.y = event.y;
});
