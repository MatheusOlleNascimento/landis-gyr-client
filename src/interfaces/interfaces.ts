export interface ConsumerUnit {
  SerialNumber: string;
  Meter: Meter;
  SwitchState: SwitchState;
}

export interface Meter {
  Id: MeterModel;
  Number: number;
  FirmwareVersion: string;
}

export enum SwitchState {
  Disconnected = 0,
  Connected = 1,
  Armed = 2,
}

export enum MeterModel {
  NSX1P2W = 16,
  NSX1P3W = 17,
  NSX2P3W = 18,
  NSX2P4W = 19,
}
