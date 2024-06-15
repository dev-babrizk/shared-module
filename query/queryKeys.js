export const queryKeys = {
  auth: {
    login: 'AUTH_LOGIN',
    refreshToken: 'AUTH_REFRESH_TOKEN',
    register: 'AUTH_REGISTER',
    profile: 'AUTH_PROFILE',
    products: {
      category: 'AUTH_PRODUCTS_CATEGORY',
      subCategory: 'AUTH_PRODUCTS_SUBCATEGORY',
      categories: 'AUTH_PRODUCTS_CATEGORIES',
      allCategories: 'AUTH_PRODUCTS_ALLCATEGORIES',
      productsOverview: 'AUTH_PRODUCTS_PRODUCTSOVERVIEW',
      categoryOverview: 'AUTH_PRODUCTS_CATEGORYOVERVIEW',
      variantsOverview: 'AUTH_PRODUCTS_VARIANTSOVERVIEW',
      products: 'AUTH_PRODUCTS_PRODUCTS',
      product: 'AUTH_PRODUCTS_PRODUCT',
      productDetails: 'AUTH_PRODUCTS_PRODUCTDETAILS',
      offers: 'AUTH_PRODUCTS_OFFERS',
      home: 'AUTH_PRODUCTS_HOME',
      search: 'AUTH_PRODUCTS_SEARCH',
      downloadImages: 'AUTH_PRODUCTS_DOWNLOADIMAGES',
      labels: 'AUTH_PRODUCTS_LABELS',
      descriptions: 'AUTH_PRODUCTS_DESCRIPTIONS',
      vendorProducts: 'AUTH_PRODUCTS_VENDORPRODUCTS',
    },
    orders: {
      cart: 'AUTH_ORDERS_CART',
      orders: 'AUTH_ORDERS_ORDERS',
      order: 'AUTH_ORDERS_ORDER',
      getMyOrders: 'AUTH_ORDERS_GETMYORDERS',
      getMyOrdersStatistics: 'AUTH_ORDERS_GETMYORDERSSTATISTICS',
      getMyProfitsStatistics: 'AUTH_ORDERS_GETMYPROFITSSTATISTICS',
      getStatus: 'AUTH_ORDERS_GETSTATUS',
      orderItem: 'AUTH_ORDERS_ORDERITEM',
      orderItemStatus: 'AUTH_ORDERS_ORDERITEMSTATUS',
      orderExcel: 'AUTH_ORDERS_ORDEREXCEL',
    },
    sourcing: {
      getAllSourcing: 'AUTH_SOURCING_GETALLSOURCING',
      getSourcing: 'AUTH_SOURCING_GETSOURCING',
    },
    SKUManagement: {
      getAllSKUManagement: 'AUTH_SKUMANAGEMENT_GETALLSKUMANAGEMENT',
      getSKUManagement: 'AUTH_SKUMANAGEMENT_GETSKUMANAGEMENT',
    },
    Tickets: {
      getAllTickets: 'AUTH_TICKETS_GETALLTICKETS',
      getTickets: 'AUTH_TICKETS_GETTICKETS',
    },
    Warehouses: {
      getAllWarehouses: 'AUTH_WAREHOUSES_GETALLWAREHOUSES',
      getWarehouses: 'AUTH_WAREHOUSES_GETWAREHOUSES',
    },
    VCategories: {
      getAllVCategories: 'AUTH_VCATEGORIES_GETALLVCATEGORIES',
      getVCategories: 'AUTH_VCATEGORIES_GETVCATEGORIES',
    },
    Packages: {
      getAllPackages: 'AUTH_PACKAGES_GETALLPACKAGES',
      getPackages: 'AUTH_PACKAGES_GETPACKAGES',
    },
    withdraw: {
      getWithdraws: 'AUTH_WITHDRAW_GETWITHDRAWS',
    },
    wallet: {
      getWallets: 'AUTH_WALLET_GETWALLETS',
    },
    payment: {
      getPaymentsMethods: 'AUTH_PAYMENT_GETPAYMENTSMETHODS',
    },
    clients: {
      getClients: 'AUTH_CLIENTS_GETCLIENTS',
    },
    invoice: {
      getAllInvoices: 'AUTH_INVOICE_GETALLINVOICES',
      getInvoices: 'AUTH_INVOICE_GETINVOICES',
    },
    categories: {
      dropdown: 'AUTH_CATEGORIES_DROPDOWN', // correct example
      tags: {
        dropdown: 'AUTH_CATEGORIES_TAGS_DROPDOWN',
      },
    },
    labels: {
      dropdown: 'AUTH_LABELS_DROPDOWN',
    },
    system: {
      current: 'AUTH_SYSTEM_CURRENT',
    },
  },
  admin: {
    surveys: 'ADMIN_SURVEYS',
    banner: 'ADMIN_BANNER',
    integration: 'ADMIN_INTEGRATION',
    users: 'ADMIN_USERS',
    cities: 'ADMIN_CITIES',
    user: 'ADMIN_USER',
    roles: 'ADMIN_ROLES',
    systems: 'ADMIN_SYSTEMS',
    system: 'ADMIN_SYSTEM',
    lables: 'ADMIN_LABELS',
    shipping: 'ADMIN_SHIPPING',
    paymentMethods: 'ADMIN_PAYMENTMETHODS',
    orders: 'ADMIN_ORDERS',
    wallets: 'ADMIN_WALLETS',
    statistics: 'ADMIN_STATISTICS',
    transactions: 'ADMIN_TRANSACTIONS',
    offers: 'ADMIN_OFFERS',
    categories: 'ADMIN_CATEGORIES',
    permission: 'PERMISSION',
    accountManager: 'ACCOUNTMANAGER',
    dropdown: {
      categories: 'ADMIN_DROPDOWN_CATEGORIES',
      offers: 'ADMIN_DROPDOWN_OFFERS',
      usersLabels: 'ADMIN_DROPDOWN_USERSLABELS',
      users: 'ADMIN_DROPDOWN_USERS',
    },
  },
};
