if (document.querySelector('.read-more-btn')) {
    let readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let dots = btn.parentNode.querySelector('.truncate-dots');
            let moreText = btn.parentNode.querySelector('.more-text');
            let showLessBtn = btn.parentNode.querySelector('.read-less-btn');

            dots.classList.add('hidden');
            moreText.classList.remove('hidden')
            btn.classList.add('hidden');
            showLessBtn.classList.remove('hidden');

            showLessBtn.addEventListener('click', () => {
                dots.classList.remove('hidden');
                moreText.classList.add('hidden')
                btn.classList.remove('hidden');
                showLessBtn.classList.add('hidden');

            })
        })
    })
}