import React from 'react'
import styled from 'styled-components';

const FinancialSummary = () => {
  return (
    <SECTION>
      <table class="table table-bordered" border="2">
        <thead>
          <tr>
            <th colSpan="3">Empréstimo</th>
            <th colSpan="2">Parcela</th>
            <th colSpan="2">Principal</th>
            <th colSpan="3">Juros</th>
          </tr>
          <tr >
            <th>Data Competência</th>
            <th>Valor de Empréstimo</th>
            <th>Saldo Devedor</th>
            <th>Consolidada</th>
            <th>Total</th>
            <th>Amortização</th>
            <th>Saldo</th>
            <th>Provisão</th>
            <th>Acumulado</th>
            <th>Pago</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </SECTION>
  )
}

const SECTION = styled.div`
    margin: 0 45px 0 45px;
`;

export default FinancialSummary