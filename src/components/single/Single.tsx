import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";

  type Props = {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
      dataKeys: { name: string; color: string }[];
      data: object[];
    };
    activities?: { time: string; text: string }[];
  };
  
  const Single = (props: Props) => {
    return (
      <div className="flex">
        <div className="basis-1/2">
          <div>
            <div className="flex items-center gap-5">
              {props.img && <img  className="w-24 h-24 rounded-3xl object-cover" src={props.img} alt="" />}
              <h1 className="font-medium text-4xl">{props.title}</h1>
              <button className="p-1 cursor-pointer bg-softtxt text-darktxt rounded-md font-semibold">Update</button>
            </div>
            <div className="text-lg">
              {Object.entries(props.info).map((item) => (
                <div className="my-7 mx-0" key={item[0]}>
                  <span className="font-semibold mr-[10px] capitalize">{item[0]}</span>
                  <span className="itemValue">{item[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="w-11/12 h-0 border-[0.5px] border-gray-500 my-5 mx-0" />
          {props.chart && (
            <div className="mt-12 w-4/5 h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={props.chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {props.chart.dataKeys.map((dataKey) => (
                    <Line
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <div className="basis-1/2">
          <h2 className="mb-5 font-medium text-3xl">Latest Activities</h2>
          {props.activities && (
            <ul className=" ">
              {props.activities.map((activity) => (
                <li className="relative w-px pt-12 bg-tomato after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[10px] after:h-[10px] after:rounded-full after:bg-tomato after:-translate-x-1/2" key={activity.text}>
                  <div className="min-w-[480px] p-4 bg-[#f45b6810] ">
                    <p className="mb-1">{activity.text}</p>
                    <time className="text-xs">{activity.time}</time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default Single;