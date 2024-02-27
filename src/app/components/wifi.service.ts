import { Injectable } from '@angular/core';
import { BluetoothLe } from '@capacitor-community/bluetooth-le';

@Injectable({
  providedIn: 'root'
})
export class WifiService {
  deviceId!: string;

  constructor() {

  }

  async initialize() {
    await BluetoothLe.initialize();
  }

  async scanAndConnect() {
    // Start scanning
    await BluetoothLe.requestLEScan();

    // Listen for devices
    BluetoothLe.addListener('onScanResult', async (result) => {
      console.log('Found device: ', result);

      // Check if this is your HM-10 module by matching the name or part of the address
      //@ts-ignore
      if (result.name === 'BT-05') {
        // Stop scanning
        await BluetoothLe.stopLEScan();
        
        // Connect to the device
        const connection = await BluetoothLe.connect({ deviceId: result.device.deviceId });
        console.log('Connected to', connection);
        this.deviceId = result.device.deviceId;
        // Once connected, you can send data or perform other operations
      }
    });
  }

  async sendData(deviceId: string, value: string) {
    // Default service and characteristic UUIDs for HM-10 and similar BLE modules
  const serviceUUID = "0000FFE0-0000-1000-8000-00805F9B34FB";
  const characteristicUUID = "0000FFE1-0000-1000-8000-00805F9B34FB";

  await BluetoothLe.write({
    deviceId: deviceId,
    service: serviceUUID,
    characteristic: characteristicUUID,
    value: value,
  });
  }
}