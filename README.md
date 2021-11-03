# Hades Swap Interface

[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for Hades Swap -- a protocol for decentralized exchange of Ethereum tokens.


## Accessing the Hades Swap Interface

To access the Hades Swap Interface, use an IPFS gateway link from the
[latest release](https://github.com/hadeswap/hadeswap-interface/releases/latest),
or visit [hadeswap.finance](https://hadeswap.finance).

## Listing a token

Please see the
[Hadeswap token list](https://github.com/hadeswap/assets/blob/master/hadeswap-tokenlist.json)
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

Note that the interface only works on networks where both
[(Uni|Hades)swap V2](https://github.com/hadeswap/hadeswap/tree/master/contracts/uniswapv2) and
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.**
CI checks will run against all PRs.
