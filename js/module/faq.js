/*export const accordeon = () => {
    
};*/

const hide = (item, answer) => {
    if (!item.classList.contains('faq__item_show') ||
        item.classList.contains('collapsing')) return;

    answer.style.height = `${answer.offsetHeight}px`;
    answer.offsetHeight;
    answer.style.display = 'block';
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.45s ease-in-out';
    item.classList.remove('faq__item_show');

    item.classList.add('collapsing');

    setTimeout(() => {
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
        item.classList.remove('collapsing');
    }, 360);
};

const show = (item, answer) => {
    const openedBlocks = document.querySelectorAll('.faq__item_show');
    const openedBlocksNumber = openedBlocks.length;
    if (openedBlocksNumber) {
        for (let i = 0; i < openedBlocksNumber; i++) {
            openedBlocks[i].classList.remove('faq__item_show');
        }
    }

    if (item.classList.contains('faq__item_show') ||
        item.classList.contains('collapsing')) return;

    answer.style.display = 'block';
    const height = answer.offsetHeight;
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.45s ease-in-out';
    answer.offsetHeight;
    answer.style.height = `${height}px`;
    item.classList.add('collapsing');

    setTimeout(() => {
        item.classList.add('faq__item_show');
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
        item.classList.remove('collapsing');
    }, 360);
};


const accordeon = () => {
    const list = document.querySelector('.faq__list');
    list.addEventListener('click', ({ target }) => {
        const button = target.closest('.faq__question');

        if (button) {
            const item = button.closest('.faq__item');
            const answer = item.querySelector('.faq__answer');

            /*item.classList.toggle('faq__item_show');*/

            item.classList.contains('faq__item_show') ? hide(item, answer) : show(item, answer);
        }
    })
};

accordeon();