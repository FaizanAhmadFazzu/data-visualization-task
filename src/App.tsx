import React from "react";
import StatisticsTable from "./components/StatisticsTable";

import { dataset } from "./data/data";
import { Data, IStatisticData } from "./models/models";
import { calculateMean, calculateMedian, calculateMode } from "./utils/utils";

const App: React.FC = () => {

  const getUniqueClasses = () => {
    const uniqueClasses: number[] = dataset.reduce((acc: number[], curr) => {
      if (!acc.includes(curr["Alcohol"])) {
        acc.push(curr.Alcohol)
      }
      return acc;
    }, []);
    return uniqueClasses;
  }

  // Function to calculate "Gammma" for a data point
  const calculateGamma = (dataPoint: Data) => {
    const { Ash, Magnesium, Hue } = dataPoint;
    return Ash * Hue / Magnesium;
  }

  // Function to calculate class wise statistics
  const calculateClassStatistics = () => {
    const uniqueClasses: number[] = getUniqueClasses();
    const statistics: IStatisticData[] = uniqueClasses.map(classLabel => {
      const classData: Data[] = dataset.filter(data => data.Alcohol === classLabel);
      const FlavanoidsValues: number[] = classData.map(data => data.Flavanoids);
      return {
        Class: classLabel,
        Mean: calculateMean(FlavanoidsValues),
        Median: calculateMedian(FlavanoidsValues),
        Mode: calculateMode(FlavanoidsValues)
      }
    })
    return statistics;
  }

  // Function to calculate class wise statistics for "Gamma"
  const calculateGammaClassStatistics = () => {
    const uniqueClasses: number[] = getUniqueClasses();
    const statistics: IStatisticData[] = uniqueClasses.map(classLabel => {
      const classData: Data[] = dataset.filter(data => data.Alcohol === classLabel);
      const gamaValues: number[] = classData.map(calculateGamma);
      return {
        Class: classLabel,
        Mean: calculateMean(gamaValues),
        Median: calculateMedian(gamaValues),
        Mode: calculateMode(gamaValues)
      }
    });
    return statistics
  }

  const classStatistics: IStatisticData[] = calculateClassStatistics();
  const gammaStatistics: IStatisticData[] = calculateGammaClassStatistics();

  return (
    <div className="container">
      <div className='wrapper'>
        <StatisticsTable classStatistics={classStatistics} title={"Class-wise Statistics for Flavanoids"} />
        <StatisticsTable classStatistics={gammaStatistics} title={"Class-wise Statistics for \"Gamma\" Property."} />
      </div>
    </div>
  );
}

export default App;
