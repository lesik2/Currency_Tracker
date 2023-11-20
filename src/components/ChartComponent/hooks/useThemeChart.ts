import { useTheme } from '../../../hooks/useTheme.ts';

export function useThemeChart() {
  const theme = useTheme();
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day',
          color: theme.colors.secondary,
          align: 'end' as 'end' | 'center' | 'start' | undefined,
          font: {
            size: 16,
            weight: '500',
          },
          padding: {
            top: -38,
          },
        },
        beginAtZero: true,
        grid: {
          color: theme.colors.chartGrid,
        },
        ticks: {
          display: false,
        },
        border: {
          color: theme.colors.secondary,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
          color: theme.colors.secondary,
          align: 'end' as 'end' | 'center' | 'start' | undefined,
          font: {
            size: 16,
            weight: '500',
          },
        },
        beginAtZero: true,
        grid: {
          color: theme.colors.chartGrid,
        },
        ticks: {
          color: theme.colors.secondary,
          font: {
            size: 12,
            weight: '400',
          },
        },
        border: {
          color: theme.colors.secondary,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return options;
}
