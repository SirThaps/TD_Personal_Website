document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copy-link');
const feedback = document.getElementById('copy-feedback');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href.split('#')[0]);
    feedback.textContent = 'Link copied. You can paste it into your LinkedIn profile when this site is ready to share.';
  } catch {
    feedback.textContent = 'Copy the address from your browser to share this page.';
  }
});
