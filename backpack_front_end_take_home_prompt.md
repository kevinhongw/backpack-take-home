# Introduction

As part of Backpack’s application process we would like to see a sample of your work. This prompt should take between 10 - 15 hours to complete.

## Prompt

Backpack is a financial institution that at its core deals with bank accounts, balances, and transactions. In this prompt you will build a UI that displays a customer’s bank account and routing numbers, available and pending balances, and transactions.

Please create a separate repository for this prompt and commit your work as you go. When you are ready for us to review your work, give us access to your repository.

If you have any questions please ask!

## Tech Stack

The web application must be build using React. The rest is up to you.

## Requirements

- [ ] UI for displaying, concealing, and copying account and routing numbers
- [ ] UI for displaying the current and available balance
- [ ] UI for displaying transactions
- [ ] `README` explaining your design choices and how to run the application

## Extras

- [ ] Reusable components
- [ ] Polished UI and styling
- [ ] Filter and search for transactions
- [ ] Mobile friendly
- [ ] Tests

## API

💡 The base path for the API is [**https://api.dev.backpackpay.com/api/v1/mocks**](https://api.dev.backpackpay.com/api/v1/mocks)

### `GET /bank-accounts`

Get an account owner’s bank accounts.

**Response Body**

```json
{
    data: {
        bank_accounts: [
            {
                id,
                created_at,
                updated_at,
                status,
                name,
                account_number,
                routing_number
            }
        ],
    },
    request_id
}

{
    "data": {
        "bank_accounts": [
            {
                "id": "91f371a0-b370-4342-9907-cf26c37d16e2",
                "created_at": "2024-03-13T05:57:57.186Z",
                "updated_at": "2024-04-12T05:57:57.186Z",
                "status": "ACTIVE",
                "name": "My bank account",
                "account_number": "999999999999",
                "routing_number": "111111111"
            }
        ]
    },
    "request_id": "e6f7fc4b-6d88-4a6d-b604-bd1e177094c5"
}
```

### `GET /bank-accounts/:bank_account_id/balance`

Get a bank account’s balance.

**Response Body**

```json
{
    data: {
        balance: {
            bank_account_id,
            available_balance_in_cents,
            current_balance_in_cents
        }
    },
    request_id
}

{
    "data": {
        "bank_account_balance": {
            "bank_account_id": "91f371a0-b370-4342-9907-cf26c37d16e2",
            "available_balance_in_cents": 1716543,
            "pending_balance_in_cents": 1789505
        }
    },
    "request_id": "3e1c3c88-39e3-47e3-b819-d7dfde26b2b8"
}
```

### `GET /transactions`

Get an account owner’s transactions.

**Response Body**

```json
{
    data: {
        transactions: [
            {
                id,
                created_at,
                updated_at,
                type,
                date,
                description,
                amount_in_cents,
            }
        ]
    },
    request_id
}

{
    "data": {
        "transactions": [
            {
                "id": "bea3594e-e28c-4412-b708-dca6e8e4b63a",
                "created_at": "2024-04-16T06:15:57.775Z",
                "updated_at": "2024-04-16T06:15:57.775Z",
                "type": "DEPOSIT",
                "date": "2024-04-16",
                "description": "Test transaction #5",
                "amount_in_cents": 34563
            },
            {
                "id": "55d38f7a-b62e-4ca6-a57e-df088492fe93",
                "created_at": "2024-04-15T06:15:57.775Z",
                "updated_at": "2024-04-15T06:15:57.775Z",
                "type": "HOLD_RELEASE",
                "date": "2024-04-15",
                "description": "Test transaction #4",
                "amount_in_cents": 123
            },
            {
                "id": "cdb58a18-30d7-454f-bd06-cce986189545",
                "created_at": "2024-04-14T06:15:57.775Z",
                "updated_at": "2024-04-14T06:15:57.775Z",
                "type": "HOLD",
                "date": "2024-04-14",
                "description": "Test transaction #3",
                "amount_in_cents": -123
            },
            {
                "id": "6c69f45e-9ed5-447d-afff-34fd475b335b",
                "created_at": "2024-04-13T06:15:57.775Z",
                "updated_at": "2024-04-13T06:15:57.775Z",
                "type": "WITHDRAWAL",
                "date": "2024-04-13",
                "description": "Test transaction #2",
                "amount_in_cents": -123456
            },
            {
                "id": "9083dc38-f6ca-4e79-9e2a-2a5beb046db1",
                "created_at": "2024-04-12T06:15:57.775Z",
                "updated_bt": "2024-04-12T06:15:57.775Z",
                "type": "DEPOSIT",
                "date": "2024-04-12",
                "description": "Test transaction #1",
                "amount_in_cents": 100000
            }
        ]
    },
    "request_id": "7a6e2a0f-9335-4533-ac0d-3c122e6633a1"
}
```

💡 All debits have `amount_in_cents < 0` and credits have `amount_in_cents >= 0`

## Design System

### Core

| Name      | HEX     |
| --------- | ------- |
| Primary   | #033AFC |
| Secondary | #24305B |

### Shades

| Name       | HEX     |
| ---------- | ------- |
| White      | #FFFFFF |
| Black      | #000000 |
| Dark Grey  | #5E5E5E |
| Light Grey | #CFCFCF |

### Warning Colors

| Name   | HEX     |
| ------ | ------- |
| Red    | #C44E42 |
| Yellow | #FFCF20 |
| Green  | #608D64 |

### Fonts

| Type  | Size | Weight  |
| ----- | ---- | ------- |
| H1    | 48   | Bold    |
| H2    | 38   | Bold    |
| H3    | 30   | Bold    |
| Body  | 16   | Regular |
| Label | 14   | Light   |
| Info  | 12   | Light   |

_font-family: Montserrat_
