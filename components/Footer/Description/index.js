import {useState} from 'react'

import {Container} from './styles'

export default function Description() {
    const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)

    
    return (
        <Container>
            <div className = 'copywrite' >
             © Mas Nem Peixe | Todos os direitos reservados.
            </div>

            <figure>
                <img src = '/logo.webp' alt = 'logotipo'/>
            </figure>

            <h3 className = 't1' >
                Bem-vindo à Mas Nem Peixe?, A Sua Loja Vegana Favorita!
            </h3>

            <p className = 'p1'>
                Sabe aquela dificuldade em encontrar produtos veganos com procedência confiável?
                então... ela acabou! a  “Mas Nem Peixe?” 
                chega para integrar ao veganismo o estilo nerd e criativo,
                com uma  pegada de bom humor que vai alegrar o seu dia.
            </p>

            <p className = 'p1 mobile'>
                Sabe aquela dificuldade em encontrar produtos veganos com procedência confiável?
                então... ela acabou! <br/> a  “Mas Nem Peixe?” 
                chega para integrar ao veganismo o estilo nerd e criativo,
                com uma  pegada de bom humor que vai alegrar o seu dia.
            </p>

            <p className = 'p2'>
                Aqui você encontra artigos de decoração e uso pessoal pensados especialmente em você!<br/>
                Nossas <a href = '/canecas' >canecas</a> vão te ajudar a sair da rotina e dar uma cara nova ao seu home office, 
                com os temas mais variados, por exemplo : séries, filmes, anime, ativismo e os melhores memes.
            </p>

            <p className = 'p2 mobile'>
                Aqui você encontra artigos de decoração e uso pessoal pensados especialmente em você!<br/>
                Nossas <a href = '/canecas' >canecas</a> vão te ajudar a sair da rotina e dar uma cara nova ao seu home office, 
                com os temas mais variados, por exemplo : séries, filmes, anime, ativismo e os melhores memes.
            </p>

            <p className = 'p3'>
            Em breve teremos uma  diversidade de produtos, mas para você não perder nenhuma novidade, 
            é importante se <a href = '/cadastro' >cadastrar</a>, assim você fica por dentro de tudo!<br/> 
            Também não vai vacilar e esquecer 
            de nos seguir no <a href = 'https://www.facebook.com/Loja.MNP' target = '_blank' >Facebook</a> e <a href = 'https://www.instagram.com/masnempeixeoficial/' target = '_blank' >Instagram</a> além dos melhores spoilers do que está por vir tem dicas, 
            indicações, memes, receitas e etc. <br/>
            E se quiser saber mais sobre a gente é só dar uma passadinha no <a href = '/sobre' >sobre nós</a> . Éh depois disso podemos 
            dizer que já somos amigos, então sinta-se a vontade para tirar qualquer dúvida, estamos prontos 
            para te ajudar no que precisar C:
            </p>

            <p className = 'p3 mobile'>
            Em breve teremos uma  diversidade de produtos, mas para você não perder nenhuma novidade, 
            é importante se <a href = '/cadastro' >cadastrar</a>, <br/>
            assim você fica por dentro de tudo!<br/> 
            Também não vai vacilar e esquecer 
            de nos seguir no <a href = 'https://www.facebook.com/Loja.MNP' target = '_blank' >Facebook</a> e <a href = 'https://www.instagram.com/masnempeixeoficial/' target = '_blank' >Instagram</a> além dos melhores spoilers do que está por vir tem dicas, 
            indicações, memes, receitas e etc. <br/>
            <br/>
            E se quiser saber mais sobre a gente é só dar uma passadinha no <a href = '/sobre' >sobre nós</a> . <br/>
            Éh depois disso podemos 
            dizer que já somos amigos, então sinta-se a vontade para tirar qualquer dúvida, estamos prontos 
            para te ajudar no que precisar C:
            </p>

            <h4 className = 't2'>
                <img src = '/expandIcon.png' className = 'expand-button' onClick = {()=>{setButton1(!button1)}} />
                Como faço para comprar? 
            </h4>

            <p className = 'p6' >
            Trabalhamos por encomenda, então é só selecionar sua caneca e comprar normalmente e te entregamos no prazo de 15 dias* 
            qualquer variação na data de entrega devido a greve nos Correios entraremos em contato para te manter por dentro.
            </p>

            {
                button1 &&
            <p className = 'p6 mobile' >
            Trabalhamos por encomenda, então é só selecionar sua caneca e comprar normalmente e te entregamos no prazo de 15 dias* 
            qualquer variação na data de entrega devido a greve nos Correios entraremos em contato para te manter por dentro.
            </p>
            }

            <h4 className = 't3'>
                
                    <img src = '/expandIcon.png' className = 'expand-button' onClick = {()=>{setButton2(!button2)}} />
    
                Pode parcelar ou é só no boleto? 
            </h4>

            <p className = 'p7'>
                Tá liberado parcelar até 6x sem juros no cartão!
            </p>

            {
                button2 &&
                <p className = 'p7 mobile'>
                    Tá liberado parcelar até 6x sem juros no cartão!
                </p>
            }
        </Container>
    )
}
