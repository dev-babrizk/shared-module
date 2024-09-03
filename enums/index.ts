export const enum EnumDetailsType {
  Description = 1, // [Description, Images]
  Details, // [Description, Image]
  Videos, // [Description, URL]
  Questions, // [Description, Question]
}

export enum GenderType {
  Female = 0,
  Male,
}

export enum TransferType {
  Bank = 1,
  Wallet,
  Instapay,
}
export enum TransactionType {
  Pending = 1,
  Paid,
  Failed,
  Rejected,
  Refunded,
}
export enum Platforms {
  TikTok = 'tt',
  Snapchat = 'sc',
  Google = 'gg',
  Instagram = 'ig',
  Facebook = 'fb',
  WhatsApp = 'wa',
  Groups = 'fbg',
  Twitter = 'tw',
  Other = 'ot',
}
// Wallet status
export enum WalletStatus {
  Commission = 1,
  Compensation,
  Refund,
  Deposit,
  Withdrawal,
}
export enum StatusUsers {
  active = 'true',
  disabled = 'false',
  waiting = 'null',
}
export enum FileOrdersType {
  Pending = 1,
  Success,
  Rejected,
  Expired,
}

export enum FileTypes {
  OnCart = 1,
  OnExcelsheet,
}

export enum InvalidRowType {
  // Validation Stage
  Dubplicate = 1,
  Name,
  Quantity,
  City,
  Street,
  Government,
  Phone,
  Price,
  //
  SKU_Not_Found,
}
export const enum WalletRefPathes {
  Order = 1,
  Withdrawals,
}

export enum PaymentMethodsTypes {
  Bank = 1,
  EWallet,
  InstaPay,
}

export enum OrderPaymentMethodsTypes {
  COD = 'COD',
  CreditCard = 'CC',
}

export enum CompanyOrIndividual {
  Individual = 0,
  Company,
}

export const DetailsType = {
  [EnumDetailsType.Description]: 'شرح المنتج',
  [EnumDetailsType.Details]: 'المحتوي التسويقي',
  [EnumDetailsType.Videos]: 'فيديوهات',
  [EnumDetailsType.Questions]: 'الاسئلة الشائعة',
};

export enum UserRole {
  SAdmin = 0, // Super Admin
  Admin, // Admin
  AU, // Account Manager User
  AFU, // Marketing User
  SEU, // Vendor User
}

// Order status
export enum OrderStatus {
  // Confirmation Steps
  NewOrderRequest = 10,
  HoldConfirmationOrder = 11,
  ConfirmedOrder = 12,
  FailedConfirmation = 13,

  // Fulfillment Steps
  OrderPreparing = 20,
  ShippedOrder = 21,
  FailedFulfillment = 22,

  // Delivery Steps
  PendingOrder = 30,
  DeliveredOrder = 31,
  FailedDelivery = 32,
  // OrderPendingDelivery = 33,

  // Customer Service Steps
  ExchangeOrderInProgress = 40,
  ExchangedOrder = 41,
  FailedExchangeRequest = 42,

  ReturnOrderInProgress = 43,
  ReturnedOrder = 44,
  FailedReturnRequest = 45,

  // Other Steps
  OutOfStockProduct = 50,
  CancelledOrderByMarketer = 51,
}

// Payment status
export const enum PaymentStatus {
  Pending = 1,
  IN_WALLET,
  Refunded,
  Canceled,
}

// Integration type
export const enum IntegrationType {
  EO = 1,
  WP,
  BO,
  ODOO,
}

// Sourcing status
export const enum SourcingStatus {
  OnCart = 0, // Order is on the cart
  Confirmed = 10, // Order confirmed by the client
  Accepted = 20, // Order accepted by the admin
  OnTheWayToDelivery = 30, // Order is on the way to delivery
  DeliveredOrder = 40, // Order DeliveredOrder to the client
  Canceled = 50, // Order canceled by the client
  OnTheWayToReturn = 60, // Order is on the way to return
  ReturnedOrder = 70, // Order returned to the store
  Refunded = 80, // Order refunded to the client
  Rejected = 90, // Order rejected by the admin
  Replacing = 100, // Order is replacing
  OnHold = 110, // Order is on hold
}
// SKUManagement status
export const enum SKUManagementStatus {
  Pending = 0,
  Approved = 10,
  Declined = 20,
}

// Banners position
export enum BannerPosition {
  HOME = 1,
}

// Banners position
export enum CategoryPosition {
  OFFER = 1,
  HOME_TOP,
  HOME_BOTTOM,
  SEARCH,
  PRODUCT,
}

// Invoice status
export const enum InvoiceStatus {
  Pending = 0,
  Paid = 1,
  Failed = 2,
  Rejected = 3,
}

// Services status
export const enum ServicesStatus {
  InternationalShipping = 10,
  CustomsClearance = 20,
  VATHandling = 30,
  StorageSKUManagement = 40,
  ShippingInsurance = 50,
  CallCenter = 60,
  CashCollection = 70,
}

export const enum TicketsType {
  Suggestions = 1,
  Complaints,
  Sourcing,
  SKUManagement,
}

export const enum TicketsStatus {
  Open = 1,
  Solved,
}

export enum SortFilter {
  PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW',
  PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH',
  PROFIT_HIGH_TO_LOW = 'PROFIT_HIGH_TO_LOW',
  PROFIT_LOW_TO_HIGH = 'PROFIT_LOW_TO_HIGH',
}

export enum WidthFilter {
  LESS_THAN_ONE = 'LESS_THAN_ONE',
  TWO_TO_THREE = 'TWO_TO_THREE',
  FOUR_TO_FOUR = 'FOUR_TO_FOUR',
  MORE_THAN_FOUR = 'MORE_THAN_FOUR',
}

// Order status
export const orderStatusTypes = {
  paidedStatuses: [OrderStatus.DeliveredOrder, OrderStatus.ExchangedOrder],
  refundStatuses: [OrderStatus.ReturnedOrder],
  positveStatus: [
    OrderStatus.NewOrderRequest,
    OrderStatus.HoldConfirmationOrder,
    OrderStatus.ConfirmedOrder,
    OrderStatus.ShippedOrder,
    OrderStatus.OrderPreparing,
    OrderStatus.PendingOrder,
    OrderStatus.DeliveredOrder,
    OrderStatus.OutOfStockProduct,
  ],
  negativeStatus: [
    OrderStatus.FailedConfirmation,
    OrderStatus.FailedFulfillment,
    OrderStatus.CancelledOrderByMarketer,
    OrderStatus.FailedDelivery,
    OrderStatus.FailedReturnRequest,
    OrderStatus.FailedExchangeRequest,
  ],
  // pendingStatus: [OrderStatus.HoldConfirmationOrder],
};

export const enum DescriptionType {
  Description = 1,
  Details,
  Videos,
  Questions,
}

export const enum OrderAction {
  Status = 'Status',
  Quantity = 'Quantity',
  Price = 'Price',
}
export const enum CategoryTypeEnum {
  Services = 1,
  Affiliators = 2,
  Orders = 3,
  Invoices = 4,
  Wallet = 5,
  SKUManagement = 6,
  Shipping = 7,
  Sourcing = 8,
  Dashboard = 9,
  Stocks = 10,
  Warehouses = 11,
  Categories = 12,
  Packages = 13,
  Tickets = 14,
  Settings = 15,
  Permissions = 17,
  Pricing = 18,
}
export const enum PermissionTypeEnum {
  Manage = 'M',
  Create = 'C',
  Update = 'U',
  Delete = 'D',
}

export enum CategoryType {
  OFFER = 'offer',
  TAG = 'tag',
  Main = 'main',
}

export enum DynamicLinkYourStoreModalEnum {
  linkStore = 1,
  active = 2,
  pause = 3,
  delete = 4,
}

export const PermissionType: any = {
  [PermissionTypeEnum.Manage]: 'Manage',
  [PermissionTypeEnum.Create]: 'Create',
  [PermissionTypeEnum.Update]: 'Update',
  [PermissionTypeEnum.Delete]: 'Delete',
};

export const PermissionByRole: any = {
  [UserRole.SAdmin]: {
    [CategoryTypeEnum.Dashboard]: [PermissionTypeEnum.Manage],
    [CategoryTypeEnum.Stocks]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Pricing]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Services]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Affiliators]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Orders]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Invoices]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Wallet]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.SKUManagement]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Shipping]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Sourcing]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Warehouses]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Categories]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Packages]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Tickets]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Settings]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
  },
  [UserRole.Admin]: {
    [CategoryTypeEnum.Stocks]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Pricing]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Affiliators]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Orders]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Wallet]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Categories]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Permissions]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Settings]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
  },
  [UserRole.AU]: {
    [CategoryTypeEnum.Affiliators]: [PermissionTypeEnum.Manage],
    [CategoryTypeEnum.Orders]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Update],
  },
  [UserRole.AFU]: {
    [CategoryTypeEnum.Dashboard]: [PermissionTypeEnum.Manage],
    [CategoryTypeEnum.Orders]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create],
    [CategoryTypeEnum.Invoices]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create],
    [CategoryTypeEnum.SKUManagement]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create],
    [CategoryTypeEnum.Sourcing]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create],
    [CategoryTypeEnum.Tickets]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create],
  },
  [UserRole.SEU]: {
    [CategoryTypeEnum.Dashboard]: [PermissionTypeEnum.Manage],
    [CategoryTypeEnum.Stocks]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Affiliators]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Orders]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Wallet]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
    [CategoryTypeEnum.Categories]: [PermissionTypeEnum.Manage, PermissionTypeEnum.Create, PermissionTypeEnum.Update, PermissionTypeEnum.Delete],
  },
};
// export const mainPagePathByRole: any = {
//   [UserRole.SAdmin]: '/dashboard',
//   [UserRole.Admin]: '/dashboard',
//   [UserRole.AU]: '/admin/orders',
//   [UserRole.AFU]: '/dashboard',
// };
export const isOrderChangeAllowed = (status: number) => {
  switch (status) {
    case OrderStatus.NewOrderRequest:
    case OrderStatus.ConfirmedOrder:
    case OrderStatus.HoldConfirmationOrder:
    case OrderStatus.OutOfStockProduct:
      return true;
    default:
      return false;
  }
};

export const isOrderShippingChangeAllowed = (status: number) => {
  switch (status) {
    case OrderStatus.OrderPreparing:
      return true;
    default:
      return false;
  }
};

// Paided statuses are the statuses that the order is considered as success
export const isStatusToSuccess = (oldStatus: number, status: number) => {
  return !orderStatusTypes.paidedStatuses.includes(oldStatus) && orderStatusTypes.paidedStatuses.includes(status);
};

export const isStatusFromSuccess = (oldStatus: number, status: number) => {
  return orderStatusTypes.paidedStatuses.includes(oldStatus) && !orderStatusTypes.paidedStatuses.includes(status);
};

export const isStatusToRefund = (oldStatus: number, status: number) => {
  return !orderStatusTypes.refundStatuses.includes(oldStatus) && orderStatusTypes.refundStatuses.includes(status);
};

export const isStatusToFailed = (oldStatus: number, status: number) => {
  return !orderStatusTypes.negativeStatus.includes(oldStatus) && orderStatusTypes.negativeStatus.includes(status);
};

// export const isStatusToPending = (oldStatus: number, status: number) => {
//   return !orderStatusTypes.pendingStatus.includes(oldStatus) && orderStatusTypes.pendingStatus.includes(status);
// };

const notifiableStatuses = [
  // Statuses that the user should be notified about to take an action
  OrderStatus.FailedDelivery,
  OrderStatus.HoldConfirmationOrder,
  OrderStatus.OutOfStockProduct,
  OrderStatus.FailedConfirmation,
  OrderStatus.FailedFulfillment,
  OrderStatus.CancelledOrderByMarketer,
  OrderStatus.DeliveredOrder,
];

export const isStatusNotifiable = (status: number) => {
  return notifiableStatuses.includes(status);
};
export const getNextStatusOptions = (status: number) => {
  switch (status) {
    case OrderStatus.NewOrderRequest:
      return [OrderStatus.ConfirmedOrder, OrderStatus.HoldConfirmationOrder, OrderStatus.FailedConfirmation, OrderStatus.CancelledOrderByMarketer];
    case OrderStatus.ConfirmedOrder:
      return [OrderStatus.OrderPreparing, OrderStatus.FailedConfirmation, OrderStatus.OutOfStockProduct];
    case OrderStatus.ShippedOrder:
      return [OrderStatus.PendingOrder, OrderStatus.DeliveredOrder, OrderStatus.FailedDelivery];
    case OrderStatus.OrderPreparing:
      return [OrderStatus.ShippedOrder, OrderStatus.FailedFulfillment, OrderStatus.OutOfStockProduct];
    case OrderStatus.PendingOrder:
      return [OrderStatus.DeliveredOrder, OrderStatus.FailedDelivery];
    case OrderStatus.DeliveredOrder:
      return [OrderStatus.PendingOrder, OrderStatus.FailedDelivery, OrderStatus.ExchangeOrderInProgress, OrderStatus.ReturnOrderInProgress];
    case OrderStatus.HoldConfirmationOrder:
      return [OrderStatus.ConfirmedOrder, OrderStatus.CancelledOrderByMarketer, OrderStatus.FailedConfirmation];
    case OrderStatus.FailedConfirmation:
      return [OrderStatus.ConfirmedOrder, OrderStatus.HoldConfirmationOrder];
    case OrderStatus.FailedFulfillment:
      return [OrderStatus.OrderPreparing, OrderStatus.ShippedOrder];
    case OrderStatus.FailedDelivery:
      return [OrderStatus.PendingOrder, OrderStatus.DeliveredOrder];
    case OrderStatus.ReturnOrderInProgress:
      return [OrderStatus.ReturnedOrder];
    case OrderStatus.ExchangeOrderInProgress:
      return [OrderStatus.ExchangedOrder];
    default:
      return [];
  }
};
export enum AttributesTypes {
  Weight = 1,
  Color,
  Size,
  Material,
  Brand,
  Model,
}

export enum StockStatus {
  OUT_OF_STOCK = '0',
  ForTestings = 'A',
  From100To200 = 'B',
  From200To400 = 'C',
  From400To600 = 'D',
  From600To800 = 'E',
  From800To1000 = 'F',
  MoreThan1000 = 'G',
}

export enum OrderSource {
  BabRizkOrders = 'BabRizkOrders',
  Odoo = 'Odoo',
  WordPress = 'WordPress',
  EasyOrders = 'EasyOrders',
}

export enum ODOO_WarehouseState {
  PENDING = 'draft',
  WAITING_STOCK = 'waiting',
  READY_TO_ASSIGN = 'ready_to_assign',
  ASSIGNED_TO_SHIPPING = 'assign',
  PICKING = 'picking',
  FULFILLMENT = 'fulfillment',
  DISPATCHED = 'dispatched',
  SHIPPED = 'shipped',
  TO_RETURN = 'to_return',
  RETURNED_TO_WAREHOUSE = 'returned',
  CANCELLED = 'cancel',
}

export enum ODOO_DeliveryState {
  PENDING = 'draft',
  IN_TRANSIT = 'transit',
  OUT_FOR_DELIVERY = 'out',
  COURIER_DELIVERED = 'courier_delivered',
  DELIVERED = 'delivered',
  RETURNED = 'return',
  DAMAGED = 'damage',
  LOST = 'lost',
  RETURNED_TO_WAREHOUSE = 'returned',
  RETURN_REFUND = 'return_refund',
  COMPLETED = 'completed',
  READY_FOR_RETURN = 'ready_for_return',
  EXCHANGE_REQUEST = 'exchange_request',
  EXCHANGE_IN_PROGRESS = 'exchange_in_progress',
  EXCHANGE_UNSUCCESSFUL = 'exchange_unsuccessful',
  EXCHANGE_COMPLETED = 'exchange_completed',
  REFUND_REQUEST = 'refund_request',
  REFUND_IN_PROGRESS = 'refund_in_progress',
  REFUND_UNSUCCESSFUL = 'refund_unsuccessful',
  REFUND_COMPLETED = 'refund_completed',
  CANCELLED = 'cancel',
}

export enum ODOO_SaleOrderState {
  PROCESS = 'draft',
  SALES_CONFIRMED = 'confirm',
  CONFIRMED = 'sale',
  CANCEL_REQUEST = 'cancel_request',
  ON_HOLD = 'waiting',
  CALL_BACK = 'call_back',
  WAITING_PAYMENT = 'waiting_payment',
  WAITING_PAYMENT_APPROVAL = 'waiting_payment_approval',
  FAILED_PAYMENT = 'failed_payment',
  NO_ANSWER = 'no_answer',
}

// export function convertOrderState_From_ODOO(state: ODOO_SaleOrderState, wh_state: ODOO_WarehouseState, delivery_state: ODOO_DeliveryState): OrderStatus {
//   if (state === ODOO_SaleOrderState.PROCESS && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.NewOrderRequest;
//   } else if (state === ODOO_SaleOrderState.NO_ANSWER && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.HoldConfirmationOrder;
//   } else if (state === ODOO_SaleOrderState.ON_HOLD && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.HoldConfirmationOrder;
//   } else if (state === ODOO_SaleOrderState.WAITING_PAYMENT && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.HoldConfirmationOrder;
//     // } else if (state === ODOO_SaleOrderState.PROCESS && delivery_state === ODOO_DeliveryState.PENDING) {
//     //   return OrderStatus.HoldConfirmationOrder;
//   } else if (state === ODOO_SaleOrderState.CANCEL_REQUEST && wh_state === ODOO_WarehouseState.CANCELLED && delivery_state === ODOO_DeliveryState.CANCELLED) {
//     return OrderStatus.FailedConfirmation;
//   } else if (state === ODOO_SaleOrderState.SALES_CONFIRMED && wh_state === ODOO_WarehouseState.READY_TO_ASSIGN && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.ConfirmedOrder;
//   } else if (state === ODOO_SaleOrderState.SALES_CONFIRMED && wh_state === ODOO_WarehouseState.WAITING_STOCK && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.ConfirmedOrder;
//     // } else if (state === ODOO_SaleOrderState.SALES_CONFIRMED && wh_state === ODOO_WarehouseState.READY_TO_ASSIGN) {
//     //   return OrderStatus.ConfirmedOrder;
//   } else if (state === ODOO_SaleOrderState.SALES_CONFIRMED && wh_state === ODOO_WarehouseState.PICKING && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.OrderPreparing;
//   } else if (state === ODOO_SaleOrderState.SALES_CONFIRMED && wh_state === ODOO_WarehouseState.FULFILLMENT && delivery_state === ODOO_DeliveryState.PENDING) {
//     return OrderStatus.OrderPreparing;
//     // } else if (wh_state === ODOO_WarehouseState.PICKING) {
//     //   return OrderStatus.OrderPreparing;
//     // } else if (wh_state === ODOO_WarehouseState.FULFILLMENT) {
//     //   return OrderStatus.OrderPreparing;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.IN_TRANSIT) {
//     return OrderStatus.ShippedOrder;
//     // } else if (wh_state === ODOO_WarehouseState.DISPATCHED || delivery_state === ODOO_DeliveryState.IN_TRANSIT) {
//     //   return OrderStatus.ShippedOrder;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.OUT_FOR_DELIVERY) {
//     return OrderStatus.OrderPendingDelivery;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.RETURNED) {
//     return OrderStatus.PendingOrder;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.READY_FOR_RETURN) {
//     return OrderStatus.FailedDelivery;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.COMPLETED) {
//     return OrderStatus.DeliveredOrder;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.DELIVERED) {
//     return OrderStatus.DeliveredOrder;
//     // } else if (delivery_state === ODOO_DeliveryState.COMPLETED || delivery_state === ODOO_DeliveryState.DELIVERED) {
//     //   return OrderStatus.DeliveredOrder;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.RETURNED_TO_WAREHOUSE && delivery_state === ODOO_DeliveryState.RETURNED_TO_WAREHOUSE) {
//     return OrderStatus.FailedDelivery;
//     // } else if (delivery_state === ODOO_DeliveryState.RETURNED || delivery_state === ODOO_DeliveryState.DAMAGED || delivery_state === ODOO_DeliveryState.LOST) {
//     //   return OrderStatus.FailedDelivery;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.EXCHANGE_IN_PROGRESS) {
//     return OrderStatus.ExchangeOrderInProgress;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.EXCHANGE_REQUEST) {
//     return OrderStatus.ExchangeOrderInProgress;
//     // } else if (delivery_state === ODOO_DeliveryState.EXCHANGE_IN_PROGRESS) {
//     //   return OrderStatus.ExchangeOrderInProgress;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.EXCHANGE_UNSUCCESSFUL) {
//     return OrderStatus.FailedExchangeRequest;
//     // } else if (delivery_state === ODOO_DeliveryState.EXCHANGE_UNSUCCESSFUL) {
//     //   return OrderStatus.FailedExchangeRequest;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.RETURNED_TO_WAREHOUSE && delivery_state === ODOO_DeliveryState.EXCHANGE_COMPLETED) {
//     return OrderStatus.ExchangedOrder;
//     // } else if (delivery_state === ODOO_DeliveryState.EXCHANGE_COMPLETED) {
//     //   return OrderStatus.ExchangedOrder;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_IN_PROGRESS) {
//     return OrderStatus.ReturnOrderInProgress;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_REQUEST) {
//     return OrderStatus.ReturnOrderInProgress;
//     // } else if (delivery_state === ODOO_DeliveryState.REFUND_IN_PROGRESS) {
//     //   return OrderStatus.ReturnOrderInProgress;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_COMPLETED) {
//     return OrderStatus.ReturnedOrder;
//     // } else if (delivery_state === ODOO_DeliveryState.REFUND_COMPLETED) {
//     //   return OrderStatus.ReturnedOrder;
//   } else if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_UNSUCCESSFUL) {
//     return OrderStatus.FailedReturnRequest;
//     // } else if (delivery_state === ODOO_DeliveryState.REFUND_UNSUCCESSFUL) {
//     //   return OrderStatus.FailedReturnRequest;
//   } else if (state === ODOO_SaleOrderState.CANCEL_REQUEST && wh_state === ODOO_WarehouseState.CANCELLED) {
//     return OrderStatus.CancelledOrderByMarketer;
//   } else if (wh_state === ODOO_WarehouseState.WAITING_STOCK) {
//     return OrderStatus.OutOfStockProduct;
//   }

export function convertOrderState_From_ODOO(state: ODOO_SaleOrderState, wh_state: ODOO_WarehouseState, delivery_state: ODOO_DeliveryState): OrderStatus | void {
  if (
    (state === ODOO_SaleOrderState.PROCESS && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) ||
    (state === ODOO_SaleOrderState.NO_ANSWER && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) ||
    (state === ODOO_SaleOrderState.ON_HOLD && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) ||
    (state === ODOO_SaleOrderState.WAITING_PAYMENT && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING) ||
    (state === ODOO_SaleOrderState.CALL_BACK && wh_state === ODOO_WarehouseState.PENDING && delivery_state === ODOO_DeliveryState.PENDING)
  ) {
    return OrderStatus.HoldConfirmationOrder;
  }

  if (state === ODOO_SaleOrderState.CANCEL_REQUEST && wh_state === ODOO_WarehouseState.CANCELLED && delivery_state === ODOO_DeliveryState.CANCELLED) {
    return OrderStatus.FailedConfirmation;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.CANCELLED && delivery_state === ODOO_DeliveryState.CANCELLED) {
    return OrderStatus.FailedFulfillment;
  }

  if (
    state === ODOO_SaleOrderState.SALES_CONFIRMED &&
    (wh_state === ODOO_WarehouseState.READY_TO_ASSIGN || wh_state === ODOO_WarehouseState.WAITING_STOCK) &&
    delivery_state === ODOO_DeliveryState.PENDING
  ) {
    return OrderStatus.ConfirmedOrder;
  }

  if (state === ODOO_SaleOrderState.SALES_CONFIRMED && (wh_state === ODOO_WarehouseState.PICKING || wh_state === ODOO_WarehouseState.FULFILLMENT) && delivery_state === ODOO_DeliveryState.PENDING) {
    return OrderStatus.OrderPreparing;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.IN_TRANSIT) {
    return OrderStatus.ShippedOrder;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.OUT_FOR_DELIVERY) {
    //  TODO mahmound want to add new status in babrizq "OrderPendingDelivery" and do it here
    // return OrderStatus.OrderPendingDelivery;
    return OrderStatus.ShippedOrder;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.RETURNED) {
    return OrderStatus.PendingOrder;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && (delivery_state === ODOO_DeliveryState.COMPLETED || delivery_state === ODOO_DeliveryState.DELIVERED)) {
    return OrderStatus.DeliveredOrder;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.RETURNED_TO_WAREHOUSE && delivery_state === ODOO_DeliveryState.RETURNED_TO_WAREHOUSE) {
    return OrderStatus.FailedDelivery;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.EXCHANGE_IN_PROGRESS) {
    return OrderStatus.ExchangeOrderInProgress;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.EXCHANGE_REQUEST) {
    return OrderStatus.ExchangeOrderInProgress;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.EXCHANGE_UNSUCCESSFUL) {
    return OrderStatus.FailedExchangeRequest;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.RETURNED_TO_WAREHOUSE && delivery_state === ODOO_DeliveryState.EXCHANGE_COMPLETED) {
    return OrderStatus.ExchangedOrder;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_IN_PROGRESS) {
    return OrderStatus.ReturnOrderInProgress;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_REQUEST) {
    return OrderStatus.ReturnOrderInProgress;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_COMPLETED) {
    return OrderStatus.ReturnedOrder;
  }

  if (state === ODOO_SaleOrderState.CONFIRMED && wh_state === ODOO_WarehouseState.SHIPPED && delivery_state === ODOO_DeliveryState.REFUND_UNSUCCESSFUL) {
    return OrderStatus.FailedReturnRequest;
  }

  if (state === ODOO_SaleOrderState.CANCEL_REQUEST && wh_state === ODOO_WarehouseState.CANCELLED) {
    return OrderStatus.CancelledOrderByMarketer;
  }

  if (wh_state === ODOO_WarehouseState.WAITING_STOCK) {
    return OrderStatus.OutOfStockProduct;
  }

  // Fallback to NewOrderRequest if no match
  return;
}

export function convertOrderState_TO_ODOO(status: OrderStatus): { state: ODOO_SaleOrderState; wh_state: ODOO_WarehouseState; delivery_state: ODOO_DeliveryState } {
  switch (status) {
    case OrderStatus.NewOrderRequest:
      return { state: ODOO_SaleOrderState.PROCESS, wh_state: ODOO_WarehouseState.PENDING, delivery_state: ODOO_DeliveryState.PENDING };
    case OrderStatus.HoldConfirmationOrder:
      return { state: ODOO_SaleOrderState.PROCESS, wh_state: ODOO_WarehouseState.PENDING, delivery_state: ODOO_DeliveryState.PENDING };
    case OrderStatus.ConfirmedOrder:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.READY_TO_ASSIGN, delivery_state: ODOO_DeliveryState.PENDING };
    case OrderStatus.FailedConfirmation:
      return { state: ODOO_SaleOrderState.CANCEL_REQUEST, wh_state: ODOO_WarehouseState.CANCELLED, delivery_state: ODOO_DeliveryState.CANCELLED };
    case OrderStatus.OrderPreparing:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.PICKING, delivery_state: ODOO_DeliveryState.PENDING };
    case OrderStatus.ShippedOrder:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.DISPATCHED, delivery_state: ODOO_DeliveryState.IN_TRANSIT };
    case OrderStatus.DeliveredOrder:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.SHIPPED, delivery_state: ODOO_DeliveryState.DELIVERED };
    case OrderStatus.FailedDelivery:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.SHIPPED, delivery_state: ODOO_DeliveryState.RETURNED };
    case OrderStatus.ExchangeOrderInProgress:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.SHIPPED, delivery_state: ODOO_DeliveryState.EXCHANGE_IN_PROGRESS };
    case OrderStatus.ExchangedOrder:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.SHIPPED, delivery_state: ODOO_DeliveryState.EXCHANGE_COMPLETED };
    case OrderStatus.FailedExchangeRequest:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.SHIPPED, delivery_state: ODOO_DeliveryState.EXCHANGE_UNSUCCESSFUL };
    case OrderStatus.ReturnOrderInProgress:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.SHIPPED, delivery_state: ODOO_DeliveryState.REFUND_IN_PROGRESS };
    case OrderStatus.ReturnedOrder:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.RETURNED_TO_WAREHOUSE, delivery_state: ODOO_DeliveryState.REFUND_COMPLETED };
    case OrderStatus.FailedReturnRequest:
      return { state: ODOO_SaleOrderState.SALES_CONFIRMED, wh_state: ODOO_WarehouseState.SHIPPED, delivery_state: ODOO_DeliveryState.REFUND_UNSUCCESSFUL };
    case OrderStatus.CancelledOrderByMarketer:
      return { state: ODOO_SaleOrderState.CANCEL_REQUEST, wh_state: ODOO_WarehouseState.CANCELLED, delivery_state: ODOO_DeliveryState.CANCELLED };
    case OrderStatus.OutOfStockProduct:
      return { state: ODOO_SaleOrderState.PROCESS, wh_state: ODOO_WarehouseState.WAITING_STOCK, delivery_state: ODOO_DeliveryState.PENDING };
    default:
      return { state: ODOO_SaleOrderState.PROCESS, wh_state: ODOO_WarehouseState.PENDING, delivery_state: ODOO_DeliveryState.PENDING };
  }
}
