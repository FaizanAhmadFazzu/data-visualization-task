import { IStatisticData } from "../models/models";
import "./style.css";

interface props {
    classStatistics: IStatisticData[];
    title: string,
    gamaProperty?: boolean
}

const StatisticsTable: React.FC<props> = ({ classStatistics, title, gamaProperty }) => {

    return (
        <>
            <h2 className='heading'>{title}</h2>
            <div className="dataContainer">
                <div className="dataWrapper">
                    <div className="dataRow">
                        <div className="dataHeading">Measure</div>
                        <div className="dataHeading">{gamaProperty ? "Mean" : "Flavanoids Mean"}</div>
                        <div className="dataHeading">{gamaProperty ? "Median" : "Flavanoids Median"}</div>
                        <div className="dataHeading">{gamaProperty ? "Mode" : "Flavanoids Mode"}e</div>
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