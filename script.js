// Optional JavaScript for any additional interactivity
document.querySelectorAll('.nav-buttons button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    let target = this.getAttribute('data-target');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
