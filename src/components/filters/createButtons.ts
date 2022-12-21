import CreateElement from '../render/CreateElement';

export default function createButtons(nameButtons: string[], section: string) {
  const arrButtons: HTMLElement[] = [];
  nameButtons.forEach((nameButton) => {
    const button = new CreateElement('button', {
      classes: ['button', `${section}__button`],
    }).elem;
    button.innerHTML = nameButton;

    arrButtons.push(button);
  });
  return arrButtons;
}
