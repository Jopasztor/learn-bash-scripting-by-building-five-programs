const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "elif" statement added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');

    assert(false);
  });
});