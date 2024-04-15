import type { CalendarProps } from 'antd';
import { Calendar as AntdCalendar } from 'antd';
import type { Dayjs } from 'dayjs';
import React from 'react';
import { wrapperStyle } from '../layoutConstants';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const Calendar: React.FC = () => {
  return (
    <div style={wrapperStyle}>
      <AntdCalendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        style={{ borderRadius: '5px', backgroundColor: 'rgba(0, 0, 0, 0.06)' }}
      />
    </div>
  );
};

export default Calendar;
