(function()
{
    'use strict';

    requirejs.config({
        paths:
        {
            'jquery'  : '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
            'webfont' : '//ajax.googleapis.com/ajax/libs/webfont/1.4.6/webfont'
        }
    });

    require(['webfont'], function ()
    {
        WebFont.load({
            google:
            {
                families: ['Inconsolata:400,700', 'Ubuntu:700', 'PT+Sans:400,700,400italic,700italic:latin']
            }
        });
    });

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-41593502-1']);
    _gaq.push(['_gat._anonymizeIp']);
    _gaq.push(['_setDomainName', 'none']);
    _gaq.push(['_setVisitorCookieTimeout', 0]);
    _gaq.push(['_setSessionCookieTimeout', 0]);
    _gaq.push(['_setCampaignCookieTimeout', 0]);
    _gaq.push(['_setCampaignTrack', false]);
    _gaq.push(['_setClientInfo', false]);
    _gaq.push(['_setDetectFlash', false]);
    _gaq.push(['_trackPageview']);

    require(['http://www.google-analytics.com/ga.js']);
})();