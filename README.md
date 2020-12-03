# db_mysql_node_express

- Let's learn how to run MYSQL database through NODE & Express

# Dependencies to install

```
npm install node
```

```
npm install express
```

```
npm install mysql
```

# Example to initialize a connection

```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

```

# The recommend it way to do this is the following:

```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
However, a connection can also be implicitly established by invoking a query:

var mysql      = require('mysql');
var connection = mysql.createConnection(...);

connection.query('SELECT 1', function (error, results, fields) {
  if (error) throw error;
  // connected!
});

```

# Recommendation

- Use localhost to run your test, I normally run my test with localhost:3000

# Connection Options

- host: The hostname of the database you are connecting to. (Default: localhost)
- port: The port number to connect to. (Default: 3306)
- localAddress: The source IP address to use for TCP connection. (Optional)
- socketPath: The path to a unix domain socket to connect to. When used host and port are ignored.
- user: The MySQL user to authenticate as.
- password: The password of that MySQL user.
- database: Name of the database to use for this connection (Optional).
- charset: The charset for the connection. This is called "collation" in the SQL-level of MySQL (like utf8_general_ci). If a SQL-level charset is specified (like utf8mb4) then the default collation for that charset is used. (Default: 'UTF8_GENERAL_CI')
- timezone: The timezone configured on the MySQL server. This is used to type cast server date/time values to JavaScript Date object and vice versa. This can be 'local', 'Z', or an offset in the form +HH:MM or -HH:MM. (Default: 'local')
- connectTimeout: The milliseconds before a timeout occurs during the initial connection to the MySQL server. (Default: 10000)
- stringifyObjects: Stringify objects instead of converting to values. See issue #501. (Default: false)
- insecureAuth: Allow connecting to MySQL instances that ask for the old (insecure) authentication method. (Default: false)
- typeCast: Determines if column values should be converted to native JavaScript types. (Default: true)
- queryFormat: A custom query format function. See Custom format.
- supportBigNumbers: When dealing with big numbers (BIGINT and DECIMAL columns) in the database, you should enable this option (Default: false).
- bigNumberStrings: Enabling both supportBigNumbers and bigNumberStrings forces big numbers (BIGINT and DECIMAL columns) to be always returned as JavaScript String objects (Default: false). Enabling supportBigNumbers but leaving bigNumberStrings disabled will return big numbers as String objects only when they cannot be accurately represented with JavaScript Number objects (which happens when they exceed the [-2^53, +2^53] range), otherwise they will be returned as Number objects. This option is ignored if supportBigNumbers is disabled.
- dateStrings: Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather than inflated into JavaScript Date objects. Can be true/false or an array of type names to keep as strings. (Default: false)
- debug: Prints protocol details to stdout. Can be true/false or an array of packet type names that should be printed. (Default: false)
- trace: Generates stack traces on Error to include call site of library entrance ("long stack traces"). Slight performance penalty for most calls. (Default: true)
- localInfile: Allow LOAD DATA INFILE to use the LOCAL modifier. (Default: true)
- multipleStatements: Allow multiple mysql statements per query. Be careful with this, it could increase the scope of SQL injection attacks. (Default: false)
- flags: List of connection flags to use other than the default ones. It is also possible to blacklist default ones. For more information, check Connection Flags.
- ssl: object with ssl parameters or a string containing name of ssl profile. See SSL options.
