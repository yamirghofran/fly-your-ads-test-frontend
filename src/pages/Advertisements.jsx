import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AdvertisementItem from '@/components/AdvertisementItem';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';

function Advertisements() {
  return (
    <div>
        <Helmet>
            <title>Advertisements</title>
        </Helmet>
        <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Your Ads</h1>
      <Link to="/advertisements/new">
        <Button variant="outline">
          <CirclePlus className="size-4 mr-2" />
          New Advertisement
        </Button>
      </Link>
      </div>
        <section className="flex flex-col gap-4 items-center justify-center mt-12">
            <AdvertisementItem />
        </section>
    </div>
  )
}

export default Advertisements