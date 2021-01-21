export type CreditCard = {
  id: number;
  gatewayKey: string;
  returnUrl: string;
  foreignOrderId: string;
  amount: number;
  installments: 1;
  cardNumber: string;
  cardCvv: string;
  cardExpirationDate: string;
  cardHolderName: string;
  cardFlag: string;
  paymentType: string;
  customer: {
    name: string;
    document: string;
    type: "private";
    email: string;
    phoneNumbers: [];
    addresses: {};
  };
};
