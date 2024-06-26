import { Helmet } from "react-helmet";
import CreativeItem from "@/components/CreativeItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CirclePlus } from "lucide-react";
import { useQuery } from "react-query";
import { fetchCreatives } from "@/util/fetchers";
function Creatives() {
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
        <CreativeItem />
        <CreativeItem />
        <CreativeItem />
      </section>
    </div>
    </>
  )
}

export default Creatives