export default function Types() {
  const name: string = "Duarte";
  const age: number = 20;
  const average: number = 7;
  const myArray: string[] = [];
  let big1 = BigInt(9007199254740991);

  myArray.push(name);
  myArray.push(age.toString());
  myArray.push(average.toString());
  myArray.push(big1.toString());

  return (
    <div>
      <h2>Types</h2>
      <ul className="list-group">
        {myArray.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
