router
======

This is a 'scratch-my-own-itch' router that will route requests based on request address to an internal service based on port.

To configure, copy `sample_conf.js` to `conf.js` and edit accordingly.



conf.js
-------

The `config` object has the following settings:

* `port` is the port that the router will accept requests on
* `default_host` will be used if a target is configured as a port number
* `routing_table` is a map of requests to targets. A target can be a full hostname or simply a port number.

For example:
```
{
    "port": 80,
    "default_host": "http://localhost",
    "routing_table": {
        "example.com": "http://another-example.com",
        "foo.com": 8080  
    }
}
```

In the example above, router will accept requests on port 80. Any requests to 'example.com' will be forwarded to 'another-example.com'.
Any requests to 'foo.com' will be forwarded to 'localhost:8080'.
