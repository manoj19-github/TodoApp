import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  App: {
    border: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    boxSizing: 'border-box',
    overflow: 'hidden'
  },
  todo_container: {
    backgroundImage: 'linear-gradient(rgba(100, 0, 255, 0.6), blue, rgba(100, 0, 255, 0.6))',
    height: [{ unit: 'vh', value: 100 }],
    width: [{ unit: 'vw', value: 100 }],
    backgroundSize: 'cover',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'todo_container center_div': {
    height: [{ unit: 'vh', value: 80 }],
    width: [{ unit: 'vw', value: 40 }],
    'screen&&<w950': {
      width: [{ unit: '%H', value: 0.9 }]
    },
    'screen&&<w750': {
      width: [{ unit: '%H', value: 0.9 }]
    }
  },
  'todo_container center_div main_logo': {
    width: [{ unit: 'vw', value: 7 }],
    height: [{ unit: 'vh', value: 7 }]
  },
  'todo_container center_div to-parent': {
    marginTop: [{ unit: 'rem', value: 2 }],
    width: [{ unit: '%H', value: 0.8 }],
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column wrap',
    marginLeft: [{ unit: 'string', value: 'auto' }],
    marginRight: [{ unit: 'string', value: 'auto' }]
  },
  'todo_container center_div to-parent input-group input': {
    height: [{ unit: 'rem', value: 2.5 }],
    border: [{ unit: 'px', value: 0 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'grey' }],
    background: 'transparent'
  },
  'todo_container center_div to-parent input-group input-group-append span': {
    background: 'rgba(100, 0, 255, 0.6)',
    cursor: 'pointer'
  },
  'todo_container center_div to-parent list-group': {
    marginTop: [{ unit: 'rem', value: 3 }]
  },
  'todo_container center_div to-parent list-group list-group-item': {
    backgroundImage: 'linear-gradient(rgba(100, 0, 255, 0.6), rgba(0, 0, 255, 0.9), rgba(0, 0, 255, 0.9), rgba(100, 0, 255, 0.6))',
    color: 'white',
    textAlign: 'center',
    textTransform: 'capitalize'
  }
});
