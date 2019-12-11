import "isomorphic-fetch";
import Error from "./_error"
import { Layout } from "../components/Layout"
import { ChannelHeader } from "../components/ChannelHeader"
import { ChannelGrid } from "../components/ChannelGrid"
import { LastPodcasts } from "../components/LastPodcasts"

const Channel = ({ channel, audioClips, series, statusCode }) => {
  const channels = series;

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} message="Ha ocurrido un error."></Error>
  }


  return (

    <Layout title="Podcasts - Channel">
      <ChannelHeader channel={channel}></ChannelHeader>
      <ChannelGrid channels={channels}></ChannelGrid>
      <LastPodcasts audioClips={audioClips}></LastPodcasts>
    </Layout>



  )
}

Channel.getInitialProps = async ({ query, res }) => {

  try {
    let idChannel = query.id;
    let [reqChannel, reqAudio, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    ])

    if (reqChannel.status >= 404) {
      res.statusCode = reqChannel.status;
      return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
    }

    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;
    let dataAudio = await reqAudio.json();
    let audioClips = dataAudio.body.audio_clips;
    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;
    return { channel, audioClips, series, statusCode: 200 };
  } catch (error) {
    return { channel: null, audioClips: null, series: null, statusCode: 503 }
  }



}

export default Channel