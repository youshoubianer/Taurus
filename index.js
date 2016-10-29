if (process.argv[2] === 'sync') {
  require('./src/common/sync');
} else {
  require('./src/common/server');
}
