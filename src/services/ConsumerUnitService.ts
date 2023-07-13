import api from "./Api";
import * as Interfaces from "../interfaces/interfaces";

export async function CreateConsumerUnit(
  consumerUnit: Interfaces.ConsumerUnit
) {
  return await api.post("ConsumerUnit/insert", consumerUnit);
}

export async function EditConsumerUnit(
  serialNumber: string,
  switchState: Interfaces.SwitchState
) {
  return await api.put("ConsumerUnit/edit", {
    serialNumber,
    switchState,
  });
}

export async function DeleteConsumerUnit(serialNumber: string) {
  return await api.delete("ConsumerUnit/delete", { data: serialNumber });
}

export async function ListConsumerUnits() {
  return await api.get("ConsumerUnit/list");
}

export async function FindConsumerUnitFromCache(serialNumber: string) {
  return await api.get(`ConsumerUnit/find?serialNumber=${serialNumber}`);
}
