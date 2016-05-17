/**
 * @file This is a tag plugin for the Hexo static site generator.
 * @copyright Doug Bromley 2015-2016
 * @author Doug Bromley
 * @license MIT
 */
hexo.extend.tag.register('deezer', function(args) {

  var url = 'http://www.deezer.com/plugins/player';

  var trackId = args[0];
  var format = args[1] || 'classic';
  var size = args[2] || 'medium';
  var autoplay = args[3] || 'false';
  var playlist = args[4] || 'false';

  var width = '700';
  var height = '120';

  if (format === 'square') {
    width = '300';
    height = '300';
  }

  var config = hexo.config.deezer || {};
  config.theme = config.theme || 'dark';
  config.colour = config.colour || '1990DB';

  var iframeTag = '<iframe src="' + url +
      '?format=' + format +
      '&autoplay=' + autoplay +
      '&playlist=' + playlist +
      '&width=' + width +
      '&height=' + height +
      '&color=' + config.colour +
      '&layout=' + config.theme +
      '&size=' + size +
      '&type=tracks' +
      '&id=' + trackId +
      '&title=&app_id=161645"' +
      ' scrolling="no"' +
      ' frameborder="0"' +
      ' allowTransparency="true"' +
      ' width="' + width + '" height="' + height + '">' +
      '</iframe>';

  return iframeTag;
});
