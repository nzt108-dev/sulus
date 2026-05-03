const items = [
  "No Broker Fees", "Direct Connections", "California Only",
  "Customers + Carriers", "Zero Assignment", "Move Cars Directly",
  "Car Flippers Welcome", "Dealers Direct", "$0 Broker Fee",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="s-ticker">
      <div className="s-ttrack">
        {doubled.map((item, i) => (
          <span key={i} className="s-ti">
            {item}&nbsp;<span className="s-tsep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
