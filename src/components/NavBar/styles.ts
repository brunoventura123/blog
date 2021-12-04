import styled from "styled-components";

export const Container = styled.div`

    li {

        
        a{
        margin-right:40px;
        text-decoration:none;
        color:#FFF;

        
        }
        .p{
            margin-right:40px;
            cursor:pointer;
            display:flex;
            align-items:center;

            img{
                width:10px;
                height:10px;
                margin-left:7px;
                margin-top:3px;
                transform:rotate(90deg);
            }
        }

        .ulModal{
            position:absolute;
            margin-top:10px;
            border-top:2px solid #470e2f;
            background-color:#FFF;
            box-shadow:0px 0px 3px #111;
            
            li {
                border-bottom:1px solid #ccc;
                padding:10px;
                cursor:pointer;

                &:hover{
                    background-color:#f3f3f3;
                }

                span{
                color:#000;
                font-size:12px;

                
            }
        }
    }
}
`