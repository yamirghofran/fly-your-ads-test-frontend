import { DonutChart } from '@tremor/react';
import { fetchAds } from '@/util/fetchers';
import { useQuery } from 'react-query';

const datahero = [
  {
    name: 'Male',
    value: 9800,
  },
  {
    name: 'Female',
    value: 4567,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us', { maximumFractionDigits: 0 }).format(number).toString()}`;

export default function GendersPie() {
  const { data: adData, isLoading: isLoadingAdData } = useQuery('ads', fetchAds);
  const ads = adData&&adData || [];
  console.log(ads)
  if (isLoadingAdData) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="mx-auto space-y-12">
      <div className="space-y-3">
        <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        </span>
        <div className="flex justify-center items-center">
          <DonutChart
            data={datahero}
            variant="donut"
            valueFormatter={dataFormatter}
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </div>
    </div>
  </>
)}