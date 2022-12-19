import CreateElement from '../CreateElement';

export default function createButtons(nameButtons: string[], section: string) {
  const arrButtons: HTMLElement[] = [];
  nameButtons.forEach((nameButton) => {
    const button = new CreateElement('button', ['button', `${section}__button`]).elem;
    button.innerHTML = nameButton;

    arrButtons.push(button);
  });
  return arrButtons;
}
