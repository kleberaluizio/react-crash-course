import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Title from './components/Title'
import FinancialSummary from './components/financial-summary-table/FinancialSummary'
import LoanInputInfo from './components/loan_input_info/LoanInputInfo'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title></Title>
    <LoanInputInfo></LoanInputInfo>
    <FinancialSummary></FinancialSummary>
  </StrictMode>,
)
