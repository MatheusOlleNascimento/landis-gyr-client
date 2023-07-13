/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as Services from "../services/ConsumerUnitService";
import * as Interfaces from "../interfaces/interfaces";
import { useState } from "react";

type ModalType = "Insert" | "Edit" | "Delete" | "List" | "Find";

function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState<ModalType>("Insert");

  const [serialNumber, setSerialNumber] = useState<string>();

  const [meterId, setMeterId] = useState<number>();
  const [meterNumber, setMeterNumber] = useState<number>();
  const [meterFirmwareVersion, setMeterFirmwareVersion] = useState<string>();

  const [switchState, setSwitchState] = useState<number>();

  // Service logic

  async function CreateConsumerUnit() {
    const consumerUnit: Interfaces.ConsumerUnit = {
      SerialNumber: "Teste",
      Meter: { Id: 16, Number: 1, FirmwareVersion: "0.0001" },
      SwitchState: 0,
    };

    const response = await Services.CreateConsumerUnit(consumerUnit);

    setModalOpen(false);
    console.log(response);
  }

  async function EditConsumerUnit() {
    const serialNumber = "Teste";
    const switchState = 0;

    const response = await Services.EditConsumerUnit(serialNumber, switchState);

    setModalOpen(false);
    console.log(response);
  }

  async function DeleteConsumerUnit() {
    const serialNumber = "Teste";

    const response = await Services.DeleteConsumerUnit(serialNumber);

    setModalOpen(false);
    console.log(response);
  }

  async function FindConsumerUnit() {
    const serialNumber = "Teste";

    const response = await Services.FindConsumerUnit(serialNumber);

    setModalOpen(false);
    console.log(response);
  }

  async function ListConsumerUnits() {
    const response = await Services.ListConsumerUnits();

    setModalOpen(false);
    console.log(response);
  }

  //Inputs logic

  function EditMeterId(meterId: string) {
    const value = parseInt(meterId);

    if (value >= 19 && value <= 16) {
      setMeterId(value);
    }
  }

  function EditSwitchState(switchState: string) {
    const value = parseInt(switchState);

    if (value >= 0 && value <= 2) {
      setSwitchState(value);
    }
  }

  async function HandleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      await FindConsumerUnit();
    }
  }

  function EditMeterNumber(meterNumber: string) {
    const value = parseInt(meterNumber);

    if (value >= 0) {
      setMeterNumber(value);
    }
  }

  function OpenModal(type: ModalType) {
    setModalText(type);
    setModalOpen(true);
  }

  function CloseModal() {
    setModalText("Insert");
    setModalOpen(false);
  }

  async function ExecuteServiceFunction() {
    switch (modalText) {
      case "Insert":
        await CreateConsumerUnit();
        break;
      case "Edit":
        await EditConsumerUnit();
        break;
      case "Delete":
        await DeleteConsumerUnit();
        break;
      case "Find":
        await FindConsumerUnit();
        break;
      case "List":
        await ListConsumerUnits();
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div
        className="buttons"
        style={{
          display: modalOpen == true ? "none" : "",
        }}
      >
        <button className="button" onClick={() => OpenModal("Insert")}>
          Insert a new endpoint
        </button>
        <button className="button" onClick={() => OpenModal("Edit")}>
          Edit an existing endpoint
        </button>
        <button className="button" onClick={() => OpenModal("Delete")}>
          Delete an existing endpoint
        </button>
        <button className="button" onClick={() => OpenModal("Find")}>
          Find a endpoint
        </button>
        <button className="button" onClick={() => OpenModal("List")}>
          List all endpoints
        </button>
        <button className="button" onClick={() => window.close()}>
          Exit
        </button>
      </div>

      <div className="buttons" style={{ display: modalOpen ? "" : "none" }}>
        <input
          className="input"
          placeholder="SerialNumber"
          value={serialNumber}
          onKeyPress={HandleKeyPress}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
        <select
          className="input"
          placeholder="Meter Id"
          value={meterId}
          disabled={modalText != "Insert"}
          onChange={(e) => EditMeterId(e.target.value)}
        >
          <option value="16">NSX1P2W</option>
          <option value="17">NSX1P3W</option>
          <option value="18">NSX2P3W</option>
          <option value="19">NSX2P4W</option>
        </select>
        <input
          className="input"
          placeholder="Meter Number"
          type="number"
          disabled={modalText != "Insert"}
          value={meterNumber}
          onChange={(e) => EditMeterNumber(e.target.value)}
        />
        <input
          className="input"
          placeholder="FirmwareVersion"
          value={meterFirmwareVersion}
          disabled={modalText != "Insert"}
          onChange={(e) => setMeterFirmwareVersion(e.target.value)}
        />
        <select
          className="input"
          placeholder="SwitchState"
          value={switchState}
          disabled={modalText != "Insert"}
          onChange={(e) => EditSwitchState(e.target.value)}
        >
          <option value="0">Connected</option>
          <option value="1">Disconnected</option>
          <option value="2">Armed</option>
        </select>
        <button className="button" onClick={ExecuteServiceFunction}>
          {modalText}
        </button>
        <button className="button" onClick={() => CloseModal()}>
          Back
        </button>
      </div>
    </>
  );
}

export default Menu;
