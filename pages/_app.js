 import Layout from "@/components/layout";
 import "@/styles/globals.css";

 
export default function MyApp({ Component, pageprops }) {
    return (
        <Layout>
             <Component {...pageprops}/>
        </Layout>
    )
}