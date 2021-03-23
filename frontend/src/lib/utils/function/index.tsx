import { AxiosError } from 'axios';
import { ResDefault } from '../../api/payloads';

export const setYearDate = () => {
  let yearArray = [];
  yearArray.push(
    <option value="0" key={0}>
      연도
    </option>
  );
  for (let i = 2021; i > 1920; i--) {
    yearArray.push(
      <option key={i} value={i}>
        {i}년
      </option>
    );
  }
  return yearArray;
};

export const setMonthDate = () => {
  let monthArray = [];
  monthArray.push(
    <option value="0" key={0}>
      월
    </option>
  );
  for (let i = 1; i <= 12; i++) {
    monthArray.push(
      <option key={i} value={i}>
        {i}월
      </option>
    );
  }
  return monthArray;
};

export const setDayDate = () => {
  let dayArray = [];
  dayArray.push(
    <option value="0" key={0}>
      일
    </option>
  );
  for (let i = 1; i <= 31; i++) {
    dayArray.push(
      <option key={i} value={i}>
        {i}일
      </option>
    );
  }
  return dayArray;
};

export const getAxiosError = (err: AxiosError<ResDefault>) => {
  console.log(err.response.data);
  const { status, code } = err.response.data;
  return { status, code };
};
