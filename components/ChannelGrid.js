import { Link } from "../routes"
import slug from "../helpers/slug"
export const ChannelGrid = ({ channels }) => {
    return (
        <div>
            <div className="channels">


                {
                    channels.map((item, key) => (
                        <Link route="channel" params={{
                            slug: slug(item.title),
                            id: item.id
                        }} key={key}>

                            <a className="channel" >

                                <img src={item.urls.logo_image.original} alt=""></img>
                                <h2>{item.title}</h2>
                            </a>
                        </Link>
                    ))
                }

            </div>

            <style jsx>
                {
                    `
                    

                    .channels{
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
                    }

                    .channel{
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-bottom: 0.5em
                    }

                    .channel img{
                        width: 100%
                    }

                    h2{
                        padding: 3px;
                        text-align:center;
                        font-size: 16px
                    }

                    `
                }
            </style>
        </div>
    )
}