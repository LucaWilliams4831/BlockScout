import React from 'react';

import config from 'configs/app';
import getErrorObj from 'lib/errors/getErrorObj';

import useProvider from './useProvider';

export default function useAddOrSwitchChain() {
  const { wallet, provider } = useProvider();

  return React.useCallback(async() => {
    if (!wallet || !provider) {
      return;
    }

    const hexadecimalChainId = '0x' + Number(config.chain.id).toString(16);

    try {
      return await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [ { chainId: hexadecimalChainId } ],
      });
    } catch (error) {

      const errorObj = getErrorObj(error);
      const code = errorObj && 'code' in errorObj ? errorObj.code : undefined;

      // This error code indicates that the chain has not been added to Wallet.
      if (code === 4902) {
        const params = {
          method: 'wallet_addEthereumChain',
          params: [ {
            chainId: hexadecimalChainId,
            chainName: config.chain.name,
            nativeCurrency: {
              name: config.chain.currency.name,
              symbol: config.chain.currency.symbol,
              decimals: config.chain.currency.decimals,
            },
            rpcUrls: [ config.chain.rpcUrl ],
            blockExplorerUrls: [ config.app.baseUrl ],
          } ],
          // in wagmi types for wallet_addEthereumChain method is not provided
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any;

        return await provider.request({
          method: 'wallet_addEthereumChain',
          params,
        });
      }

      throw error;
    }
  }, [ provider, wallet ]);
}
