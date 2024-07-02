import React, { useState, useEffect, useMemo } from 'react';
import Vitals from '../Vitals/Vitals';

import styles from './BloodPressureChart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BloodPressureChart = ({ getProfileData }) => {
  const flatData = useMemo(() => getProfileData[0]?.diagnosis_history?.map((item) => ({
    month: item.month,
    year: item.year,
    systolic: item.blood_pressure.systolic.value,
    systolic_levels: item.blood_pressure.systolic.levels,
    diastolic: item.blood_pressure.diastolic.value,
    diastolic_levels: item.blood_pressure.diastolic.levels,
    heart_rate_value: item.heart_rate.value,
    heart_rate_levels: item.heart_rate.levels,
    respiratory_rate_value: item.respiratory_rate.value,
    respiratory_rate_levels: item.respiratory_rate.levels,
    temperature_value: item.temperature.value,
    temperature_levels: item.temperature.levels,
  })) || [], [getProfileData]);

  const [filteredData, setFilteredData] = useState(flatData);
  const [selectedFilter, setSelectedFilter] = useState('6 Months');

  useEffect(() => {
    const filterData = (months) => {
      if (months === 'All') {
        return flatData;
      } else {
        const now = new Date();
        return flatData.filter((data) => {
          const dataDate = new Date(`${data.month} 1, ${data.year}`);
          const diffMonths = (now.getFullYear() - dataDate.getFullYear()) * 12 + (now.getMonth() - dataDate.getMonth());
          return diffMonths < months;
        });
      }
    };

    switch (selectedFilter) {
      case '1 Month':
        setFilteredData(filterData(1));
        break;
      case '3 Months':
        setFilteredData(filterData(3));
        break;
      case '6 Months':
        setFilteredData(filterData(6));
        break;
      case 'All':
      default:
        setFilteredData(filterData('All'));
        break;
    }
  }, [selectedFilter, flatData]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={styles.chart}>
      <div className={styles.chartContainer}>
        <h2 style={{ textAlign: 'left'}}>Diagnosis History</h2>
        <div className={styles.filters}>
          <button
            className={selectedFilter === '1 Month' ? styles.activeFilter : ''}
            onClick={() => handleFilterChange('1 Month')}
          >
            1 Month
          </button>
          <button
            className={selectedFilter === '3 Months' ? styles.activeFilter : ''}
            onClick={() => handleFilterChange('3 Months')}
          >
            3 Months
          </button>
          <button
            className={selectedFilter === '6 Months' ? styles.activeFilter : ''}
            onClick={() => handleFilterChange('6 Months')}
          >
            6 Months
          </button>
          <button
            className={selectedFilter === 'All' ? styles.activeFilter : ''}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend align="right" height={36}/>
            <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
            <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.systolic}></span>Systolic
          </div>
          <div className={styles.legendItem}>
            <span className={styles.diastolic}></span>Diastolic
          </div>
        </div>
      </div>
      <Vitals filteredData={filteredData} />
    </div>
  );
};

export default BloodPressureChart;
