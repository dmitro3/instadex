import { INSTACOIN_ID } from './'

export const onoutUrl = 'https://onout.org'
export const originUrl = 'https://noxon.wpmix.net'
export const onoutFeeAddress = '0x91495e1CEc7eCAFfbD3C06dB3C86810ADab6A2bF'

export const requiredPaymentNetworkId = process.env.NODE_ENV === 'production' ? INSTACOIN_ID : 1132025

export enum Addition {
  switchCopyright = 1,
  premiumVersion = 2,
}

export interface PaidAddition {
  id: Addition
  usdCost: number
}

export type AdditionName = 'switchCopyright' | 'premiumVersion'

export const paidAdditions: {
  [name in AdditionName]: PaidAddition
} = {
  switchCopyright: {
    id: Addition.switchCopyright,
    usdCost: 30,
  },
  premiumVersion: {
    id: Addition.premiumVersion,
    usdCost: 1_000,
  },
}
