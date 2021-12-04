import styled from "styled-components";


export const Container = styled.div`

    .she-info{
        display:flex;
        flex-direction:column;
        justify-content:center;
        background-color:#FFF;
        align-items:center;
        padding:150px 0;

        .photo-text{
            display:flex;
            justify-content:center;
            background-color:#FFF;
            align-items:center;
            
        
        .she-text{
            background-color:#a1a1a1;
            width:auto;
            max-width:400px;
            height: 430px;
            font-size:22px;
            font-weight:500;
            padding: 0 50px 50px 100px;
            margin-left:-80px;
            margin-bottom:-70px;
            color:#333;

            .margin{
                margin-top:-60px;
            }

            span{
                font-size:100px;
                font-family:Segoi UI;
                font-family: 'Comforter Brush', cursive;
            }
            p{
                font-weight:normal;
                font-size:20px;
                margin-top:30px;
                color:#222;
            }
        }
    }
    .areatext{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    .text{
        padding:50px;
        max-width:900px;
        font-size:17px;
        line-heigth:23px;
    }
    }

    .section{
        background-color:#ededed;
        width:100%;
        text-align:center;
        padding:100px 100px;
        
        .body{
            width:100%;
            
        
        h2{
            font-size:33px;
            color:#470e2f;
            text-transform:uppercase;
            font-family:Cinzel;
            max-width:900px;
            margin:auto;
        }
        .line{
            height:1px;
            max-width:400px;
            background-color:#888;
            margin:auto;
            margin-top:30px;
        }
    }
    .area-image{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        margin-top:80px;

        .area{
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            justify-content:center;
            text-align:start;
            width:50%;
            margin-bottom:70px;
            
            img{
                width:125px;
                height:125px;
            }
            h2{
                font-size:19px;
                margin-left:20px;
                max-width:180px;
                font-weight:500;
                color:#444;
            }
        }

       
    }
    }
    .section2 {
        height:415px;
        display:block;
        background-image: url('https://luciananikipa.com.br/novosite/wp-content/uploads/2020/03/cabides.jpg');
        background-size: cover;
        position:relative;
        margin-bottom:100px;

        .div{
            background-color:rgba(0,0,0,0.7);
            padding:50px;
            height:100%;
            width:100%;
            position:absolute;

            .border{
                display: flex;
                justify-content:center;
                align-items:center;
                height:100%;
                width:100%;
                border:1px solid #FFF;
                color:#FFF;
                font-size:34px;
                text-align:center;
                
                
            }
        }
    }

    .section3{
        padding:50px 120px;
        margin:auto;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;


        .line {
            display:flex;
            justify-content:center;
            align-items:center;
            margin-bottom:50px;

            span{
                width:150px;
                height:1px;
                background-color:#ccc;
        }

            h2{
                font-size:32px;
                color:#333;
                margin:0 20px;
            }
    }
        .container{
            display:grid;
            grid-template-columns:repeat(4, 1fr);
            gap:10px;
            justify-content:center;

            .spin{

                img{
                    width:60% !important;
                    height:60% !important;
                }
                
                &:hover{
                    transform: scale(-1, 1);
                }
            }

                .grid-element{
                    background-color:#3c0b27;
                    transition:all ease .5s;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;


                    img{
                        height:100%;
                        width:100%;
                    }
                    p{
                        position:absolute;
                        color:#FFF;
                        font-size:22px;
                        opacity:1;
                        transition:all ease .3s;
                        z-index:99;


                    }
    
            }
           
            .ele1{
                grid-column-start:3;
                grid-column-end:5;
            }
            .ele2{
                grid-column-start:2;
                grid-column-end:4;
            }
        }
    }

    .contact{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 120px;
        margin-top:100px;
        

        .photoarea{
            width:50%;
            margin:auto;
            margin-right:20px;
            margin-bottom:-50px;
            img{
                width:100%;
                height:500px;
            }
        }
        .formarea{
            display:flex;
            flex-direction:column;
            flex:1;
            margin-left:20px;
            

            h2{
                font-size:40px;
                margin-bottom:20px;
                font-weight:300;
            }

            input, textarea{
                color: #54595F;
                background-color:#ededed;
                width:100%;
                margin-bottom:10px;
                padding:6px 16px;
                height:47px;
            }
            textarea{
                height:100px;
                resize:none;
            }
            input[type="submit"]{
                background-color:#666;
                color:#FFF;
                font-size:20px;
                cursor:pointer;

                &:hover{
                    background-color:#470e2f;
                }
            }
        }
    }

    .color{
        height:200px;
        width:100%;
        background-color:#470e2f;
    }
`