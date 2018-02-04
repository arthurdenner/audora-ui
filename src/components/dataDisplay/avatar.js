import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { borderRadius } from '../../styles';
import { colorRandom, colorContrast } from '../../utils';

/**
 * TODO: add with tooltip
 */

const getBaseStyle = () => {
  const backgroundColor = colorRandom();

  return {
    alignItems: 'center',
    backgroundColor,
    color: colorContrast(backgroundColor),
    cursor: 'default',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    userSelect: 'none'
  };
};

const sizeStyle = {
  tiny: {
    fontSize: 9,
    height: 18,
    width: 18
  },
  small: {
    fontSize: 11,
    height: 24,
    width: 24
  },
  medium: {
    fontSize: 15,
    height: 32,
    width: 32
  },
  large: {
    fontSize: 20,
    height: 56,
    width: 56
  },
  huge: {
    fontSize: 25,
    height: 84,
    width: 84
  }
};

const typeStyle = {
  circle: {
    ...borderRadius.BORDER_RADIUS_CIRCLE
  },
  square: {
    borderRadius: '20%'
  }
};

const Avatar = ({ onClick, style, size, img, square, name }) => {
  const baseStyle = getBaseStyle();

  return (
    <div
      onClick={onClick}
      style={[
        baseStyle,
        sizeStyle[size],
        typeStyle[square ? 'square' : 'circle'],
        style
      ]}
      title={name || 'Avatar'}
    >
      {!img ? (
        name.substr(0, 2).toUpperCase()
      ) : (
        <span
          style={[
            sizeStyle[size],
            typeStyle[square ? 'square' : 'circle'],
            {
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundImage: `url(${img})`
            }
          ]}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Title to avatar.
   */
  name: PropTypes.string,
  /**
   * URL of image.
   */
  img: PropTypes.string,
  /**
   * Optitional style replacement.
   */
  style: PropTypes.object,
  /**
   * Handler to be called when the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Sets the avatar as square.
   */
  square: PropTypes.bool,
  /**
   * Avatar size.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
};

Avatar.defaultProps = {
  name: '',
  img: '',
  style: {},
  square: false,
  onClick: () => 0,
  size: 'medium'
};

export default Radium(Avatar);