
const fa = document.querySelector('.fa')
const faList = document.querySelector('.drop')
if (!fa || !faList) throw new Error('Not present')
fa.addEventListener('click', () => {
    faList.classList.toggle('showfa');
});

