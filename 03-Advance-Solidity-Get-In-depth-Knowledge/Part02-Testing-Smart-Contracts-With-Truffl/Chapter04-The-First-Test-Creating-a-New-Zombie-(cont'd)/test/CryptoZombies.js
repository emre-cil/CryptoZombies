const CryptoZombies = artifacts.require('CryptoZombies');
const zombieNames = ['Zombie 1', 'Zombie 2'];
contract('CryptoZombies', (accounts) => {
  let [alice, bob] = accounts;
  it('should be able to create a new zombie', async () => {
    const contractInstance = await CryptoZombies.new();
  });
});
