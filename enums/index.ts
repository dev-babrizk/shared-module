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
  OnCart = 1, // Order is on the cart
  OnExcelsheet = 2, // Order is on the excels

  // Confirmation Steps
  OrderReceived = 10, // Order received
  OrderConfirmed = 20, // Order confirmed by the admin

  // Fulfillment Steps
  AwaitingShipment = 30, // Waiting for the shipping company
  ShipmentInProgress = 40, // Shipment in progress

  // Delivery Steps
  Delivered = 50, // Delivered
  OrderSuspended = 60, // Order suspended
  OrderOutOfStock = 65, // Order out of stock
  OrderCancelledByAdmin = 70, // Order cancelled by the admin
  OrderCancelledByMarketer = 80, // Order cancelled by the marketer
  DeliverySuspended = 90, // Delivery suspended

  // Customer Service Steps
  DeliveryFailedReturnInProgress = 100, // Delivery failed and return in progress
  ReturnInProgress = 110, // Return in progress
  Returned = 120, // Returned
  ReplacementInProgress = 130, // Replacement in progress
  Replaced = 140, // Replaced
}

// New Order Status Structure
export enum NewOrderStatus {
  OnCart = 1, // Order is on the cart
  OnExcelsheet = 2, // Order is on the excels

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

  // Customer Service Steps
  ExchangeOrderInProgress = 40,
  ExchangedOrder = 41,
  FailedExchangeRequest = 42,
  ReturnOrderInProgress = 43,
  ReturnedOrder = 44,
  FailedReturnRequest = 45,

  // Other Steps
  OutOfStockProduct = 50,
  CancelledOrderByMerchant = 51,
}

// Payment status
export const enum PaymentStatus {
  Pending = 1,
  IN_WALLET,
  Refunded,
  Canceled,
}

// Sourcing status
export const enum SourcingStatus {
  OnCart = 0, // Order is on the cart
  Confirmed = 10, // Order confirmed by the client
  Accepted = 20, // Order accepted by the admin
  OnTheWayToDelivery = 30, // Order is on the way to delivery
  Delivered = 40, // Order delivered to the client
  Canceled = 50, // Order canceled by the client
  OnTheWayToReturn = 60, // Order is on the way to return
  Returned = 70, // Order returned to the store
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
  paidedStatuses: [OrderStatus.Delivered, OrderStatus.Replaced],
  refundStatuses: [OrderStatus.Returned],
  positveStatus: [OrderStatus.OrderReceived, OrderStatus.OrderConfirmed, OrderStatus.AwaitingShipment, OrderStatus.ShipmentInProgress, OrderStatus.Delivered],
  negativeStatus: [
    OrderStatus.OrderSuspended,
    OrderStatus.OrderOutOfStock,
    OrderStatus.OrderCancelledByAdmin,
    OrderStatus.OrderCancelledByMarketer,
    OrderStatus.DeliverySuspended,
    OrderStatus.DeliveryFailedReturnInProgress,
  ],
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
    case OrderStatus.OnCart:
    case OrderStatus.OnExcelsheet:
    case OrderStatus.OrderReceived:
    case OrderStatus.OrderConfirmed:
    case OrderStatus.OrderSuspended:
    case OrderStatus.OrderOutOfStock:
      return true;
    default:
      return false;
  }
};

export const isOrderShippingChangeAllowed = (status: number) => {
  switch (status) {
    case OrderStatus.AwaitingShipment:
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

const notifiableStatuses = [
  // Statuses that the user should be notified about to take an action
  OrderStatus.DeliverySuspended,
  OrderStatus.OrderSuspended,
  OrderStatus.OrderOutOfStock,
  OrderStatus.OrderCancelledByAdmin,
  OrderStatus.OrderCancelledByMarketer,
  OrderStatus.Delivered,
];

export const isStatusNotifiable = (status: number) => {
  return notifiableStatuses.includes(status);
};
export const getNextStatusOptions = (status: number) => {
  switch (status) {
    case OrderStatus.OrderReceived: // Order received
      return [
        OrderStatus.OrderConfirmed, // Order confirmed
        OrderStatus.OrderSuspended, // Order suspended
        OrderStatus.OrderOutOfStock, // Order suspended
        OrderStatus.OrderCancelledByAdmin, // Order cancelled by admin
        OrderStatus.OrderCancelledByMarketer, // Order cancelled by marketer
      ];
    case OrderStatus.OrderConfirmed: // Order confirmed
      return [
        OrderStatus.AwaitingShipment, // Awaiting shipment
        OrderStatus.ShipmentInProgress, // Shipment in progress
        OrderStatus.OrderCancelledByAdmin, // Order cancelled by admin
        OrderStatus.OrderCancelledByMarketer, // Order cancelled by marketer
      ];
    case OrderStatus.AwaitingShipment: // Awaiting shipment
      return [
        OrderStatus.ShipmentInProgress, // Shipment in progress
        OrderStatus.OrderCancelledByAdmin, // Order cancelled by admin
      ];
    case OrderStatus.ShipmentInProgress: // Shipment in progress
      return [
        OrderStatus.Delivered, // Delivered
        OrderStatus.OrderCancelledByAdmin, // Order cancelled by admin
        OrderStatus.DeliverySuspended, // Delivery suspended
      ];
    case OrderStatus.Delivered: // Delivered
      return [
        OrderStatus.ReturnInProgress, // Return in progress
        OrderStatus.ReplacementInProgress, // Replacement in progress
      ];
    case OrderStatus.OrderSuspended: // Order suspended
      return [
        OrderStatus.OrderConfirmed, // Order confirmed
        OrderStatus.OrderCancelledByMarketer, // Order cancelled by marketer
        OrderStatus.OrderCancelledByAdmin, // Order cancelled by admin
      ];
    case OrderStatus.OrderOutOfStock: // Order suspended
      return [
        OrderStatus.OrderConfirmed, // Order confirmed
        OrderStatus.OrderCancelledByMarketer, // Order cancelled by marketer
        OrderStatus.OrderCancelledByAdmin, // Order cancelled by admin
      ];
    case OrderStatus.OrderCancelledByAdmin: // Order cancelled by admin
    case OrderStatus.OrderCancelledByMarketer: // Order cancelled by marketer
      return [
        OrderStatus.OrderConfirmed, // Order confirmed
        OrderStatus.OrderSuspended, // Order suspended
        OrderStatus.OrderOutOfStock, // Order suspended
      ];
    case OrderStatus.DeliverySuspended: // Delivery suspended
      return [
        OrderStatus.DeliveryFailedReturnInProgress, // Delivery failed, return in progress
        OrderStatus.Delivered, // Delivered
      ];
    case OrderStatus.DeliveryFailedReturnInProgress: // Delivery failed, return in progress
      return [
        OrderStatus.Delivered, // Delivered
        OrderStatus.DeliverySuspended, // Delivery suspended
      ];
    case OrderStatus.ReturnInProgress: // Return in progress
      return [
        OrderStatus.Returned, // Returned
      ];
    case OrderStatus.ReplacementInProgress: // Replacement in progress
      return [
        OrderStatus.Replaced, // Replaced
      ];
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
