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
    // case OrderStatus.ConfirmedOrder:
    //   return { from: LocationType.WH_STOCK, to: LocationType.WH_PACKING };

    case OrderStatus.FailedConfirmation:
      return { from: LocationType.WH_PACKING, to: LocationType.WH_STOCK };

    case OrderStatus.OrderPreparing:
      return { from: LocationType.WH_STOCK, to: LocationType.WH_PACKING };

    case OrderStatus.FailedFulfillment:
      return { from: LocationType.WH_OUTPUT, to: LocationType.WH_PACKING };

    case OrderStatus.ShippedOrder:
    case OrderStatus.PendingOrder:
      return { from: LocationType.WH_OUTPUT, to: LocationType.SHIPPING_COMPANY };

    case OrderStatus.FailedDelivery:
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.WH_OUTPUT };

    case OrderStatus.DeliveredOrder:
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.CLIENT };

    case OrderStatus.ExchangeOrderInProgress:
    case OrderStatus.ReturnOrderInProgress:
      return { from: LocationType.CLIENT, to: LocationType.SHIPPING_COMPANY };

    case OrderStatus.ExchangedOrder:
    case OrderStatus.ReturnedOrder:
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.WH_STOCK };

    case OrderStatus.FailedExchangeRequest:
    case OrderStatus.FailedReturnRequest:
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.CLIENT };

    default:
      return null; // Return null if no valid status is matched
  }
}
