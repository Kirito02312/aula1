import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from './config.json'

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('')

    const [listaDeMensagens, setListaDeMensagens] = React.useState([])
    /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Tem que adicionar o texto na listagem
    
    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens 
    */
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'Lucas Oliveira',
            texto: novaMensagem,

        }
       
        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,
            
        ]);
        setMensagem('');
    }


    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://images.alphacoders.com/117/thumb-1920-1176885.png)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[400],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens}setListaDeMensagens={setListaDeMensagens} />
                    {/* {listaDeMensagens.map((mensagemAtual) =>  {
                        
                         return (
                             <li key={mensagemAtual.id}>
                                 {mensagemAtual.de}: {mensagemAtual.texto}
                             </li>
                         )
                     })} */}


                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value;
                                setMensagem(valor);

                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }

                            }}

                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[400],
                            }}
                        />


<Button 

    type='submit'

    label='Enviar'

    variant='tertiary'

    colorVariant='primary'

    onClick={(e) => {

        e.preventDefault();

        handleNovaMensagem(mensagem);

    }}

/>

</Box>

</Box>

</Box>

</Box>

)

}



function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    
                    Chat
                    
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}



function MessageList(props) {
    console.log(props.mensagens);

    function handleRemovedMsg(messageId) {

        

        let novaLista = props.mensagens.filter((message) => {

            if (message.id != messageId) {

                console.log(message.id)

                console.log(messageId)

                return message;

            }    

        })

        props.setListaDeMensagens([

            ...novaLista

        ])
    }


    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["400"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[100    ],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/Kirito02312.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[400],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            <Button     

                                onClick={ ()=> {

                                    

                                    handleRemovedMsg(mensagem.id)

                                }}                          

                                buttonColors={{

                                    contrastColor: appConfig.theme.colors.neutrals["000"],

                                    mainColor: appConfig.theme.colors.primary[100],

                                    mainColorLight: appConfig.theme.colors.primary[400],

                                    mainColorStrong: appConfig.theme.colors.primary[200],

                                }}

                                label='X'

                                styleSheet={{
                                    color: appConfig.theme.colors.neutrals[400],


                                   
                                    borderRadius: "100%",

                                    height: "20px",

                                    marginLeft: "92%",

                                    paddingLeft: "20px",

                                    marginRight: "0",

                                    width: "20px",

                                    display: "flex",

                                    flexDirection: "row",

                                    justifyContent: "flex-end",

                                    alignItems: "center",

                                    position: "relative",

                                    top: "-10px",

                                    background: "red"

                                }}>



                            </Button>


                        </Box>
                        {mensagem.texto}
                        
                    </Text>


                );

            })}

        </Box>
    )
}