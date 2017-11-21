/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('zipList', function () {
  const testNums1 = [1, 2, 3];
  const testNums2 = ['a', 'b', 'c'];
  describe('zipList()', function () {
    it('should return 6 for zipList length', function () {
      chai.expect(zipList(testNums1, testNums2).length).to.equal(6);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should return 6 for zipListTheSimpleWay length', function () {
      chai.expect(zipListTheSimpleWay(testNums1, testNums2).length).to.equal(6);
    });
  });
});
