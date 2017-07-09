exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://jeff:gunner@ds163181.mlab.com:63181/thinkful';
exports.PORT = process.env.PORT || 8080;