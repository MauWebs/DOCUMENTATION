import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function HtmlLabels() {

    // ==========> HTML LABELS <========== //

    const HtmlLabels =
        `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="javascript.js"></script>
    <link rel="icon" href="https://mau-webs-portfolio.netlify.app/static/media/html-5.ff3cf75e3b7cbb4ea77c.png">
    <title>Ruta Full-Stack</title>
</head>

<body>

    <!-- Titulo (1) -->
    <h1>Hola Mundo</h1>

    <!-- Titulo (2) -->
    <h2>Hola Mundo</h2>

    <!-- Titulo (3) -->
    <h3>Hola Mundo</h3>

    <!-- Titulo (4) -->
    <h4>Hola Mundo</h4>

    <!-- Titulo (5) -->
    <h5>Hola Mundo</h5>

    <!-- Texto/Párrafo (5) -->
    <p>Hola Mundo</p>

    <!-- Imagenes -->
    <img src="https://mau-webs-portfolio.netlify.app/static/media/html-5.ff3cf75e3b7cbb4ea77c.png" />

</body>

</html>
`

    function copyToClipboard() {
        navigator.clipboard.writeText(HtmlLabels);
    };


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
                        marginLeft:"600px",
                        marginTop: "10px",
                        height:"30px"
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

                {HtmlLabels}

            </SyntaxHighlighter>
        </>
    );
};

export default HtmlLabels;