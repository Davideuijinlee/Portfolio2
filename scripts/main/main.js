$(document).ready(()=> {
    $('html, body, *').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta);
    e.preventDefault();
    });
    });