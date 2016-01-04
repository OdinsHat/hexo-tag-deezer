# About

[![npm version](https://badge.fury.io/js/hexo-tag-deezer.svg)](https://badge.fury.io/js/hexo-tag-deezer)

This is a [Hexo](https://hexo.io) tag plugin for including a [Deezer](http://www.deezer.com) track playing widget into your pages/posts. Examples of what they can look like are below:

![https://raw.githubusercontent.com/OdinsHat/hexo-tag-deezer/master/deezer-widget-1.png](https://raw.githubusercontent.com/OdinsHat/hexo-tag-deezer/master/deezer-widget-1.png)

![https://raw.githubusercontent.com/OdinsHat/hexo-tag-deezer/master/deezer-widget-2.png](https://raw.githubusercontent.com/OdinsHat/hexo-tag-deezer/master/deezer-widget-2.png)

# Installation
The same as other Hexo plugins its simply:

```npm install --save hexo-tag-deezer```

In your Hexo project root.

# Usage

The full tag format is as follows:

```
{% deezer track_id [[format] [size [autoplay [playlist]]]] %}
```

Example to get the above square Depeche Mode track it would be 

```
{% deezer 3135556 square %}
```

# Global Tag Configuration

There's just 3 global variables you can set in yoru main _config.yml.

* theme - either `light` or `dark`
* colour - a hex representation of the overall colour of the widgets trim. **Without** the #.
* appid - if you wish to track the usage of your Deezer widgets you can create an app at Deezer and use your given app id here.

Here's an example config:

```
deezer:
    theme: dark
    colour: AA0000
    appid: 8769876
```

# Example in the Wild
And last but not least here's an example of it working on my Hexo-powered [web dev & tech blog](http://www.dougbromley.com/2015/07/Hexo-Deezer-Tag-Plugin/)
