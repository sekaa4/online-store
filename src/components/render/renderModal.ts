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
  divClose.innerHTML =
    '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#000000"/></svg>';
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
