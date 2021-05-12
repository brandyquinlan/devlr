import { toast } from 'react-toastify'

export default function Toast(variant, text, duration) {
  switch (variant) {
    case 'error':
      return toast.error(`${text}`, {
        position: 'top-center',
        autoClose: duration,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    case 'success':
      return toast.success(`${text}`, {
        position: 'top-center',
        autoClose: duration,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    default:
      throw new Error('Not a variant')
  }
}
