const AcordionTitle = document.querySelectorAll('.Acordion__title');
const AcordionText = document.querySelectorAll('.Acordion__text');
const Acordion2Title = document.querySelectorAll('.Acordion2__title');
const Acordion2Text = document.querySelectorAll('.Acordion2__text');


AcordionTitle.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    }else{
        AcordionText.forEach(elem => {
            elem.classList.remove('active');
            elem.style.maxHeight = 0;
        });

        AcordionTitle.forEach(elem => elem.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))
Acordion2Title.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        Acordion2Text.forEach(elem => {
            elem.classList.remove('active');
            elem.style.maxHeight = 0;
        });

        Acordion2Title.forEach(elem => elem.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))
