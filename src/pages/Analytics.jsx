import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ViewsVsImpressions } from "@/components/charts/ViewsVsImpressions";
import GendersPie from "@/components/charts/GendersPie";
import EthnicitiesPie from "@/components/charts/EthnicitiesPie";


function Analytics() {
  return (
    <>
    <Helmet>
        <title>Analytics</title>
    </Helmet>
    <div className="h-full">
      <h1 className="text-2xl font-bold">Analytics</h1>
      
      <div className='pt-4'>
      <div className='flex justify-between items-center bg-white rounded-md border p-4'>
        <h2 className="text-xl font-semibold">Ad Analytics</h2>
        <div className='flex justify-between w-[500px] items-center gap-x-2'>
          <div className='flex flex-col items-center border-l pl-4 border-gray-400'>
            <p className='text-xl font-semibold'>1055</p>
            <p className='text-sm text-slate-600'>Total Impressions</p>
          </div>
          <div className='flex flex-col items-center border-l pl-4 border-gray-400'>
            <p className='text-xl font-semibold'>1055</p>
            <p className='text-sm text-slate-600'>Total Views</p>
          </div>
          <div className='flex flex-col items-center border-l pl-4 border-gray-400'>
            <p className='text-xl font-semibold'>1055</p>
            <p className='text-sm text-slate-600'>Average Gaze</p>
          </div>
        </div>

      </div>
      </div>
      <div className='mt-4 grid md:grid-cols-[2fr_1fr_1fr] gap-x-2'>
          <div className='bg-white rounded-md border p-4'>
            <h3 className="text-xl font-semibold">Views vs Impressions</h3>
            <ViewsVsImpressions />
          </div>
          <div className='bg-white rounded-md border p-4'>
            <h3 className="text-xl font-semibold">Genders</h3>
            <GendersPie />
          </div>
          <div className='bg-white rounded-md border p-4'>
            <h3 className="text-xl font-semibold">Ethnicities</h3>
            <EthnicitiesPie />
          </div>
        </div>
    </div>
    </>
  )
}

export default Analytics

//Views
//View Length
//Gender pie
//Age range
//Ethnicity pie
//Emotion pie
//View by gender
//View by age