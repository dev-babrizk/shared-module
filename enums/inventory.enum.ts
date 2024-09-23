import { OrderStatus } from '.';

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
  DRAFT = 1,
  IN_PROGRESS,
  DONE,
  REVERSED,
  CANCELLED,
}

export enum LocationType {
  WH_STOCK = 'STOCK',
  WH_PACKING = 'PICK',
  WH_OUTPUT = 'WH_OUTPUT',
  SHIPPING_COMPANY = 'SHIPPING_COMPANY',
  CLIENT = 'CLIENT',
  VENDOR = 'VENDOR',
}

export function canUpdatePurchaseStatus(oldStatus: PurchaseStatus, newStatus: PurchaseStatus): boolean {
  // If the old status is DONE or CANCELED, don't allow any changes
  if (oldStatus === PurchaseStatus.DONE || oldStatus === PurchaseStatus.CANCELED) {
    return false;
  }

  // If the old status is DRAFT, it can only be changed to READY or CANCELED
  if (oldStatus === PurchaseStatus.DRAFT) {
    if (newStatus === PurchaseStatus.READY || newStatus === PurchaseStatus.CANCELED) {
      return true;
    }
    return false;
  }

  // If the old status is READY, it can only be changed to DONE or CANCELED
  if (oldStatus === PurchaseStatus.READY) {
    if (newStatus === PurchaseStatus.DONE || newStatus === PurchaseStatus.CANCELED) {
      return true;
    }
    return false;
  }

  // Default case: return an error if no valid transition is found
  return false;
}

export function getLocationFromStatus(status: OrderStatus): { from: LocationType; to: LocationType } | null {
  switch (status) {
    case OrderStatus.ShippedOrder: // Order is shipped from the warehouse
      return { from: LocationType.WH_PACKING, to: LocationType.WH_OUTPUT };

    case OrderStatus.DeliveredOrder:
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.CLIENT };

    case OrderStatus.FailedDelivery:
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.WH_STOCK };

    case OrderStatus.ExchangedOrder:
    case OrderStatus.ReturnedOrder:
      return { from: LocationType.CLIENT, to: LocationType.WH_STOCK };

    default:
      return null; // Return null if no valid status is matched
  }
}

export function canUpdatePickingListStatus(oldStatus: PickingStatus, newStatus: PickingStatus): boolean {
  // If the old status is DONE, CANCELLED, or REVERSED, don't allow any changes
  if ([PickingStatus.DONE, PickingStatus.CANCELLED, PickingStatus.REVERSED].includes(oldStatus)) {
    return false;
  }

  // If the old status is DRAFT, it can only be changed to IN_PROGRESS or CANCELLED
  if (oldStatus === PickingStatus.DRAFT) {
    return [+PickingStatus.IN_PROGRESS, +PickingStatus.CANCELLED].includes(+newStatus);
  }

  // If the old status is IN_PROGRESS, it can only be changed to DONE or REVERSED
  if (oldStatus === PickingStatus.IN_PROGRESS) {
    return [+PickingStatus.DONE, +PickingStatus.REVERSED].includes(+newStatus);
  }

  // Default case: return false if no valid transition is found
  return false;
}
