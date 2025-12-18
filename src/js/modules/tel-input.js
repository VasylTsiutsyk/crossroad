import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export function initPhoneInputs() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  if (!(inputs && inputs.length)) return;

  [...inputs].forEach(input => {
    intlTelInput(input, {
      initialCountry: 'ua',
      separateDialCode: true,
    });
  });
}
