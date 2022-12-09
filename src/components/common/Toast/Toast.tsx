import { Toast as PrimeToast } from 'primereact/toast'
import React from 'react'
import { Icon } from '@/components/common/Icon'

const toast: { current: PrimeToast | null } = { current: null }

const mappingIcon = {
  success: 'i-edso-tick-circle',
  error: 'i-edso-info-circle',
  warn: 'i-edso-close-square',
}

const mappingMessage = {
  success: 'Thành công',
  error: 'Lỗi',
  warn: 'Chưa thành công',
}

export const createToast = ({
  type = 'success',
  message,
  duration,
}: {
  type?: 'success' | 'error' | 'warn'
  message?: string
  duration?: number
}) =>
  toast.current?.show({
    severity: `toast-${type}` as any,
    life: duration || 3000,
    content: (
      <div className="w-full flex items-center">
        <Icon name={mappingIcon[type]} className="mr-3 text-2xl" />
        {message || mappingMessage[type]}
      </div>
    ),
  })

const Toast: React.FC = () => <PrimeToast className="Toast" ref={(ref) => (toast.current = ref)} />

export default Toast
