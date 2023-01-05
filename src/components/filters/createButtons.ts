import CreateElement from '../elements/CreateElement';

export default function createButtons(nameButtons: string[], section: string) {
  const arrButtons: HTMLElement[] = [];
  nameButtons.forEach((nameButton) => {
    const button = new CreateElement('button', {
      classes: ['button', `${section}__button`],
    }).elem;
    button.innerHTML = nameButton;

    arrButtons.push(button);

    if (nameButton === 'Copy Link') {
      button.addEventListener('click', (e) => {
        const button: HTMLButtonElement = <HTMLButtonElement>e.target;
        button.disabled = true;

        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy Link';
            button.disabled = false;
          }, 1000);
        });
      });
    }
  });
  return arrButtons;
}
