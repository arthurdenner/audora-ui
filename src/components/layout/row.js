import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import responsive from '../../styles/responsive';
import { supportsCSSGrid } from '../../utils/detectFeature';

const legacyStyles = {
  display: 'block',

  [responsive.sm]: {
    width: `${6 * responsive.columnWidth}px`
  },

  [responsive.md]: {
    width: `${8 * responsive.columnWidth}px`
  },

  [responsive.mdLg]: {
    width: `${10 * responsive.columnWidth}px`
  },

  [responsive.lg]: {
    width: `${12 * responsive.columnWidth}px`
  },

  [responsive.xl]: {
    width: `${14 * responsive.columnWidth}px`
  }
};

const styles = {
  [responsive.xs]: {
    display: 'block'
  },

  [responsive.sm]: {
    display: 'grid',
    gridTemplateColumns: `repeat(6, ${responsive.columnWidth}px)`
  },

  [responsive.md]: {
    display: 'grid',
    gridTemplateColumns: `repeat(8, ${responsive.columnWidth}px)`
  },

  [responsive.mdLg]: {
    display: 'grid',
    gridTemplateColumns: `repeat(10, ${responsive.columnWidth}px)`
  },

  [responsive.lg]: {
    display: 'grid',
    gridTemplateColumns: `repeat(12, ${responsive.columnWidth}px)`
  },

  [responsive.xl]: {
    display: 'grid',
    gridTemplateColumns: `repeat(14, ${responsive.columnWidth}px)`
  }
};

const getMaxColumnsStyles = props => {
  const { maxColumns } = props;

  const override = supportsCSSGrid()
    ? {
        gridTemplateColumns: `repeat(${maxColumns}, ${
          responsive.columnWidth
        }px)`,
        justifyContent: 'center'
      }
    : {
        width: `${maxColumns * responsive.columnWidth}px`,
        margin: '0 auto'
      };

  if (maxColumns <= 6) {
    return {
      [responsive.md]: override,
      [responsive.mdLg]: override,
      [responsive.lg]: override,
      [responsive.xl]: override
    };
  } else if (maxColumns <= 8) {
    return {
      [responsive.mdLg]: override,
      [responsive.lg]: override,
      [responsive.xl]: override
    };
  } else if (maxColumns <= 10) {
    return {
      [responsive.lg]: override,
      [responsive.xl]: override
    };
  } else if (maxColumns <= 12) {
    return {
      [responsive.xl]: override
    };
  }

  return {};
};

const getFullWidthStyles = props => {
  const { screenWidths } = responsive;
  if (!props.forceFullPage) {
    return {};
  }

  return {
    width: '100vw',
    justifyContent: 'center',
    [responsive.xs]: {
      display: 'block',
      margin: `0 calc(-1 * (100vw - ${screenWidths.xs}px) / 2)`
    },

    [responsive.sm]: {
      display: 'block',
      margin: `0 calc(-1 * (100vw - ${screenWidths.sm}px) / 2)`
    },

    [responsive.md]: {
      display: 'block',
      margin: `0 calc(-1 * (100vw - ${screenWidths.md}px) / 2)`
    },

    [responsive.mdLg]: {
      display: 'block',
      margin: `0 calc(-1 * (100vw - ${screenWidths.mdLg}px) / 2)`
    },

    [responsive.lg]: {
      display: 'block',
      margin: `0 calc(-1 * (100vw - ${screenWidths.lg}px) / 2)`
    },

    [responsive.xl]: {
      display: 'block',
      margin: `0 calc(-1 * (100vw - ${screenWidths.xl}px) / 2)`
    }
  };
};

const Row = props => {
  const componentStyles = supportsCSSGrid() ? styles : legacyStyles;

  return (
    <div
      style={[
        componentStyles,
        getMaxColumnsStyles(props),
        getFullWidthStyles(props),
        props.style
      ]}
    >
      {props.children}
    </div>
  );
};

Row.propTypes = {
  /** Força linha com largura 100% -- Aui vai adicionar margem negativa */
  forceFullPage: PropTypes.bool,
  /**
   * Número máximo de colunas, esta linha deve crescer à medida que a largura
   * da tela aumenta. Não pode exceder 14.
   */
  maxColumns: PropTypes.number,
  /** Substituição opticional de estilo. */
  style: PropTypes.object
};

Row.defaultProps = {
  maxColumns: 14
};

export default Radium(Row);
