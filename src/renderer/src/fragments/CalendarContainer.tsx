import { Calendar, CalendarProps, Card } from 'antd';
import React from 'react';
import type { Dayjs } from 'dayjs';

export default function CalendarContainer() {
  const [calendarMode, setCalendarMode] = React.useState<string | undefined>(
    'month',
  );

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    setCalendarMode(mode);
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <Card
      style={{
        height: '38vh',
        borderRadius: '20px',
        marginInline: '25px',
      }}
    >
      <Calendar
        fullscreen={false}
        style={{ fontSize: '12px' }}
        onPanelChange={onPanelChange}
        // eslint-disable-next-line react/no-unstable-nested-components
        fullCellRender={(item) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div>
                {calendarMode === 'month'
                  ? item.date()
                  : item.toString().split(' ')[2]}
              </div>
              {calendarMode === 'month' && (
                <div
                  style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
                >
                  <div
                    style={{
                      height: '5px',
                      width: '5px',
                      backgroundColor: 'red',
                      borderRadius: '50%',
                    }}
                  />
                </div>
              )}
            </div>
          );
        }}
      />
    </Card>
  );
}
