exportações.textTnC = () => {
    return`
Código-fonte / bot é um programa de código aberto (gratuito) escrito em Javascript, você pode usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar e / ou vender cópias sem remover o autor principal do código-fonte / bot.

Ao usar este código-fonte / bot, você concorda com os seguintes Termos e Condições:
- O código-fonte / bot não armazena seus dados em nossos servidores.
- O código-fonte / bot não é responsável pelos stickers que você faz desse bot e pelos vídeos, imagens e outros dados que você obtém do código-fonte / bot.
- O código-fonte / bot não pode ser usado para serviços que visam / contribuem para:
    • sexo / tráfico humano
    • jogos de azar
    • comportamento viciante prejudicial
    • crime
    • violência (a menos que necessário para proteger a segurança pública)
    • queima / desmatamento florestal
    • discurso de ódio ou discriminação com base na idade, sexo, identidade de gênero, raça, sexualidade, religião, nacionalidade

Código-fonte BOT: https://github.com/YogaSakti/imageToSticker
Biblioteca NodeJS WhatsApp: https://github.com/open-wa/wa-automate-nodejs

Atenciosamente, Sakti Yoga. »
}

ports.textMenu = (pushname) => (
    return`
Olá, $ {pushname}! 👋
Aqui estão alguns dos recursos deste bot! ✨

Criador de adesivos:
1. * # adesivo *
Para transformar a imagem em um adesivo.
Uso: enviar imagens com a legenda #sticker ou responder a imagens que foram enviadas com #sticker

2. * # adesivo * _ <URL da imagem> _
Para mudar a imagem do url para um adesivo.
Usar:

3. * # gifsticker * _ <Giphy URL> _ / * # stickergif * _ <Giphy URL> _
Para transformar um GIF em um adesivo (somente Giphy)
Uso: enviar mensagens com o formato * gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

4. * # memesticker * _ <texto superior> _ | _ <texto inferior> _
Para fazer um meme de adesivo com texto superior e inferior
Uso: enviar imagem com legenda _ * # meme top me | você sob * _, ou você também pode responder a uma imagem existente.

Downloader:
1. * # tiktok * _ <url do tiktok> _
Para baixar vídeos do vídeo tiktok.
Uso: enviar mensagens com o formato * # tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922*

2. * # fb * _ <url de postagem / vídeo> _
Para baixar vídeos do Facebook.
Uso: enviar mensagem com o formato * # fb https://www.facebook.com/.....*

3. * # ig * _ <url do post do instagram> _
Para baixar fotos e vídeos do Instagram.
Uso: enviar mensagens com o formato * # ig https://www.instagram.com/p/BPOd1vhDMIp/*

4. * # twt * _ <url da postagem no Twitter> _
Para baixar fotos e vídeos do Twitter.
Uso: enviar mensagem com o formato * # twt https://twitter.com/ntsana_/status/1306108656887324672*

Etc:
1. * # traduzir * _ <código do idioma> _
Para interpretar mensagens no idioma especificado.
Uso: Responder / citar / responder a mensagem que você deseja traduzir com _ * # translate id * _ <- id é o código do idioma. o código do idioma pode ser visto em * https: //bit.ly/33FVldE*

2. * # recibo * _ <kurir> _ _ <número do recibo> _
Para verificar o status de entrega de mercadorias, lista de mensageiros: jne, pos, tiki, passeios, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Uso: enviar mensagem com o formato _ * # resi jne 1238757632 * _

3. * # meme * _ <texto superior> _ | _ <texto inferior> _
Para criar um meme com texto superior e inferior
Uso: enviar imagem com legenda _ * # meme top me | você sob * _, ou você também pode responder a uma imagem existente.

4. * # verificar localização *
Verifique a localização da propagação de covid-19 na área ao seu redor (kelurahan).
Uso: enviar sua localização e responder / citar / responder a localização enviada com _ * # verificar localização * _

5. * # tnc *
Exibe os termos e condições do bot.

6. * # doação *
exibir informações de doação.

Espero que você tenha um ótimo dia! ✨`
}

exportações.textAdmin = () => {
    return`
⚠ [* Administrador de grupo apenas *] ⚠
Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!

1. * # kick * @user
Para remover membros do grupo (pode ser mais de 1).

2. * # promova * @user
Para promover membros a administradores do grupo.

3. * # rebaixar * @user
Para rebaixar os administradores do Grupo.

4. * # tagall *
Para mencionar todos os membros do grupo. (Apenas Premium)

5. * # del *
Para deletar uma mensagem do bot (responda a mensagem do bot com #del) `
}

exportações.textDonation = () => {
    return`
Olá, obrigado por usar este bot, para apoiar este bot você pode ajudar doando através do seguinte link:
1. Saweria: https://saweria.co/yogasakti
2. Trakteer: https://trakteer.id/red-emperor

A doação será usada para o desenvolvimento e operação deste bot.

Obrigado
}
