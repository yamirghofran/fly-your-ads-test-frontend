import { LineChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    views: 2890,
    impressions: 2338,
  },
  {
    date: 'Feb 22',
    views: 2756,
    impressions: 2103,
  },
  {
    date: 'Mar 22',
    views: 3322,
    impressions: 2194,
  },
  {
    date: 'Apr 22',
    views: 3470,
    impressions: 2108,
  },
  {
    date: 'May 22',
    views: 3475,
    impressions: 1812,
  },
  {
    date: 'Jun 22',
    views: 3129,
    impressions: 1726,
  },
  {
    date: 'Jul 22',
    views: 3490,
    impressions: 1982,
  },
  {
    date: 'Aug 22',
    views: 2903,
    impressions: 2012,
  },
  {
    date: 'Sep 22',
    views: 2643,
    impressions: 2342,
  },
  {
    date: 'Oct 22',
    views: 2837,
    impressions: 2473,
  },
  {
    date: 'Nov 22',
    views: 2954,
    impressions: 3848,
  },
  {
    date: 'Dec 22',
    views: 3239,
    impressions: 3736,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export function ViewsVsImpressions() {
  return (
    <LineChart
      className="h-80"
      data={chartdata}
      index="date"
      categories={['views', 'impressions']}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}