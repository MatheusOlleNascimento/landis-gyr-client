/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as Services from "../services/ConsumerUnitService";
import * as Interfaces from "../interfaces/interfaces";
import { AxiosResponse } from "axios";

function Menu() {
  async function CreateConsumerUnit() {
    const consumerUnit: Interfaces.ConsumerUnit = {
      SerialNumber: "Teste",
      Meter: { Id: 16, Number: 1, FirmwareVersion: "0.0001" },
      SwitchState: 0,
    };

    const response = await Services.CreateConsumerUnit(consumerUnit);
    VerifyResponse(response);
  }

  async function EditConsumerUnit() {
    const serialNumber = "Teste";
    const switchState = 0;

    const response = await Services.EditConsumerUnit(serialNumber, switchState);
    VerifyResponse(response);
  }

  async function DeleteConsumerUnit() {
    const serialNumber = "Teste";

    const response = await Services.DeleteConsumerUnit(serialNumber);
    VerifyResponse(response);
  }

  async function ListConsumerUnits() {
    const response = await Services.ListConsumerUnits();
    VerifyResponse(response);
  }

  async function FindConsumerUnitFromCache() {
    const serialNumber = "Teste";

    const response = await Services.FindConsumerUnit(serialNumber);
    VerifyResponse(response);
  }

  function VerifyResponse(response: AxiosResponse | void) {
    if (response) {
      console.log(response);
    }
  }

  return (
    <div className="buttons">
      <button className="button" onClick={CreateConsumerUnit}>
        Insert a new endpoint
      </button>
      <button className="button" onClick={EditConsumerUnit}>
        Edit an existing endpoint
      </button>
      <button className="button" onClick={DeleteConsumerUnit}>
        Delete an existing endpoint
      </button>
      <button className="button" onClick={ListConsumerUnits}>
        List all endpoints
      </button>
      <button className="button" onClick={FindConsumerUnitFromCache}>
        Find a endpoint
      </button>
      <button className="button" onClick={() => window.close()}>
        Exit
      </button>
    </div>
  );
}

export default Menu;
