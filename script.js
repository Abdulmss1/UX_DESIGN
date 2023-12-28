document.querySelector('.add-to-bag-button').addEventListener('click', function() {
    alert('Product added to bag!');
});

document.getElementById('showAllBtn').addEventListener('click', function() {
    const listItems = document.querySelectorAll('.footer-menu ul li');

    listItems.forEach(function(item) {
        item.style.display = 'block';
    });

    this.style.display = 'none';
});

document.querySelector('.add-to-bag-button').addEventListener('click', function() {
    alert('Product added to bag!');
});

window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});