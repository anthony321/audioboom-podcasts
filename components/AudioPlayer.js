export const AudioPlayer = ({ audioClip }) => {
    return (
        <React.Fragment>
            <h2>{audioClip.title}</h2>
            <img src={audioClip.channel.urls.logo_image.original}></img>
            <audio src={audioClip.urls.high_mp3} controls></audio>

            <style jsx global>
                {
                    `
                body{
                    background: white;
                    margin:0;
                    font-family: system-ui
                }
                
                `
                }

            </style>

            <style jsx>{`
    
                header {
                    color: #fff;
                    background: #8756ca;
                    padding: 15px;
                    text-align: center;
                }
                h2{
                    text-align: center;
                }
                img {
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                    width: 100%;
                }

                audio{
                    width: 100%;
                    margin: 10px auto;
                }
                `
            }
            </style>
        </React.Fragment>
    )
}