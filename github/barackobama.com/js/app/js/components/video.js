/* eslint-env browser */
'use strict';

import $ from 'jquery';

/**
 * A video player that creates an overlaying modal and inserts an iframe
 * playing a defined video embed.
 * @class
 */
class VideoModal {
  /**
   * @param {HTMLElement} el - The containing video modal element.
   * @constructor
   */
  constructor(el) {
    /** @private {HTMLElement} The container element. */
    this._el = el;

    /** @private {string} The ID of the video element. */
    this._id = el.id;

    /** @private {string} The URL of the video embed. */
    this._videoUrl = $(el).data('video');

    /** @private {boolean} Whether this video has yet been initialized. */
    this._initialized = false;
  }

  /**
   * If this video has not yet been initialized, attaches event listeners.
   * @method
   * @return {this} VideoModal
   */
  init() {
    if (!this._initialized && this._id) {
      $('body').on('click.videoModal',
          `.${VideoModal.CssClass.SHOW_VIDEO}[href="#${this._id}"],
          .${VideoModal.CssClass.SHOW_VIDEO}[data-target="#${this._id}"]`,
          e => {
            e.preventDefault();
            this.show();
          }).on('click.videoModal',
          `.${VideoModal.CssClass.HIDE_VIDEO}[href="#${this._id}"],
          .${VideoModal.CssClass.HIDE_VIDEO}[data-target="#${this._id}"]`,
          e => {
            e.preventDefault();
            this.hide();
          });
      $(this._el).on('click', () => this.hide())
          .find(`.${VideoModal.CssClass.VIDEO_WRAPPER}`).on('click',
          e => {
            e.stopPropagation();
          });
      this._initialized = true;
    }
    return this;
  }

  /**
   * Displays the video.
   * @method
   * @return {this} VideoModal
   */
  show() {
    const $iframe = $(document.createElement('iframe'));
    $iframe.attr('src', `${this._videoUrl}`)
        .attr('allowfullscreen', '').attr('frameborder', '0');
    $(this._el).removeClass(VideoModal.CssClass.HIDDEN)
        .find(`.${VideoModal.CssClass.VIDEO_WRAPPER}`).html($iframe);
    // Sets an event listener to close the nav if the user presses 'Esc'.
    $(document).on('keyup.triggerModal', e => {
      if (e.keyCode === 27) {
        this.hide();
      }
    });

    return this;
  }

  /**
   * Hides the video.
   * @method
   * @return {this} VideoModal
   */
  hide() {
    $(this._el).addClass(VideoModal.CssClass.HIDDEN)
        .find(`.${VideoModal.CssClass.VIDEO_WRAPPER}`).empty();
    // Removes the event event listener for the 'Esc' key.
    $(document).off('keyup.triggerModal');
    return this;
  }
}

/**
 * CSS classes used by this component.
 * @enum {string}
 */
VideoModal.CssClass = {
  HIDDEN: 'hidden',
  HIDE_VIDEO: 'js-hide-video',
  SHOW_VIDEO: 'js-show-video',
  VIDEO_MODAL: 'js-video-modal',
  VIDEO_WRAPPER: 'js-video-wrapper'
};

export default VideoModal;
