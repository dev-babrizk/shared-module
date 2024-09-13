// Enums for statuses and types
export enum StockStatus {
  AVAILABLE = 1,
  RESERVED,
  PICKED,
  OUT_OF_STOCK,
}

export enum PurchaseStatus {
  DRAFT = 1,
  READY,
  DONE,
  CANCELED,
}

export enum ReturnReason {
  DAMAGED = 'damaged',
  INCORRECT_SHIPMENT = 'incorrect_shipment',
  EXPIRED = 'expired',
}

export enum PickingStatus {
  READY = 'ready',
  ASSIGNED = 'assigned',
  SHIPPED = 'shipped',
}

export enum LocationType {
  WAREHOUSE = 1,
  VENDOR,
  SHIPPING_COMPANY,
  CLIENT,
}
