import {
  WeatherCardState,
  WeatherCardType,
  WeatherKind,
  WeatherMetricIcon,
} from '../../types/Weather';
import { ErrorIcon, MetricIcon, WeatherKindIcon } from './WeatherIcons';
import styles from './WeatherCard.module.scss';

type Props = {
  type?: WeatherCardType;
  state?: WeatherCardState;
  kind?: WeatherKind;
  gradient?: boolean;
  temp?: string;
  desc?: string;
  min?: string;
  max?: string;
  time?: string;
  day?: string;
  label?: string;
  value?: string;
  metricIcon?: WeatherMetricIcon;
};

const kindClass: Record<WeatherKind, string> = {
  sun: styles.kindSun,
  partly: styles.kindPartly,
  cloud: styles.kindCloud,
  rain: styles.kindRain,
};

export const WeatherCard = ({
  type = 'current',
  state = 'default',
  kind = 'partly',
  gradient = true,
  temp = '18°',
  desc = 'Хмарно з проясненнями',
  min = '12°',
  max = '21°',
  time = '14:00',
  day = 'Пн',
  label = 'Вологість',
  value = '65%',
  metricIcon = 'humidity',
}: Props) => {
  if (type === 'current') {
    return (
      <div
        className={`${styles.current} ${gradient ? kindClass[kind] : styles.currentFlat}`}
      >
        {state === 'default' && (
          <div className={styles.currentDefault}>
            <WeatherKindIcon kind={kind} size={80} />
            <div className={styles.temp}>{temp}</div>
            <div className={styles.desc}>{desc}</div>
            <div className={styles.range}>
              <span>↓{min}</span>
              <span>↑{max}</span>
            </div>
          </div>
        )}
        {state === 'loading' && (
          <div className={styles.currentLoading}>
            <div className={`${styles.skeleton} ${styles.skCurrentIcon}`} />
            <div className={`${styles.skeleton} ${styles.skCurrentTemp}`} />
            <div className={`${styles.skeleton} ${styles.skCurrentDesc}`} />
            <div className={`${styles.skeleton} ${styles.skCurrentRange}`} />
          </div>
        )}
        {state === 'error' && (
          <div className={styles.currentError}>
            <ErrorIcon size={80} />
            <div className={styles.errorText}>Не вдалось завантажити</div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'hourly') {
    return (
      <div className={styles.hourly}>
        {state === 'default' && (
          <div className={styles.hourlyDefault}>
            <div className={styles.hourlyTime}>{time}</div>
            <WeatherKindIcon kind={kind} size={28} />
            <div className={styles.hourlyTemp}>{temp}</div>
          </div>
        )}
        {state === 'loading' && (
          <div className={styles.hourlyLoading}>
            <div className={`${styles.skeleton} ${styles.skHourlyTime}`} />
            <div className={`${styles.skeleton} ${styles.skHourlyIcon}`} />
            <div className={`${styles.skeleton} ${styles.skHourlyTemp}`} />
          </div>
        )}
        {state === 'error' && (
          <div className={styles.hourlyError}>
            <div className={styles.hourlyTime}>{time}</div>
            <ErrorIcon size={28} />
            <div className={styles.hourlyErrorText}>Помилка</div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'daily') {
    return (
      <div className={styles.daily}>
        {state === 'default' && (
          <div className={styles.dailyDefault}>
            <div className={styles.dailyDay}>{day}</div>
            <WeatherKindIcon kind={kind} size={24} />
            <div className={styles.dailyRange}>
              <span>{min}</span>
              <span>/</span>
              <span className={styles.dailyMax}>{max}</span>
            </div>
          </div>
        )}
        {state === 'loading' && (
          <div className={styles.dailyLoading}>
            <div className={`${styles.skeleton} ${styles.skDailyDay}`} />
            <div className={`${styles.skeleton} ${styles.skDailyIcon}`} />
            <div className={`${styles.skeleton} ${styles.skDailyRange}`} />
          </div>
        )}
        {state === 'error' && (
          <div className={styles.dailyError}>
            <div className={styles.dailyDay}>{day}</div>
            <ErrorIcon size={24} />
            <div className={styles.errorText}>Не вдалось завантажити</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.metric}>
      {state === 'default' && (
        <div className={styles.metricDefault}>
          <MetricIcon metricIcon={metricIcon} size={20} />
          <div className={styles.metricLabel}>{label}</div>
          <div className={styles.metricValue}>{value}</div>
        </div>
      )}
      {state === 'loading' && (
        <div className={styles.metricLoading}>
          <div className={`${styles.skeleton} ${styles.skMetricIcon}`} />
          <div className={`${styles.skeleton} ${styles.skMetricLabel}`} />
          <div className={`${styles.skeleton} ${styles.skMetricValue}`} />
        </div>
      )}
      {state === 'error' && (
        <div className={styles.metricError}>
          <ErrorIcon size={20} />
          <div className={styles.metricLabel}>{label}</div>
          <div className={styles.metricErrorText}>Не вдалось завантажити</div>
        </div>
      )}
    </div>
  );
};
