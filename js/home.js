/* eslint-disable no-undef */

const instructorsContainer = document.querySelector('.instructors-container');
const showMoreBtn = document.querySelector('.show-more');
const spinner = document.querySelector('.spinner');

function handleViewMore(isM) {
  spinner.style.display = 'none';
  if (isM.matches) {
    document.querySelector('.enroll-btn').style.display = 'block';
    document.querySelector('.see-program').style.display = 'none';
    document.querySelector('.partners').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    showMoreBtn.style.display = 'flex';
    instructorsContainer.innerHTML = codeForInstructors(instructors.slice(0, 2));
    showMoreBtn.addEventListener('click', () => {
      spinner.style.display = 'block';
      showMoreBtn.style.display = 'none';
      setTimeout(() => {
        instructorsContainer.innerHTML = codeForInstructors(instructors);
        document.querySelector('.partners').style.display = 'flex';
        document.querySelector('footer').style.display = 'flex';
        spinner.style.display = 'none';
      }, 1400);
    });
  } else {
    showMoreBtn.style.display = 'none';
    document.querySelector('.enroll-btn').style.display = 'none';
    document.querySelector('.see-program').style.display = 'block';
    document.querySelector('.partners').style.display = 'flex';
    document.querySelector('footer').style.display = 'flex';
    instructorsContainer.innerHTML = codeForInstructors(instructors);
  }
}

const isMobile = window.matchMedia('(max-width: 768px)');
handleViewMore(isMobile);
isMobile.addListener(handleViewMore);
