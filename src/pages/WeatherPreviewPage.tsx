import { WeatherCard } from '../components/WeatherCard/WeatherCard';

export const WeatherPreviewPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        padding: 32,
        background: '#F0EEE9',
      }}
    >
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ width: 343 }}>
          <WeatherCard type="current" state="default" kind="partly" />
        </div>
        <div style={{ width: 343 }}>
          <WeatherCard type="current" state="loading" />
        </div>
        <div style={{ width: 343 }}>
          <WeatherCard type="current" state="error" />
        </div>
        <div style={{ width: 343 }}>
          <WeatherCard
            type="current"
            kind="sun"
            gradient={false}
            temp="24°"
            desc="Ясно"
            min="19°"
            max="27°"
          />
        </div>
      </div>

      <div
        style={{ display: 'flex', gap: 12, background: '#fff', padding: 16 }}
      >
        <WeatherCard type="hourly" time="14:00" temp="16°" kind="cloud" />
        <WeatherCard type="hourly" time="15:00" temp="17°" kind="sun" />
        <WeatherCard type="hourly" time="16:00" temp="17°" kind="partly" />
        <WeatherCard type="hourly" time="17:00" temp="15°" kind="rain" />
        <WeatherCard type="hourly" state="loading" />
        <WeatherCard type="hourly" state="error" time="19:00" />
      </div>

      <div
        style={{
          width: 343,
          background: '#fff',
          padding: '8px 16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <WeatherCard type="daily" day="Пн" kind="partly" min="12°" max="21°" />
        <WeatherCard type="daily" day="Вт" kind="sun" min="14°" max="24°" />
        <WeatherCard type="daily" day="Ср" kind="rain" min="11°" max="18°" />
        <WeatherCard type="daily" state="loading" />
        <WeatherCard type="daily" state="error" day="Пт" />
      </div>

      <div
        style={{
          width: 343,
          background: '#fff',
          padding: 16,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
        }}
      >
        <WeatherCard
          type="metric"
          metricIcon="humidity"
          label="Вологість"
          value="65%"
        />
        <WeatherCard
          type="metric"
          metricIcon="wind"
          label="Вітер"
          value="12 км/г"
        />
        <WeatherCard
          type="metric"
          metricIcon="feels"
          label="Відчувається як"
          value="16°"
        />
        <WeatherCard
          type="metric"
          metricIcon="uv"
          label="UV індекс"
          value="3"
        />
        <WeatherCard type="metric" state="loading" />
        <WeatherCard type="metric" state="error" label="Вітер" />
      </div>
    </div>
  );
};
