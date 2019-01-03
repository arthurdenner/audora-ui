import system from 'system-components'
import { getColor } from './selectors'

const Input = system(
  {
    is: 'input',
    fontFamily: 'sans',
    m: 0,
    borderRadius: 3,
    fontWeight: 'normal',
    fontSize: 2,
    border: 1,
  },
  props => ({
    outline: 'none',
    userSelect: 'none',
    cursor: 'text',
    display: 'flex',
    boxSizing: 'border-box',
    alignSelf: 'center',
    justifyContent: 'center',
    width: `${props.full ? '100%' : 'auto'}`,

    ...getColor(props),

    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },

    '&:active': {
      boxShadow: 'none',
    },
  })
)

Input.displayName = 'Input'

export default Input
