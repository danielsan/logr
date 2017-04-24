# logr
Bunyan / Pino Logger instance ready to use

Bunyan is really great for debugging purposes but Pino is crazily fast.

Thinking about that this package was created to use Bunyan whenever the
LOG_LEVEL environmental variable is set to ```debug``` or ```trace```;

# INSTALL

    npm install --save "git+ssh://git@github.com:danielsan/logr.git"

It might create and entry in your ```packages.json``` like this:

    "logr": "ssh://git@github.com:danielsan/logr.git"

Some versions of npm might not understand that when you run npm install
in your project. If that is the case you will need to mannually change
your entry adding the **git+** before the **ssh://**. Like this:

    "logr": "git+ssh://git@github.com:danielsan/logr.git"

