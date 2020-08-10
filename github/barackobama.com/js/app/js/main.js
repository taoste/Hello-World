/* eslint-env browser */
import InquiryForm from 'components/inquiry-form';
import VideoModal from 'components/video';
import jQuery from 'jquery';
import _ from 'underscore';

(function(window, $) {
  'use strict';

  // Get SVG sprite file.
  // See: https://css-tricks.com/ajaxing-svg-sprite/
  $.get('/img/svg/sprites.svg', function(data) {
    const svgDiv = document.createElement('div');
    svgDiv.innerHTML = new XMLSerializer()
        .serializeToString(data.documentElement);
    $(svgDiv).css('display', 'none').prependTo('body');
  });

  // Navigation toggle.
  $('body').on('click', '.js-nav-toggle', _.debounce(e => {
    const $body = $(e.delegateTarget);
    e.preventDefault();
    $body.toggleClass('nav-active');
  }, 200, true));

  // Video player.
  $(`.${VideoModal.CssClass.VIDEO_MODAL}`).each(function() {
    const video = new VideoModal(this);
    video.init();
  });

  // Inquiry forms.
  $(`.${InquiryForm.CssClass.FORM}`).each(function() {
    const form = new InquiryForm(this);
    form.init();
  });

  // Helper function to enable elements to be hidden/shown based on the current
  // selected item in a select tag. Select list must have the class toggle-data,
  // and the option attribute must have a data-toggle attribute which specifies
  // a jQuery selector for the item to be shown/hidden.

  function storeDataToggleValue(elem) {
    var theValue = elem.options[elem.selectedIndex].getAttribute('data-toggle');
    $(elem).data('value', theValue);
  }

  $('.toggle-data').on('change', function() {
    var prevValue = $(this).data('value');

    var toggle = this.options[this.selectedIndex].getAttribute('data-toggle');
    var toggleClass = 'toggleTagClass';

    console.log(toggle);
    console.log(prevValue);
    if (prevValue !== toggle) {
      $('.' + toggleClass + ', ' + toggle).toggle().removeClass(toggleClass);
      $(toggle).addClass(toggleClass);
    }
    storeDataToggleValue(this);
  });
})(window, jQuery);
