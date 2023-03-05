import { render as tlrRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../../store/store';

import ConnectWallet from './connectWallet';

const render = (component) => tlrRender(<Provider store={store}>{component}</Provider>);

test('Render wallet links', () => {
  render(
    <HashRouter basename='/'>
      <ConnectWallet />
    </HashRouter>
  );

  const metamaskLink = screen.getByText(/metamask/i);
  const coinbaseLink = screen.getByText(/coinbase/i);
  const walletConnectLink = screen.getByText(/wallet connect/i);

  expect(coinbaseLink).toBeInTheDocument();
  expect(metamaskLink).toBeInTheDocument();
  expect(walletConnectLink).toBeInTheDocument();
});
