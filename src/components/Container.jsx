import '../styles/container.css'


export default function Container({children}){ //All child widgets are automatically children of the parent
return (<div className='frc-styles'>{children}</div>)//Need to be in a div since objects arent valud as a react child
}