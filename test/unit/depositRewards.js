const { ether, expectRevert, expectEvent, time } = require('@openzeppelin/test-helpers');
const { accounts } = require('@openzeppelin/test-environment');
const { assert } = require('chai');
const { setup } = require('./setup');

const firstContract = '0x0000000000000000000000000000000000000001';
const secondContract = '0x0000000000000000000000000000000000000002';

describe('depositRewards', function () {

  const [
    sponsor1
  ] = accounts;

  beforeEach(setup);

  it('should deposit rewards for a token', async function () {
    const { incentives, mockTokenA } = this;

    await mockTokenA.issue(sponsor1, 1e20.toString());

    const totalRewards = 1e18.toString();

    await mockTokenA.approve(incentives.address, totalRewards, {
      from: sponsor1
    });
    await incentives.depositRewards(firstContract, mockTokenA.address, totalRewards, {
      from: sponsor1
    });
  });
});