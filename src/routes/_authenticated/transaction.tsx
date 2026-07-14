import Transaction from '#/features/transaction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/transaction')({
  component: Transaction,
})


