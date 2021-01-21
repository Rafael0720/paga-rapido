export type Boleto = {
  id: number;
  dueDate: Date;
  bankName: string;
  bankCode: string;
  agency: string;
  agencyDigit: string;
  account: string;
  accountDigit: string;
  accept: string;
  specie: string;
  specieDoc: string;
  recipient: string;
  payee: string;
  titleSpecies: string;
  amount: number;
  installment: 1;
  interest: {};
  lateFee: {};
  metadata: {};
};
