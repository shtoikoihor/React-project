import { WeatherKind, WeatherMetricIcon } from '../../types/Weather';

type IconProps = {
  size: number;
};

type WeatherKindIconProps = IconProps & {
  kind: WeatherKind;
};

type MetricIconProps = IconProps & {
  metricIcon: WeatherMetricIcon;
};

const common = {
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const SUN_RAYS = [
  'M12 3.5v2',
  'M12 18.5v2',
  'M3.5 12h2',
  'M18.5 12h2',
  'M6 6l1.3 1.3',
  'M16.7 16.7L18 18',
  'M18 6l-1.3 1.3',
  'M7.3 16.7L6 18',
].join('');

const PARTLY_RAYS = ['M15.5 2v1.6', 'M21 8h-1.6', 'M19.6 3.9l-1.1 1.1'].join(
  '',
);

const RAIN_DROPS = [
  'M9.5 18l-.7 2.2',
  'M13.5 18l-.7 2.2',
  'M17 18l-.7 2.2',
].join('');

const CLOUD_PATH =
  'M7 18h10a3.4 3.4 0 0 0 .3-6.8 5.2 5.2 0 0 0-9.9.9A3.5 3.5 0 0 0 7 18z';

const RAIN_CLOUD_PATH =
  'M7 15h10a3.4 3.4 0 0 0 .3-6.8 5.2 5.2 0 0 0-9.9.9A3.5 3.5 0 0 0 7 15z';

const PARTLY_CLOUD_PATH =
  'M6.5 19h10a3.6 3.6 0 0 0 .3-7.2 5.5 5.5 0 0 0-10.4.9A3.6 3.6 0 0 0 6.5 19z';

export const WeatherKindIcon = ({ kind, size }: WeatherKindIconProps) => {
  if (kind === 'sun') {
    return (
      <svg width={size} height={size} {...common}>
        <circle cx={12} cy={12} r={4} stroke="#F59E0B" strokeWidth={1.7} />
        <path d={SUN_RAYS} stroke="#F59E0B" strokeWidth={1.7} />
      </svg>
    );
  }

  if (kind === 'rain') {
    return (
      <svg width={size} height={size} {...common}>
        <path d={RAIN_CLOUD_PATH} stroke="#3B82F6" strokeWidth={1.7} />
        <path d={RAIN_DROPS} stroke="#3B82F6" strokeWidth={1.7} />
      </svg>
    );
  }

  if (kind === 'partly') {
    return (
      <svg width={size} height={size} {...common}>
        <circle cx={15.5} cy={8} r={3.2} stroke="#F59E0B" strokeWidth={1.7} />
        <path d={PARTLY_RAYS} stroke="#F59E0B" strokeWidth={1.7} />
        <path d={PARTLY_CLOUD_PATH} stroke="#3B82F6" strokeWidth={1.7} />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} {...common}>
      <path d={CLOUD_PATH} stroke="#3B82F6" strokeWidth={1.7} />
    </svg>
  );
};

const HUMIDITY_PATH =
  'M12 3.5c3.2 3.6 5.2 6.4 5.2 8.9A5.2 5.2 0 0 1 6.8 12.4c0-2.5 2-5.3 5.2-8.9z';

const WIND_LINES = [
  'M3 9h11a3 3 0 1 0-3-3',
  'M3 14h13a3 3 0 1 1-3 3',
  'M3 19h6',
];

const FEELS_PATHS = [
  'M10 14.5V5.5a2 2 0 1 1 4 0v9',
  'M12 20.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
];

const UV_PATHS = [
  SUN_RAYS,
  'M12 15.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z',
];

const metricPaths: Record<WeatherMetricIcon, string[]> = {
  humidity: [HUMIDITY_PATH],
  wind: WIND_LINES,
  feels: FEELS_PATHS,
  uv: UV_PATHS,
};

export const MetricIcon = ({ metricIcon, size }: MetricIconProps) => {
  const stroke = metricIcon === 'uv' ? '#F59E0B' : '#3B82F6';

  return (
    <svg
      width={size}
      height={size}
      {...common}
      stroke={stroke}
      strokeWidth={1.7}
    >
      {metricPaths[metricIcon].map(d => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
};

export const ErrorIcon = ({ size }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...common}
    stroke="#EF4444"
    strokeWidth={1.6}
  >
    <circle cx={12} cy={12} r={8.6} />
    <path d="M12 7.6v5.2" />
    <path d="M12 16.3v.1" />
  </svg>
);
