import { Card } from "@/devlink/Card";
import { Cards } from "@/devlink/Cards";
import { HeroComponent } from "@/devlink/HeroComponent";
import { getBlogs } from "@/lib/cmsrepo";
import Link from "next/link";

export default async function Home() {

  const items = await getBlogs();
  const heroItems = items.slice(0,14);
  
  return (
    <>
     
      <Cards

        grids={
          <>
            {heroItems.map((item)=> (
              <div style={{display: "flex", flexDirection: "column"}} key={item.id}>
              <Card key={item.id} cardHeading={item.fieldData.name} cardText={""} />
              
              <Link key={item.id}  href={item.fieldData.slug} >View</Link>
              
              </div>
            ))}
          </>
        }


      />
    </>
  );
}
