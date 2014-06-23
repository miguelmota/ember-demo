window._r || (window._r = {});

_r.param = function(name) {
    try {
        var queryParams = (window.location.href.split('?')[1]).split('=');
        if (queryParams.indexOf(name) > -1) {
            return queryParams[queryParams.indexOf(name) + 1];
        }
    } catch(e) {
        console.info(e);
    }
};
