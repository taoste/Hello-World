/* eslint-env browser */
'use strict';

import FormError from 'components/form-error';
import Utility from 'components/utility';
import $ from 'jquery';

/**
 * The inquiry form handler. Does simple validation (checks for presence of
 * necessary values) and error display, and submits if the form is valid.
 * @class
 */
class InquiryForm {
  /**
   * @param {HTMLElement} el - The html form.
   * @constructor
   */
  constructor(el) {
    /** @private {HTMLElement} The html form. */
    this._form = el;

    /** @private {boolean} Whether the form is valid. */
    this._isValid = false;

    /** @private {boolean} Whether the form is currently submitting.. */
    this._isBusy = false;

    /** @private {Array<FormError>} An array of form errors. */
    this._errors = [];
  }

  /**
   * If this form has not yet been initialized, attaches event listeners.
   * @method
   * @return {this} InquiryForm
   */
  init() {
    if (!this._initialized) {
      // Handle any FrontApp status codes in the URL.
      const statusCode = Utility.getUrlParameter('code');
      switch (statusCode) {
        case InquiryForm.Status.OK:
          window.location = '/thank-you';
          break;
        case InquiryForm.Status.BAD_REFERER:
        case InquiryForm.Status.SERVICE_UNAVAILABLE:
        case InquiryForm.Status.INACTIVE_FORM:
          this._displayFormError(FormError.ErrorStatus.SERVER);
          break;
        case InquiryForm.Status.NO_EMAIL:
        case InquiryForm.Status.NO_BODY:
          this.clearErrors().validate().showErrors();
          break;
        default:
          break;
      }

      // Attach form submission handler.
      $(this._form).on('submit', e => this._handleSubmit(e));

      // Handle swapping state dropdown to an text field if not US.
      const $stateDropdown = $('select[name="state"]').clone();
      $(this._form).on('change', 'select[name="country"]', e => {
        const $stateInput = $(':input[name="state"]');
        if ($(e.currentTarget).val() !== 'United States' &&
            $stateInput.attr('type') !== 'text') {
          const $stateInput = $(':input[name="state"]');
          const $newInput = $(document.createElement('input'));
          $newInput.attr({
            name: 'state',
            type: 'text',
            id: $stateDropdown.attr('id'),
            required: ''
          }).addClass(InquiryForm.CssClass.FORM_TYPE_TEXT + ' ' +
              InquiryForm.CssClass.FORM_INPUT);
          $stateInput.replaceWith($newInput);
        } else if ($(e.currentTarget).val() === 'United States' &&
            !$stateInput.is('select')) {
          $stateInput.replaceWith($stateDropdown);
        }
      });
    }
    return this;
  }

  /**
   * Handle submit event.
   * @param {event} e - event object.
   */
  _handleSubmit(e) {
    e.preventDefault();
    if (this._isBusy) {
      return;
    }
    this._isBusy = true;
    this.clearErrors().validate();
    if (this._isValid) {
      this._form.submit();
      // Will need to go into a promise if we do AJAX.
      this._isBusy = false;
    } else {
      this.showErrors();
      this._isBusy = false;
    }
  }

  /**
   * Checks the form the presence of required field values and does simple
   * email validation. Ignores fields that are hidden even if they are tagged
   * as required.
   *
   * @method
   * @return {this} InquiryForm
   */
  validate() {
    this._errors = [];
    $(this._form).find(`.${InquiryForm.CssClass.FORM_INPUT}`)
        .filter(':input[required]').filter(':visible').each((i, input) => {
          const $input = $(input);
          let error = null;
          if (!$input.val()) {
            error = new FormError($input.attr('name'),
                FormError.ErrorStatus.REQUIRED);
          } else if ($input.attr('type') === 'email' &&
              !Utility.isValidEmail($input.val())) {
            error = new FormError($input.attr('name'),
                FormError.ErrorStatus.INVALID_EMAIL);
          }
          if (error) {
            this._errors.push(error);
          }
        });
    this._isValid = !this._errors.length;
    return this;
  }

  /**
   * Removes error messages from the form.
   * @method
   * @return {this} InquiryForm
   */
  clearErrors() {
    $(this._form).find(`.${InquiryForm.CssClass.FORM_ERROR}`).remove();
    return this;
  }

  /**
   * Display an error message by the label of the field in error.
   * @method
   * @return {this} InquiryForm
   */
  showErrors() {
    $.each(this._errors, (i, error) => {
      const $error = $(document.createElement('span'));
      const $input = $(this._form).find(`:input[name="${error.field}"]`);
      $error.addClass(InquiryForm.CssClass.FORM_ERROR).text(error.message)
          .appendTo($(this._form).find(`label[for="${error.field}"]`));
      if (i === 0) {
        $input.focus();
      }
      $input.on('blur.inquiry-form', e => {
        if ($(e.currentTarget).val()) {
          $error.remove();
          $input.off('blur.inquiry-form');
        }
      });
    });
    return this;
  }

  /**
   * Displays a global form error.
   * @param {string} message - Error message to display.
   * @return {this} Inquiry form.
   */
  _displayFormError(message) {
    const $error = $(document.createElement('div'));
    $error.addClass(InquiryForm.CssClass.FORM_ERROR + ' ' +
        InquiryForm.CssClass.FORM_ALERT).text(message)
        .prependTo($(this._form));
    return this;
  }
}

/**
 * CSS classes used by this component.
 * @enum {string}
 */
InquiryForm.CssClass = {
  FORM: 'form-inquiry',
  FORM_ALERT: 'form-alert',
  FORM_ERROR: 'form-error',
  FORM_INPUT: 'form-input',
  FORM_LABEL: 'form-label',
  FORM_TYPE_TEXT: 'form-type-text'
};

/**
 * Status codes sent by the FrontApp form service.
 * @enum {string}
 */
InquiryForm.Status = {
  OK: 'ok',
  INACTIVE_FORM: 'inactive_form',
  BAD_REFERER: 'bad_referer',
  NO_EMAIL: 'no_email',
  NO_BODY: 'no_body',
  SERVICE_UNAVAILABLE: 'service_unavailable'
};

export default InquiryForm;
