import { ClassValue, cn as _cn } from 'tailwind-variants'

import { TV_CONFIG } from '@/common/config/tailwind'

export function cn(...inputs: ClassValue[]) {
  return _cn(inputs)(TV_CONFIG)
}
