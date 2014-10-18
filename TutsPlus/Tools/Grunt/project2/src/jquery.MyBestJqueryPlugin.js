/*
 * MyBestJqueryPlugin
 * 
 *
 * Copyright (c) 2014 Rafal Wesolowski
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.MyBestJqueryPlugin = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.MyBestJqueryPlugin = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.MyBestJqueryPlugin.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.MyBestJqueryPlugin.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].MyBestJqueryPlugin = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
