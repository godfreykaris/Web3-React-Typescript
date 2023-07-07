
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { DAppProvider, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider('goerli', {
      
      alchemy: YOUR_ALCHEMY_API_KEY_HERE

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
