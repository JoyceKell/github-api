import './styles.css'

export default function Profile(){
    return(
        <>
        <div className="container">
          <div className='imagem'>
          <img
          src="https://avatars.githubusercontent.com/u/85644063?v=4" 
          alt="picture of user"
          />
            <h3>Username:  <a href="https://github.com/JoyceKell" target="_blank" rel="noreferrer">JoyceKell</a></h3>
          </div>    
         </div>
        </>
    )
}