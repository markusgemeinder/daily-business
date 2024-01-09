import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 1340,
      name: "🍍 Pineapple",
      color: "orange",
    },
    {
      id: 1341,
      name: "🍒 Cherry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
