import "isomorphic-fetch";
import { Layout } from "../components/Layout"
import { AudioPlayer } from "../components/AudioPlayer"
const Podcast = ({ audioClip }) => {
    return (
        <Layout title={audioClip.title}>
            <AudioPlayer audioClip={audioClip} ></AudioPlayer>
        </Layout>
    );
}


Podcast.getInitialProps = async ({ query }) => {
    let idAudio = query.id;
    let [reqAudio] = await Promise.all([
        fetch(`https://api.audioboom.com/audio_clips/${idAudio}.mp3`),
    ])


    let dataAudio = await reqAudio.json();
    let audioClip = dataAudio.body.audio_clip;
    return { audioClip }
}

export default Podcast;