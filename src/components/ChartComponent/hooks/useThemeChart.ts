import { useTheme } from '@hooks/useTheme';

export function useThemeChart() {
  const theme = useTheme();
  const options = {
    scales: {
      x: {
        title: {
          display: false,
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
      y: {
        title: {
          display: false,
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
