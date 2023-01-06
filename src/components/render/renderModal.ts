import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import CreateElement from '../elements/CreateElement';

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
  createElement(ConstantsDom.INPUT_MODAL, HTMLElement, {
    parentElement: inputNameDiv,
    classes: [ConstantsDom.INPUT_NAME],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.NAME_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.NAME_TEXT],
      [ConstantsDom.ARIA_LABEL, ConstantsDom.REQUIRED],
      [ConstantsDom.PATTERN, ConstantsDom.PATTERN_NAME],
    ],
  });
  const inputPhoneDiv: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.INPUT_PHONE_DIV],
  });
  createElement(ConstantsDom.INPUT_MODAL, HTMLElement, {
    parentElement: inputPhoneDiv,
    classes: [ConstantsDom.INPUT_PHONE],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.PHONE_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.PHONE_NUMBER],
      [ConstantsDom.ARIA_LABEL, ConstantsDom.REQUIRED],
    ],
  });
  const inputAddress: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.INPUT_ADDRESS_DIV],
  });
  createElement(ConstantsDom.INPUT_MODAL, HTMLElement, {
    parentElement: inputAddress,
    classes: [ConstantsDom.INPUT_ADDRESS],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.ADDRESS_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.DELIVERY_ADDRESS],
      [ConstantsDom.ARIA_LABEL, ConstantsDom.REQUIRED],
    ],
  });
  const inputEmail: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: form,
    classes: [ConstantsDom.INPUT_EMAIL_DIV],
  });
  createElement(ConstantsDom.INPUT_MODAL, HTMLElement, {
    parentElement: inputEmail,
    classes: [ConstantsDom.INPUT_EMAIL],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.EMAIL_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.EMAIL],
      [ConstantsDom.ARIA_LABEL, ConstantsDom.REQUIRED],
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

  createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: creditCard,
    classes: [ConstantsDom.CREDIT_IMG],
    text: 'Master Card',
  });

  createElement(ConstantsDom.INPUT_MODAL, HTMLElement, {
    parentElement: creditCard,
    classes: [ConstantsDom.INPUT_CARD],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.PHONE_TEXT],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.CARD_NUMBER],
      [ConstantsDom.ARIA_LABEL, ConstantsDom.REQUIRED],
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
  createElement(ConstantsDom.INPUT_MODAL, HTMLElement, {
    parentElement: creditCardBlock,
    classes: [ConstantsDom.INPUT_VALID],
    attributes: [
      [ConstantsDom.TYPE, ConstantsDom.CARD_TEXT],
      [ConstantsDom.ID, ConstantsDom.EXPIRATION],
      [ConstantsDom.REQUIRED, ConstantsDom.TRUE],
      [ConstantsDom.PLACEHOLDER, ConstantsDom.MM_YY],
      [ConstantsDom.ARIA_LABEL, ConstantsDom.REQUIRED],
      [ConstantsDom.PATTERN, ConstantsDom.PATTERN_TEXT],
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
  createElement(ConstantsDom.INPUT_MODAL, HTMLElement, {
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
  createElement(ConstantsDom.BUTTON, HTMLElement, {
    parentElement: buttonModal,
    classes: [ConstantsDom.BUTTON_MODAL_CONFIRM, ConstantsDom.BUTTON_MODAL_CONFIRM_BORDER],
    attributes: [[ConstantsDom.TYPE, ConstantsDom.SUBMIT]],
    text: ConstantsDom.CONFIRM,
  });
  divClose.addEventListener('click', (e: Event) => {
    const svg: HTMLElement = <HTMLElement>e.target;
    if (svg.classList.contains('modal__close-icon')) {
      document.querySelector('.overlay')?.remove();
    }
  });
  document.body.addEventListener('click', (e: Event) => {
    const clsModal: HTMLElement = <HTMLElement>e.target;
    if (clsModal.classList.contains('overlay_modal') == true) {
      document.querySelector('.overlay')?.remove();
    }
  });
  document.body.append(divOverlay.elem);
  return divOverlay;
}
