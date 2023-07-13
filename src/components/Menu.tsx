/* eslint-disable @typescript-eslint/no-misused-promises */
import * as Services from "../services/ConsumerUnitService";
import * as Interfaces from "../interfaces/interfaces";

function Menu() {
  async function CreateConsumerUnit() {
    const consumerUnit: Interfaces.ConsumerUnit = {
      SerialNumber: "Teste",
      Meter: { Id: 16, Number: 1, FirmwareVersion: "0.0001" },
      SwitchState: 0,
    };

    const response = await Services.CreateConsumerUnit(consumerUnit);
    console.log(response);
  }

  return (
    <div className="buttons">
      <button className="button" onClick={CreateConsumerUnit}>
        Insert a new endpoint
      </button>
      <button className="button">Edit an existing endpoint</button>
      <button className="button">Delete an existing endpoint</button>
      <button className="button">List all endpoints</button>
      <button className="button">Find a endpoint</button>
      <button className="button" onClick={() => window.close()}>
        Exit
      </button>
    </div>
  );
}

export default Menu;
