import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function HtmlBase() {

    // ==========> HTML BASE <========== //

    const htmlBase =
        `
<!-- Indicador de que es un archivo HTML -->
<!DOCTYPE html>

<!-- Idioma -->
<html lang="en">

<!-- Plugins, Icono, Estilos -->
<head>

    <!-- Plugins -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Css (EMJEMPLO) -->
    <link rel="stylesheet" href="styles.css">

    <!-- Javascript (EMJEMPLO) -->
    <script src="javascript.js"></script>

    <!-- Icono -->
    <link rel="icon" href="https://mau-webs-portfolio.netlify.app/static/media/html-5.ff3cf75e3b7cbb4ea77c.png">

    <!-- Title -->
    <title>Ruta Full-Stack</title>

</head>

<!-- Todo lo visible -->
<body>

    <!-- Titulo -->
    <h1>Hola Mundo</h1>

</body>

</html>
`;

    function copyToClipboard() {
        navigator.clipboard.writeText(htmlBase);
    }


    return (
        <>
            <div style={{
                margin: "auto",
                marginTop: "40px",
                padding: "0px 0px 25px 25px",
                width: "50rem",
                background: "#242424",
                display: "flex",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
            }}>

                <h5>Index.html</h5>

                <button
                    onClick={copyToClipboard}
                    style={{
                        marginLeft: "600px",
                        marginTop: "10px",
                        height: "30px",
                    }}>
                    Copiar código
                </button>

            </div>

            <SyntaxHighlighter
                language="html"
                style={oneDark}
                className='Html'
                customStyle={{
                    margin: "auto",
                    padding: "0px 0px 25px 25px",
                    width: "50rem",
                    height: "30rem",
                    background: "#242424",
                    borderRadius:"0px 0px 0px 0px",
                }}
                wrapLongLines={true}
            >

                {htmlBase}

            </SyntaxHighlighter>
        </>
    )
}

export default HtmlBase