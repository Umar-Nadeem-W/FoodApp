import '../styles/innercontainer.css'
export default function InnerContainer({children}){
    return (<div className='innercontainer-styles'>
        {children}
    </div>)
}