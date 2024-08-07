document.addEventListener('deviceready', function() {
            // HTTP GET request to the Node.js server
            cordova.plugin.http.get('http://192.168.123.107:8080', {}, {},
                function(response) {
                    // success callback
                   alert('success');
                },
                function(response) {
                    // error callback
                    alert('error');
                });
        }, false);