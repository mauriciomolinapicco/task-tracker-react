import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
      </header>
    </div>
  )
}

Header.defaultProps = {
    title:'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css en js
// const headingStyle = {
//     color:'red', backgroundColor: 'black', 
// }

export default Header
