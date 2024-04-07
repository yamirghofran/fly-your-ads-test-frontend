import { Helmet } from "react-helmet";
import CreativeItem from "@/components/CreativeItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CirclePlus } from "lucide-react";
import { useQuery } from "react-query";
import { fetchCreatives } from "@/util/fetchers";
function Creatives() {
  const { data: creativesData, isLoading: isLoadingCreatives } = useQuery('creatives', fetchCreatives);
  const creatives = creativesData&&creativesData || [];
  console.log(creatives)
  if (isLoadingCreatives) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <Helmet>
        <title>Creatives</title>
    </Helmet>
    <div className="h-full">
      <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Creatives</h1>
      <Link to="/creatives/new">
        <Button variant="outline">
          <CirclePlus className="size-4 mr-2" />
          New Creative
        </Button>
      </Link>
      </div>
      <section className="flex flex-col gap-4 items-center justify-center mt-12">
        {creatives.map((creative) => (
          <CreativeItem key={creative._id} title={creative.title} description={creative.description} assets={creative.assets} />
        ))}
      </section>
    </div>
    </>
  )
}

export default Creatives