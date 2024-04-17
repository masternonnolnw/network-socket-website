import { TV, tv as _tv } from 'tailwind-variants'

import { TV_CONFIG } from '@/common/config/tailwind'

export const tv: TV = (option, config) =>
  _tv(option, {
    ...config,
    ...TV_CONFIG,
  })
