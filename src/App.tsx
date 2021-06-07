import React from 'react';
import logo from './logo.svg';
import {
  ExtensionNetworkOnlyWalletProvider,
  NetworkInfo,
  RouterWalletStatusRecheck,
  WalletProvider,
} from '@terra-money/wallet-provider';

import './App.css';
import Auth from './pages/Auth';
import Connect from "./layouts/Connect";

export const onProduction =
  global.location.host === 'app.anchorprotocol.com' ||
  global.location.host === 'app.anchor.money' ||
  global.location.host === 'app.anchor.market' ||
  global.location.host === 'anchorprotocol.com' ||
  global.location.host === 'anchor.money' ||
  global.location.host === 'anchor.market';

  export const defaultNetwork = {
    chainID: 'columbus-4',
    fcd: 'https://fcd.terra.dev',
    lcd: 'https://lcd.terra.dev',
    name: 'mainnet',
    ws: 'wss://fcd.terra.dev',
  };

const walletConnectChainIds: Record<number, NetworkInfo> = {
  0: {
    name: 'testnet',
    chainID: 'tequila-0004',
    lcd: 'https://tequila-lcd.terra.dev',
  },
  1: {
    name: 'mainnet',
    chainID: 'columbus-4',
    lcd: 'https://lcd.terra.dev',
  },
};


function App() {

  // const createReadonlyWalletSession = useCallback(
  //   (networks: NetworkInfo[]): Promise<ReadonlyWalletSession | null> => {
  //     return openReadonlyWalletSelector({
  //       networks,
  //     });
  //   },
  //   [openReadonlyWalletSelector],
  // );
  
  return (
    <WalletProvider
    defaultNetwork={defaultNetwork}
    walletConnectChainIds={walletConnectChainIds}
    connectorOpts={{
      bridge: onProduction
        ? 'https://walletconnect.terra.dev/'
        : 'https://tequila-walletconnect.terra.dev/',
    }}
    //createReadonlyWalletSession={createReadonlyWalletSession}
  >
    <div className="App">
      <header className="App-header">
      <Connect/>
      {/* <Auth/> */}
        
      </header>
    </div>
    </WalletProvider>
  );
}

export default App;
