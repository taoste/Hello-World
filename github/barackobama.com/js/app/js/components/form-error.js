/**
 * An object that contains an input field's name and it's error status.
 * @class
 */
class FormError {
  /**
   * @param {string} field - The name of the field.
   * @param {string} error - The error message.
   * @constructor
   */
  constructor(field, error) {
    this.field = field;
    this.message = error;
  }
}

/**
 * CSS classes used by this component.
 * @enum {string}
 */
FormError.ErrorStatus = {
  INVALID_EMAIL: 'A valid email is required.',
  REQUIRED: 'This field is required.',
  SERVER: 'Something went wrong. Please try again later.'
};

export default FormError;
