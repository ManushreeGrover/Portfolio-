const cards = document.querySelectorAll('.achiv-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});


const cards1 = document.querySelectorAll('.project-card');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards1.forEach(card => {
    observer1.observe(card);
});


const cards2 = document.querySelectorAll('.exp-card');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards2.forEach(card => {
    observer2.observe(card);
});


const cards = document.querySelectorAll('.achiv-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});


const cards1 = document.querySelectorAll('.project-card');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards1.forEach(card => {
    observer1.observe(card);
});


const cards2 = document.querySelectorAll('.exp-card');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards2.forEach(card => {
    observer2.observe(card);
});

