import styled from "styled-components";
import Footer from '../../assets/images/rodape.jpg'

export const Container = styled.div`
    background-image: url(${Footer});
    background-size:cover;
    height:300px;
    padding:30px 120px;
    color:#FFF;

    .logo{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:30px 0;
        

    }
    hr{
        background-color:#FFF;
    }
    .social {
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top:30px;

        .icons{
            display:flex;

            img{
                margin-left:10px;
            }
        }
        p{
            font-size:14px;
        }
    
        span{
            color:red;
        }
}
`