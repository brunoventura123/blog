import * as C from './styled'
import Logo from '../../assets/images/logo.png'
import zap from '../../assets/images/zap.png'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/face.png'

export const Footer = () => {
    return(
        <C.Container>
            <div className="logo">
                <div>
                    <img width="300px" height="40px" src={Logo} alt="Foto" />
                </div>
                <p>(33) 99999-4528 <br /><a href="#">katherinyventura@gmail.com</a></p>
            </div>
            <hr />
            <div className="social">
                <div className="icons">
                    <a href="#"><img width="20px" src={zap} alt="" /></a>
                    <a href="#"><img width="20px" src={insta} alt="" /></a>
                    <a href="#"><img width="20px" src={face} alt="" /></a>
                </div>
                <div>
                    <p>&copy; Copyright - Desenvolvido com <span>❤</span>  por <a href="#">Bruno Ventura</a></p>
                </div>
            </div>
        </C.Container>
    )
}