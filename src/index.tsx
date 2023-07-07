
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import API_KEYS from '../config.json'

import { DAppProvider, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider('goerli', {
      
      alchemy: API_KEYS.ALCHEMY_API_KEY

  }),
  },
}

const rootElement = document.getElementById('root');

if (rootElement) 
{
    const root = createRoot(rootElement);

    root.render
    (
        <React.StrictMode>
          <DAppProvider config={config}>
            <App />
          </DAppProvider>
        </React.StrictMode>
    )
}
