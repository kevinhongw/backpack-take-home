import { Navigate, createBrowserRouter } from "react-router-dom"

import BankAccountPage from "./pages/BankAccountPage"

const URL_PREFIX = "backpack-coding-challenge"
const BANK_ACCOUNT_ID = "91f371a0-b370-4342-9907-cf26c37d16e2"

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <Navigate replace to={`/bank_accounts/${BANK_ACCOUNT_ID}`} />,
  },
  {
    path: `/bank_accounts/:bankAccountId`,
    element: <BankAccountPage />,
  },
])
