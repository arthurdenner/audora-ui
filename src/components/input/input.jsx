import styled from 'styled-components'
import PropTypes from 'prop-types'
import { variant } from 'styled-system'
import chroma from 'chroma-js'
import Flex from '../flex'
import { themed } from '../../utils'

const inputSize = variant({
  key: 'inputSizes',
  prop: 'size',
})

const Input = styled(Flex)(
  props => ({
    appearance: 'none',
    outline: 'none',
    alignSelf: 'center',
    textDecoration: 'none',
    fontWeight: 'normal',
    fontFamily: 'inherit',
    border: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingTop: props.theme.space[2],
    paddingBottom: props.theme.space[2],
    paddingLeft: props.theme.space[3],
    paddingRight: props.theme.space[3],
    fontSize: props.theme.fontSizes[2],
    color: props.theme.colors.black,
    backgroundColor: props.theme.colors.white,
    borderColor: props.error
      ? chroma(props.theme.colors.danger[0])
          .alpha(0.4)
          .css()
      : props.theme.colors.default[1],
    width: props.full ? '100%' : 'auto',
    '&::placeholder': {
      color: props.error
        ? chroma(props.theme.colors.danger[0])
            .alpha(0.4)
            .css()
        : props.theme.colors.default[2],
    },
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
    '&:hover': {
      borderColor: props.error
        ? props.theme.colors.danger[1]
        : props.theme.colors.default[2],
    },
    '&:focus': {
      zIndex: 1,
      borderColor: props.error
        ? props.theme.colors.danger[1]
        : props.theme.colors.primary[1],
      boxShadow: `${chroma(
        props.error
          ? props.theme.colors.danger[0]
          : props.theme.colors.primary[0]
      )
        .alpha(0.4)
        .css()} 0 0 0 ${props.theme.space[1]}px`,
      '&::placeholder': {
        color: props.error
          ? props.theme.colors.danger[0]
          : props.theme.colors.grey[0],
      },
    },
  }),
  inputSize,
  themed('Input')
)

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Input.defaultProps = {
  as: 'input',
}

export default Input
