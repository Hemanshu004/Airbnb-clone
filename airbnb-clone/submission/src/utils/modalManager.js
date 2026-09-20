export const modalState = {
  activeCount: 0,
  originalOverflow: '',
};

export function lockScroll() {
  if (modalState.activeCount === 0) {
    modalState.originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  modalState.activeCount++;
}

export function unlockScroll() {
  modalState.activeCount = Math.max(0, modalState.activeCount - 1);
  if (modalState.activeCount === 0) {
    document.body.style.overflow = modalState.originalOverflow;
  }
}

export function trapFocus(element, e) {
  const focusableEls = Array.from(element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(el => {
    return el.offsetWidth > 0 || el.offsetHeight > 0;
  });

  if (focusableEls.length === 0) return;

  const firstFocusable = focusableEls[0];
  const lastFocusable = focusableEls[focusableEls.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable || !element.contains(document.activeElement)) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable || !element.contains(document.activeElement)) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }
}
