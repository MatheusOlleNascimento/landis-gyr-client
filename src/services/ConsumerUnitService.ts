/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import api from "./Api";
import * as Interfaces from "../interfaces/interfaces";

export async function CreateConsumerUnit(
  consumerUnit: Interfaces.ConsumerUnit
) {
  return await api
    .post("ConsumerUnit/insert", consumerUnit)
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.errorMessage);
      }
    });
}

export async function EditConsumerUnit(
  serialNumber: string,
  switchState: Interfaces.SwitchState
) {
  return await api
    .put(
      `ConsumerUnit/edit?serialNumber=${serialNumber}&switchState=${switchState}`
    )
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.errorMessage);
      }
    });
}

export async function DeleteConsumerUnit(serialNumber: string) {
  return await api
    .delete(`ConsumerUnit/delete?serialNumber=${serialNumber}`)
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.errorMessage);
      }
    });
}

export async function ListConsumerUnits() {
  return await api.get("ConsumerUnit/list").catch(function (error) {
    if (error.response) {
      alert(error.response.data.errorMessage);
    }
  });
}

export async function FindConsumerUnit(serialNumber: string) {
  return await api
    .get(`ConsumerUnit/find?serialNumber=${serialNumber}`)
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.errorMessage);
      }
    });
}
