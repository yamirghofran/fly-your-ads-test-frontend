import { DonutChart } from '@tremor/react';

const datahero = [
  {
    name: 'Asian',
    value: 3200,
  },
  {
    name: 'Indian',
    value: 2100,
  },
  {
    name: 'Black',
    value: 1800,
  },
  {
    name: 'White',
    value: 2700,
  },
  {
    name: 'Middle Eastern',
    value: 1500,
  },
  {
    name: 'Latino Hispanic',
    value: 1900,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us', { maximumFractionDigits: 0 }).format(number).toString()}`;

export default function GendersPie() {
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