import { DidElement } from './Element';

const config = {
  applicationWalletPrivateKey: '',
  contentAddressableStoreServiceUri: '/ip4/127.0.0.1/tcp/5001',
  databaseName: '',
  didMethodName: '',
  ethereumRpcUrl: 'http://localhost:8545',
  mongoDbConnectionString: 'mongodb://localhost:27017',
  batchingIntervalInSeconds: 5,
  observingIntervalInSeconds: 5,
  maxConcurrentDownloads: 20,
  elementAnchorContract: '',
  versions: [
    {
      startingBlockchainTime: 0,
      version: 'latest',
    },
  ],
};

(async () => {
  const element = await DidElement.initialize(config);
  console.log(element);
})();
