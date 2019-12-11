export default () => {
    return (
        <div>
            <div className="imagen">
                <img src="/react_image.png" alt="Imagen de react" />
            </div>

            <h1>Creado por Anthony Farias</h1>
            <h1>Curso de Next.js - Platzi</h1>


            <style jsx >
                {
                    `
                    .imagen{
                        width:100%;
                        height: auto;
                        display:block;
                        text-align:center
                    }

                    img{
                        max-width: 300px;
                    }

                    h1{
                        color: black;
                        font-size: 20px;
                        text-align:center
                    }


                    `
                }
            </style>
            <style jsx global>
                {
                    `
                    body{
                        background: #e4e4e4
                    }
                    
                    `
                }

            </style>

        </div>
    )
}