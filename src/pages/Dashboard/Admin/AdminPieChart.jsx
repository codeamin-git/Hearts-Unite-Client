import { PieChart, Pie, Cell, Legend} from 'recharts';

const COLORS = ['#9f53e5','#4CAF50', '#1E90FF', '#FF69B4', '#FB923C'];

const AdminPieChart = ({statData}) => {
    const data = [
        { name: 'Total Biodata', value: statData?.totalBiodata },
        { name: 'Male Biodata', value: statData?.maleBiodata },
        { name: 'Female Biodata', value: statData?.femaleBiodata },
        { name: 'Premium Biodata', value: statData?.premiumBiodata },
        { name: 'Total Revenue', value: statData?.totalRevenue },
      ];
    
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
      return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      );
      };

    
    return (
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
        </div>
    );
};

export default AdminPieChart;