hexo.extend.tag.register('deezer', function(args, content){
    
    var url = 'http://www.deezer.com/plugins/player';

    var trackId = args[0],
        format = args[1] || 'classic',
        size = args[2] || 'medium',
        autoplay = args[3] || 'false',
        playlist = args[4] || 'false';

    var width = '700';
    var height = '290';

    if (format === 'square') {
        width = '300';
        height = '300';
    }

    var config = hexo.config.deezer || {};
    config.theme = config.theme || 'dark';
    config.appId = config.appId || 1;
    config.colour = config.colour || '1990DB';

    var iframeTag = '<iframe src="' + src +
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
        '&title=&app_id=' + config.appId + 
        ' scrolling="no"' + 
        ' frameborder="0"' +
        ' allowTransparency="true"' + 
        ' width="' + width + '" height="' + height + '">' + 
        '</iframe>';

    return iframeTag;

}, options);