import { IStatisticData } from "../models/models";
import "./style.css";

interface props {
    classStatistics: IStatisticData[];
    title: string
}

const StatisticsTable: React.FC<props> = ({ classStatistics, title }) => {

    return (
        <>
            <h2 className='heading'>{title}</h2>
            <div className="dataContainer">
                <div className="dataWrapper">
                    <div className="dataRow">
                        <div className="dataHeading">Measure</div>
                        <div className="dataHeading">Flavanoids Mean</div>
                        <div className="dataHeading">Flavanoids Median</div>
                        <div className="dataHeading">Flavanoids Mode</div>
                    </div>
                    {
                        classStatistics.map(data => (
                            <div className="dataRow" key={data.Class}>
                                <div className="dataItem">Class {data.Class}</div>
                                <div className="dataItem">{data.Mean.toFixed(3)}</div>
                                <div className="dataItem">{data.Median.toFixed(3)}</div>
                                <div className="dataItem">{data.Mode.toFixed(3)}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default StatisticsTable