import { Contador } from "./Contador";
import { ContadorCustom } from "./ContadorCustom";

export function MainHook() {
  return (
    <div className="container">
      <h1>React Hooks</h1>
      <Contador />
      <hr />
      <ContadorCustom />
    </div>
  );
}
