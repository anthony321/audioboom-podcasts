import Link from "next/link"
import Head from "next/head"

export const Layout = ({ children, title = "Podcasts" }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width , initial-scale=1"></meta>

            </Head>
            <header><Link href="/"><a>Podcast</a></Link></header>
            {children}

            <style jsx>
                {
                    `
                    header{
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                    }
                    header a {
                        text-decoration: none;
                        color: #ffffff;
                    }
                    `
                }
            </style>

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
        </div>
    )
}