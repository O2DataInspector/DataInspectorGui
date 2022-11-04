import {
  Device,
  DisplayMethod,
  Message,
  Url,
  MessageSummary,
} from "store/state";

const DISCONNECT = "DISCONNECT";
const SET_DEVICES = "SET_DEVICES";
const SET_MESSAGES = "SET_MESSAGES";
const SET_DISPLAYED = "SET_DISPLAYED";
const SET_DISPLAY_METHOD = "SET_DISPLAY_METHOD";
const SET_TOPOLOGY_DETAILS = "SET_TOPOLOGY_DETAILS";
const UPDATE_DEVICE_MESSAGE = "UPDATE_DEVICE_MESSAGE";

interface Disconnect {
  type: typeof DISCONNECT;
}

interface SetDevices {
  type: typeof SET_DEVICES;
  devices: Device[];
}

interface SetMessages {
  type: typeof SET_MESSAGES;
  messages: MessageSummary[];
}

interface SetDisplayed {
  type: typeof SET_DISPLAYED;
  deviceName: string;
  messageId: string;
}

interface SetDisplayMethod {
  type: typeof SET_DISPLAY_METHOD;
  message: Message;
  method: DisplayMethod;
}

interface SetTopologyDetails {
  type: typeof SET_TOPOLOGY_DETAILS;
  analysisHost: Url;
  devices: Device[];
}

interface UpdateDeviceMessage {
  type: typeof UPDATE_DEVICE_MESSAGE;
  deviceName: string;
  message: Message;
  messageId: string;
}

type Action =
  | Disconnect
  | SetDevices
  | SetMessages
  | SetDisplayed
  | SetDisplayMethod
  | SetTopologyDetails
  | UpdateDeviceMessage;

const disconnect = (): Action => ({
  type: DISCONNECT,
});

const setDevices = (devices: Device[]): Action => ({
  type: SET_DEVICES,
  devices: devices,
});

const setMessages = (messages: MessageSummary[]): Action => ({
  type: SET_MESSAGES,
  messages: messages,
});

const setDisplayed = (deviceName: string, messageId: string): Action => ({
  type: SET_DISPLAYED,
  deviceName: deviceName,
  messageId: messageId,
});

const setDisplayMethod = (message: Message, method: DisplayMethod): Action => ({
  type: SET_DISPLAY_METHOD,
  message: message,
  method: method,
});

const setTopologyDetails = (analysisHost: Url, devices: Device[]): Action => ({
  type: SET_TOPOLOGY_DETAILS,
  analysisHost: analysisHost,
  devices: devices,
});

const updateDeviceMessage = (
  deviceName: string,
  message: Message,
  messageId: string
): Action => ({
  type: UPDATE_DEVICE_MESSAGE,
  deviceName: deviceName,
  message: message,
  messageId: messageId,
});

export default Action;
export {
  DISCONNECT,
  SET_DEVICES,
  SET_MESSAGES,
  SET_DISPLAYED,
  SET_DISPLAY_METHOD,
  SET_TOPOLOGY_DETAILS,
  UPDATE_DEVICE_MESSAGE,
  disconnect,
  setDevices,
  setMessages,
  setDisplayed,
  setDisplayMethod,
  setTopologyDetails,
  updateDeviceMessage,
};
