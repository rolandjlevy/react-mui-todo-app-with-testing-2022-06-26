import { makeStyles } from '@material-ui/core/styles';

const TodoStyles = makeStyles((theme) => ({
  '@keyframes fadeInAnimation': { 
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  todo: {
    display: 'inline-block',
    width: 'fit-content',
    borderRadius: 3,
    padding: '5px 10px',
    margin: 0,
    animation: '$fadeInAnimation ease-in 0.25s',
    animationIterationCount: 1, 
    animationFillMode: 'forwards',
  },
  description: {
    marginRight: 5,
    color: 'black',
  },
  remove: {
    padding: 2,
    background: '#94880a',
    color: '#ffffff',
    borderRadius: 3,
    width: 16,
    height: 16,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s ease',
  }
}));

export default TodoStyles;
