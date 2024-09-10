// Enums for statuses and types
export enum InventoryStatus {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  PICKED = 'picked',
  OUT_OF_STOCK = 'out_of_stock',
}

export enum PurchaseStatus {
  PENDING = 'pending',
  RECEIVED = 'received',
  BACKORDER = 'backorder',
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
  WAREHOUSE = 'warehouse',
  SHIPPING_COMPANY = 'shipping_company',
  CLIENT = 'client',
}
