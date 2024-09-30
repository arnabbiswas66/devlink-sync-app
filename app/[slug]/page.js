import { Card } from "@/devlink/Card";
import { Cards } from "@/devlink/Cards";
import { HeroComponent } from "@/devlink/HeroComponent";
import { getBlog, getSlugs } from "@/lib/cmsrepo";

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map(slug => ({slug}));
}

export default async function Blog({ params: { slug } }) {

    const blog = await getBlog(slug);
    return (
        <>
            <HeroComponent
                heading={blog.fieldData.name}
                paragraph=""
                buttonText="Hurry Up!"
                heroImage={blog.fieldData["main-image"].url}

            />

            
            <article style={{textAlign:"left", paddingLeft:"270px"}}  dangerouslySetInnerHTML={{__html: `${blog.fieldData["post-body"]}`}} /> 
        </>
    );
}