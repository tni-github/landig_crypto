/*export const accordeon = () => {
    
};*/

const hide = (item, answer) => {
    if (!item.classList.contains('faq__item_show')) return;

    answer.style.height = `${answer.offsetHeight}px`;
    answer.offsetHeight;
    answer.style.display = 'block';
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.45s ease-in-out';
    item.classList.remove('faq__item_show');

    setTimeout(() => {
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
    }, 360);
};

const show = (item, answer) => {
    if (item.classList.contains('faq__item_show')) return;

    answer.style.display = 'block';
    const height = answer.offsetHeight;
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.45s ease-in-out';
    answer.offsetHeight;
    answer.style.height = `${height}px`;

    setTimeout(() => {
        item.classList.add('faq__item_show');
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
    }, 360);
};


const accordeon = () => {
    const list = document.querySelector('.faq__list');
    list.addEventListener('click', ({ target }) => {
        const button = target.closest('.faq__question');

        if (button) {
            const item = button.closest('.faq__item');
            const answer = item.querySelector('.faq__answer');

            item.classList.toggle('faq__item_show');

            item.classList.contains('faq__item_show') ? show(item, answer) : hide(item, answer);

        }
    })
};

accordeon();