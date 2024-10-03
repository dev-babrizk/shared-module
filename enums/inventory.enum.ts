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

export enum PickingOutStatus {
  DRAFT = 1,
  IN_PROGRESS,
  DONE,
  REVERSED,
  CANCELLED,
}

export enum PickingInStatus {
  DRAFT = 1,
  IN_PROGRESS,
  DONE,
  CANCELLED,
}

export enum LocationType {
  VENDOR = 'PO', // المورد
  WH_STOCK = 'WH', // المخزون الرئيسي
  WH_PACKING = 'PICK', // منطقة التعبئة
  WH_OUTPUT = 'OUT', // منطقة الخروج
  DELIVERY = 'DLV', // منطقة التسليم
  SHIPPING_COMPANY = 'SH', // شركة الشحن
  VENDOR_RETURN = 'RPO', // مرتجع المورد
  STOCK_RETURN = 'RTO', // مرتجع المخزون
  DAMAGED = 'DMG', // التالف
  INTERNAL = 'INT', // نقل داخلي
  LOST = 'LOST', // ضياع
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
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.DELIVERY };

    case OrderStatus.FailedDelivery:
      return { from: LocationType.SHIPPING_COMPANY, to: LocationType.STOCK_RETURN };

    case OrderStatus.ExchangedOrder:
    case OrderStatus.ReturnedOrder:
      return { from: LocationType.DELIVERY, to: LocationType.STOCK_RETURN };

    default:
      return null; // Return null if no valid status is matched
  }
}

export function canUpdatePickingOutListStatus(oldStatus: PickingOutStatus, newStatus: PickingOutStatus): boolean {
  // If the old status is DONE, CANCELLED, or REVERSED, don't allow any changes
  if ([PickingOutStatus.DONE, PickingOutStatus.CANCELLED, PickingOutStatus.REVERSED].includes(oldStatus)) {
    return false;
  }

  // If the old status is DRAFT, it can only be changed to IN_PROGRESS or CANCELLED
  if (oldStatus === PickingOutStatus.DRAFT) {
    return [+PickingOutStatus.IN_PROGRESS, +PickingOutStatus.CANCELLED].includes(+newStatus);
  }

  // If the old status is IN_PROGRESS, it can only be changed to DONE or REVERSED
  if (oldStatus === PickingOutStatus.IN_PROGRESS) {
    return [+PickingOutStatus.DONE, +PickingOutStatus.REVERSED].includes(+newStatus);
  }

  // Default case: return false if no valid transition is found
  return false;
}

export function canUpdatePickingInListStatus(oldStatus: PickingInStatus, newStatus: string | number): boolean {
  // If the old status is DONE, CANCELLED, or REVERSED, don't allow any changes
  if ([PickingInStatus.DONE, PickingInStatus.CANCELLED].includes(oldStatus)) {
    return false;
  }

  // If the old status is DRAFT, it can only be changed to IN_PROGRESS or CANCELLED
  if (oldStatus === PickingInStatus.DRAFT) {
    return [+PickingInStatus.IN_PROGRESS, +PickingInStatus.CANCELLED].includes(+newStatus);
  }

  // If the old status is IN_PROGRESS, it can only be changed to DONE or REVERSED
  if (oldStatus === PickingInStatus.IN_PROGRESS) {
    return [+PickingInStatus.DONE].includes(+newStatus);
  }

  // Default case: return false if no valid transition is found
  return false;
}

export enum PICKINGLIST_ORDERSTATUSES {
  IN = OrderStatus.OrderPreparing,
  OUT = OrderStatus.PendingOrder,
}
