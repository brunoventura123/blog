import * as C from './styles'
import { Theme } from '../../components/Theme'
import She from '../../assets/images/she.png'
import { Botao } from '../../components/Botao'
import Ico1 from '../../assets/images/ico01.png'
import Ico2 from '../../assets/images/ico02.png'
import Ico3 from '../../assets/images/ico03.png'
import Ico4 from '../../assets/images/ico04.png'
import Foto2 from '../../assets/images/foto02.jpg'
import Foto3 from '../../assets/images/foto03.jpg'
import Foto4 from '../../assets/images/foto04.jpg'
import Foto5 from '../../assets/images/foto05.jpg'
import One from '../../assets/images/01-1.png'
import Two from '../../assets/images/02.png'
import Three from '../../assets/images/03.png'
import Four from '../../assets/images/04.png'
import Five from '../../assets/images/05.png'
import Six from '../../assets/images/06.png'
import Sapato from '../../assets/images/sapato.png'

export const Home = () => {

    return(
            <Theme>
                <C.Container>
                    <div className="she-info">
                        <div className="photo-text">
                            <img height="auto" width="500px" src={She} alt="She" />
                            <div className="she-text"><div className="margin"> <span>Olá</span> <br /> eu sou a <br /> Katheriny Ventura! <br /> <p> Sou consultora de imagem, formada em Gestão de Recursos Humanos, casada e apaixonada por ajudar meus clientes a descobrirem sua melhor versão!</p></div></div>
                        </div>
                        <div className="areatext">
                            <p className="text">Por mais de 10 anos, trabalhei na área comercial entregando soluções práticas para o dia a dia das pessoas e, em paralelo, sempre tive um pé no empreendedorismo. Foi só quando conheci a área de consultoria de imagem que descobri como aliar essas duas paixões – e decidi mudar completamente de carreira. O amor pela profissão começou logo no início, em 2016, quando percebi que poderia impulsionar a autoestima e a autoconfiança das pessoas ao ajudá-las a entender melhor seus gostos, estilos e objetivos.</p>
                            <Botao title="SAIBA MAIS"/>
                        </div>
                    </div>
                    <section className="section">
                        <div className="body">
                            <h2>conheça alguns dos motivos mais comuns para se procurar o processo de consultoria</h2>
                            <div className="line"><span></span></div>
                        </div>
                        <div className="area-image">
                            <div className="area">
                                <img src={Ico1} alt="" />
                                <h2>EXTERIORIZAR HABILIDADES E COMPETÊNCIAS</h2>
                            </div>
                            <div className="area">
                                <img src={Ico2} alt="" />
                                <h2>FACILITAR A ROTINA</h2>
                            </div>
                            <div className="area">
                                <img src={Ico3} alt="" />
                                <h2>AUMENTAR A AUTOESTIMA E A AUTOCONFIANÇA</h2>
                            </div>
                            <div className="area">
                                <img src={Ico4} alt="" />
                                <h2> ADEQUAR O GUARDA-ROUPA</h2>
                            </div>
                        </div>
                        <Botao title="SAIBA MAIS"/>
                    </section>
                    <section className="section2">
                    <div className="div">
                        <div className="border">
                            <p>“A beleza começa no momento que <br /> você decide ser você mesma.” <br /><br /> Coco Chanel</p>
                        </div>
                        </div>
                    </section>
                    <section className="section3">
                        <div className="line"><span></span><h2>COMO FUNCIONA O PROCESSO</h2><span></span></div>
                        <div className="container">
                            <div className="grid-element spin">
                                <img src={One} alt="" />
                                <p>ANÁLISE <br /> PESSOAL</p>
                            </div>
                            <div className="grid-element">
                                <img src={Foto2} alt="" />
                            </div>
                            <div className="grid-element spin">
                                 <img src={Two} alt="" />
                                <p>CLOSET<br /> DETOX</p>
                            </div>
                            <div className="grid-element spin">
                                <img src={Three} alt="" />
                                <p>PERSONAL<br /> SHOPPING</p>
                            </div>
                        
                            <div className="grid-element ">
                                <img src={Foto3} alt="" />
                            </div>
                            <div className="grid-element spin">
                                <img src={Four} alt="" />
                                <p>VISAGISMO</p>
                            </div>
                            <div className="grid-element ele1">
                                <img src={Foto4} alt="" />
                            </div>
                            <div className="grid-element spin">
                                <img src={Five} alt="" />
                                <p>Montagem<br /> de Looks</p>
                            </div>
                            <div className="grid-element ele2">
                                <img src={Foto5} alt="" />
                            </div>
                            <div className="grid-element spin">
                                <img src={Six} alt="" />
                                <p>Guia de Estilo<br /> Personalizado</p>
                            </div>
                        </div>
                        <Botao title="CONHEÇA OS PACOTES"/>
                    </section>
                    <section className="contact">
                        <div className="photoarea">
                            <img src={Foto5} alt="" />
                        </div>
                        <div className="formarea">
                            <form className="form" method="POST">
                                <h2>ENTRE EM CONTATO</h2>
                                <input type="text" name="name" id="" placeholder="Nome" />
                                <input type="number" name="phoneNumber" id="" placeholder="Telefone"/>
                                <input type="email" name="email" id="" placeholder="E-mail"/>
                                <textarea name="message" id="" cols={30} rows={10} placeholder="Mensagem"></textarea>
                                <input type="submit" value="Enviar" />
                            </form>
                        </div>
                    </section>
                    <div className="color"></div>
                </C.Container>
            </Theme>
    )
}