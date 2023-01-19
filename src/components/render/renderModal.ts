import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import CreateElement from '../elements/CreateElement';
import history from '../../utils/history';
import { validateName } from '../validate-data/validateName';
import { validateAddress } from '../validate-data/validateAddress';
import { validatePhone } from '../validate-data/validatePhone';
import { validateEmail } from '../validate-data/validateEmail';
import { validateCardNumber } from '../validate-data/validateCardNumber';
import { validateCardExpiration } from '../validate-data/validateCardExpiration';
import { validateCardCvv } from '../validate-data/validateCardCvv';
import createDescription from '../../utils/createDescription';
import { renderBasket } from './renderBasket';
import { count, numberBasket } from '../render/header';

export function renderModal(): CreateElement {
  const divOverlay: CreateElement = new CreateElement(ConstantsDom.DIV, {
    classes: [ConstantsDom.OVERLAY, ConstantsDom.OVERLAY_MODAL],
  });
  const divModal: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divOverlay.elem,
    classes: [ConstantsDom.MODAL, ConstantsDom.ARTICLE_MODAL],
  });
  const divClose: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divModal,
    classes: [ConstantsDom.MODAL_CLOSE_ICON],
  });
  const divModalContent: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divModal,
    classes: [ConstantsDom.MODEL_CONTENT],
  });
  const articleModalContent: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divModalContent,
    classes: [ConstantsDom.ARTICLE_MODAL_CONTENT],
  });
  const personalDetails: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: articleModalContent,
    classes: [ConstantsDom.PERSONAL_DETAILS],
  });
  const form: HTMLElement = createElement(ConstantsDom.FORM, HTMLElement, {
    parentElement: personalDetails,
    classes: [ConstantsDom.FORM],
    attributes: [[ConstantsDom.METHOD, ConstantsDom.POST]],
  });
  const inputNameDiv: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.INPUT_NAME_DIV],
  });
  const inputName: HTMLInputElement = createElement(ConstantsDom.INPUT_MODAL, HTMLInputElement, {
    parentElement: inputNameDiv,
    classes: [ConstantsDom.INPUT_NAME],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.NAME_TEXT],
      [ConstantsDom.REQUIRED, ''],
    ],
  });
  const inputPhoneDiv: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.INPUT_PHONE_DIV],
  });
  const inputPhone: HTMLInputElement = createElement(ConstantsDom.INPUT_MODAL, HTMLInputElement, {
    parentElement: inputPhoneDiv,
    classes: [ConstantsDom.INPUT_PHONE],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.PHONE_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.PHONE_NUMBER],
      [ConstantsDom.REQUIRED, ''],
    ],
  });
  const inputAddressDiv: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.INPUT_ADDRESS_DIV],
  });
  const inputAddress: HTMLInputElement = createElement(ConstantsDom.INPUT_MODAL, HTMLInputElement, {
    parentElement: inputAddressDiv,
    classes: [ConstantsDom.INPUT_ADDRESS],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.ADDRESS_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.DELIVERY_ADDRESS],
      [ConstantsDom.REQUIRED, ''],
    ],
  });
  const inputEmailDiv: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.INPUT_EMAIL_DIV],
  });
  const inputEmail: HTMLInputElement = createElement(ConstantsDom.INPUT_MODAL, HTMLInputElement, {
    parentElement: inputEmailDiv,
    classes: [ConstantsDom.INPUT_EMAIL],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.EMAIL_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.EMAIL],
      [ConstantsDom.REQUIRED, ''],
    ],
  });
  const creditCardDetails: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.CREDIT_CARDS_DETAILS],
  });
  const creditCard: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: creditCardDetails,
    classes: [ConstantsDom.CREDIT_CARDS],
  });

  const imgCard: HTMLImageElement = createElement(ConstantsDom.IMG, HTMLImageElement, {
    parentElement: creditCard,
    classes: [ConstantsDom.CREDIT_IMG],
    attributes: [
      [
        'src',
        'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71',
      ],
    ],
  });

  const inputCardNumber: HTMLInputElement = createElement(ConstantsDom.INPUT_MODAL, HTMLInputElement, {
    parentElement: creditCard,
    classes: [ConstantsDom.INPUT_CARD],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.CARD_NUMBER],
      [ConstantsDom.REQUIRED, ''],
      [ConstantsDom.MAX_LENGTH, ConstantsDom.CARD_NUMBER_LENGTH],
    ],
  });
  const creditCardBlock: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: creditCard,
    classes: [ConstantsDom.CREDIT_BLOCK],
  });
  const label: HTMLElement = createElement(ConstantsDom.LABEL, HTMLElement, {
    parentElement: creditCardBlock,
    classes: [ConstantsDom.LABEL_CREDIT],
    attributes: [[ConstantsDom.FOR, ConstantsDom.EXPIRATION]],
  });
  createElement(ConstantsDom.SPAN, HTMLElement, {
    parentElement: label,
    classes: [ConstantsDom.LABEL_SPAN],
    text: ConstantsDom.VALID,
  });
  const expirationInput: HTMLInputElement = createElement(ConstantsDom.INPUT_MODAL, HTMLInputElement, {
    parentElement: creditCardBlock,
    classes: [ConstantsDom.INPUT_VALID],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.TEXT],
      [ConstantsDom.ID, ConstantsDom.EXPIRATION],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.MM_YY],
      [ConstantsDom.REQUIRED, ''],
    ],
  });
  const labelCVV: HTMLElement = createElement(ConstantsDom.LABEL, HTMLElement, {
    parentElement: creditCardBlock,
    classes: [ConstantsDom.LABEL_CVV],
    attributes: [[ConstantsDom.FOR, ConstantsDom.EXPIRATION]],
  });
  createElement(ConstantsDom.SPAN, HTMLElement, {
    parentElement: labelCVV,
    classes: [ConstantsDom.LABEL_SPAN],
    text: ConstantsDom.CVV,
  });

  const cvvInput: HTMLInputElement = createElement(ConstantsDom.INPUT_MODAL, HTMLInputElement, {
    parentElement: creditCardBlock,
    classes: [ConstantsDom.CVV_CODE],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.CVV_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.CODE],
      [ConstantsDom.ARIA_LABEL, ConstantsDom.REQUIRED],
    ],
  });
  const buttonModal: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.BUTTON_MODAL],
  });

  const submitButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    parentElement: buttonModal,
    classes: [ConstantsDom.BUTTON_MODAL_CONFIRM, ConstantsDom.BUTTON_MODAL_CONFIRM_BORDER],
    attributes: [[ConstantsDom.TYPE, ConstantsDom.SUBMIT]],
    text: ConstantsDom.CONFIRM,
  });

  divClose.addEventListener('click', (e: Event) => {
    const svg: HTMLElement = <HTMLElement>e.target;
    if (svg.classList.contains('modal__close-icon')) {
      document.querySelector('.overlay')?.remove();
      document.body.style.overflow = '';
    }
  });
  document.body.addEventListener('click', (e: Event) => {
    const clsModal: HTMLElement = <HTMLElement>e.target;
    if (clsModal.classList.contains('overlay_modal') == true) {
      document.querySelector('.overlay')?.remove();
      document.body.style.overflow = '';
    }
  });

  inputName.addEventListener('blur', () => {
    validateName(inputName);
  });

  inputAddress.addEventListener('blur', () => {
    validateAddress(inputAddress);
  });

  inputPhone.addEventListener('blur', () => {
    validatePhone(inputPhone);
  });

  inputEmail.addEventListener('blur', () => {
    validateEmail(inputEmail);
  });

  inputCardNumber.addEventListener('blur', () => {
    validateCardNumber(inputCardNumber, creditCard);
  });

  expirationInput.addEventListener('blur', () => {
    validateCardExpiration(expirationInput, creditCard);
  });

  cvvInput.addEventListener('blur', () => {
    validateCardCvv(cvvInput, creditCard);
  });

  inputCardNumber.addEventListener('input', (event) => {
    const value: string = inputCardNumber.value;
    const e: InputEvent = <InputEvent>event;
    const data: string = <string>e.data;

    if (value.length === 1 && data === '4') {
      imgCard.src = 'https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png';
      return;
    }

    if (value.length === 1 && data === '5') {
      imgCard.src = 'https://www.mastercard.hu/content/dam/public/mastercardcom/eu/hu/images/mc-logo-52.svg';
      return;
    }

    if (value.length === 1 && data === '7') {
      imgCard.src = 'https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg';
      return;
    }

    if (value.length === 0) {
      imgCard.src =
        'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71';
      return;
    }

    if ((e.inputType === 'insertText' && !/[0-9]/.test(data)) || value.length > 28) {
      inputCardNumber.value = value.slice(0, value.length - 1);
      return;
    }

    if (e.inputType === 'deleteContentBackward') {
      inputCardNumber.value = inputCardNumber.value.trim();

      return;
    }

    if (/[0-9]{4}/.test(value.slice(-4)) && value.length < 28) {
      inputCardNumber.value += '    ';
    }
  });

  expirationInput.addEventListener('input', (event) => {
    const value: string = expirationInput.value;
    const e: InputEvent = <InputEvent>event;
    const data: string = <string>e.data;

    if ((e.inputType === 'insertText' && !/[0-9]/.test(data)) || value.length > 5) {
      expirationInput.value = value.slice(0, value.length - 1);
      return;
    }

    if (e.inputType === 'deleteContentBackward') {
      expirationInput.value = expirationInput.value.trim();
      return;
    }

    if (/[0-9]{2}/.test(value.slice(-2)) && value.length < 3) {
      expirationInput.value += '/';
    }
  });

  cvvInput.addEventListener('input', (event) => {
    const value: string = cvvInput.value;
    const e: InputEvent = <InputEvent>event;
    const data: string = <string>e.data;

    if ((e.inputType === 'insertText' && !/[0-9]/.test(data)) || value.length > 3) {
      cvvInput.value = value.slice(0, value.length - 1);
      return;
    }

    if (e.inputType === 'deleteContentBackward') {
      cvvInput.value = cvvInput.value.trim();
      return;
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const allInput: HTMLInputElement[] = Array.from(form.querySelectorAll('input'));
    const errorInput = allInput.find((input) => {
      return input.classList.contains('input-error');
    });

    if (!errorInput) {
      const completeText = 'Thank you for purchasing, wait redirection';
      divModal.innerText = '';
      divModal.append(
        createDescription(HTMLHeadElement, {
          classes: ['modal__submit-complete'],
          text: completeText,
        })
      );
      if (localStorage.getItem('basketItem')) {
        localStorage.removeItem('basketItem');
        count.innerText = '0';
        numberBasket.innerText = '0';

        renderBasket();
      }

      setTimeout(() => {
        document.body.style.overflow = '';
        window.history.state.id += 1;
        const path = '/';
        window.history.pushState({ id: window.history.state.id, path: path }, '', path);
        history();
      }, 3000);
    }
  });

  submitButton.addEventListener('click', () => {
    validateName(inputName);
    validateAddress(inputAddress);
    validatePhone(inputPhone);
    validateEmail(inputEmail);
    validateCardNumber(inputCardNumber, creditCard);
    validateCardExpiration(expirationInput, creditCard);
    validateCardCvv(cvvInput, creditCard);
  });

  document.body.append(divOverlay.elem);
  return divOverlay;
}
