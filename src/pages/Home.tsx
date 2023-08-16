import BarChartBox from "../components/charts/BarChartBox"
import BigChartBox from "../components/charts/BigChartBox"
import ChartBox from "../components/charts/ChartBox"
import PieChartBox from "../components/charts/PieChartBox"
import TopBox from "../components/charts/TopBox"
import { chartBoxUser,chartBoxConversion,chartBoxRevenue,chartBoxProduct, barChartBoxRevenue, barChartBoxVisit} from "../data"
const Home = () => {
  const boxStyle :string = "p-5 rounded-[10px] border-2 border-soft"
  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-180">
      <div className={`${boxStyle} col-span-1 row-span-3`}> <TopBox /> </div>
      <div className={boxStyle}><ChartBox {...chartBoxUser}/></div>
      <div className={boxStyle}><ChartBox {...chartBoxProduct} /></div>
      <div className={`${boxStyle} col-span-1 row-span-3`}><PieChartBox /></div>
      <div className={boxStyle}><ChartBox {...chartBoxConversion} /></div>
      <div className={boxStyle}><ChartBox {...chartBoxRevenue}/></div>
      <div className={`${boxStyle} col-span-2 row-span-2`}><BigChartBox /></div>
      <div className={boxStyle}><BarChartBox {...barChartBoxVisit}/></div>
      <div className={boxStyle}><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home