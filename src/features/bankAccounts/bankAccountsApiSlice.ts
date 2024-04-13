// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type BankAccount = {
  id: string
  created_at: string
  updated_at: string
  status: string
  name: string
  account_number: string
  routing_number: string
}

export type BankAccountBalance = {
  bank_account_id: string
  available_balance_in_cents: number
  pending_balance_in_cents: number
}

export type Transaction = {
  id: string
  created_at: string
  updated_at: string
  type: string
  date: string
  description: string
  amount_in_cents: number
}

export interface BackPackApiResponse<QueryKey extends string, ResponseType> {
  data: {
    [key in QueryKey]: ResponseType
  }
  request_id: string
}

export const bankAccountsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.dev.backpackpay.com/api/v1/mocks",
  }),
  reducerPath: "bankAccountsApi",
  tagTypes: ["BankAccounts"],
  endpoints: build => ({
    getBankAccounts: build.query<BankAccount[], void>({
      query: () => `/bank-accounts`,
      transformResponse: (
        response: BackPackApiResponse<"bank_accounts", BankAccount[]>,
      ) => response.data.bank_accounts,
    }),
    getBankAccountBalance: build.query<BankAccountBalance, string>({
      query: bankAccountId => `/bank-accounts/${bankAccountId}/balance`,
      transformResponse: (
        response: BackPackApiResponse<
          "bank_account_balance",
          BankAccountBalance
        >,
      ) => response.data.bank_account_balance,
    }),
    getTransactions: build.query<Transaction[], string | void>({
      // API design should include bank account id
      // /bank-accounts/${bankAccountId}/transactions
      query: _bankAccountId => `/transactions`,
      transformResponse: (
        response: BackPackApiResponse<"transactions", Transaction[]>,
      ) => response.data.transactions,
    }),
  }),
})

export const {
  useGetBankAccountsQuery,
  useGetBankAccountBalanceQuery,
  useGetTransactionsQuery,
} = bankAccountsApiSlice
