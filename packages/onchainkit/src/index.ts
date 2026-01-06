export { OnchainKitProvider } from './OnchainKitProvider';
export { useOnchainKit } from './useOnchainKit';
export { version } from './version';
export type { OnchainKitProviderReact } from './types';

export { isBase } from './core/utils/isBase';
export { isEthereum } from './core/utils/isEthereum';
export {
  getOnchainKitConfig,
  setOnchainKitConfig,
} from './core/OnchainKitConfig';
export type {
  AppConfig,
  IsBaseParams,
  IsEthereumParams,
  OnchainKitConfig,
  OnchainKitContextType,
} from './core/types';
import './styles/index.css';

export { Connected } from './connected';

import './styles/index.css';
import express from 'express';

const app = express();

// Health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('Service is up and running');
});

// Other routes go here

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
