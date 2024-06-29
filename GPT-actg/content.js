function clickButton() {
  const button = document.querySelector('button.btn.relative.btn-secondary.whitespace-nowrap.border-0.md\\:border');
  if (button) {
    button.click();
    console.log('Button clicked!');
  }
}

const observer = new MutationObserver(() => {
  clickButton();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial check in case the button is already there
clickButton();

