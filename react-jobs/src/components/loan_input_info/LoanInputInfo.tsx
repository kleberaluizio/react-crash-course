import React from 'react'
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';
import { NumericFormat } from 'react-number-format';
import { useForm } from 'react-hook-form';
import { LoanService } from '../../services/loanService'; // ajuste o caminho conforme necessário
import { LoanRequest } from '../../types/loanRequest';
import { LoanFinancialRecord } from '../../types/loanFinancialRecord';

const loanService = new LoanService();

const LoanInputInfo: React.FC = () => {
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<LoanRequest>();

  const onSubmit = async (data: LoanRequest) => {
    try {
      const result: LoanFinancialRecord[] = await loanService.getFinancialSummary(data);
      console.log('Financial Summary:', result);
      // Aqui você pode atualizar o estado do componente ou lidar com os dados conforme necessário
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FORM onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group col-md-2 px-3">
        <label htmlFor="initialDate">Data Inicial</label>
        <input type="date" className="form-control" id="initialDate" {...register('initialDate', { required: true })} />
      </div>
      <div className="form-group col-md-2 px-3">
        <label htmlFor="finalDate">Data Final</label>
        <input type="date" className="form-control" id="finalDate" {...register('finalDate', { required: true })} />
      </div>
      <div className="form-group col-md-2 px-3">
        <label htmlFor="firstPaymentDate">Primeiro Pagamento</label>
        <input type="date" className="form-control" id="firstPaymentDate" {...register('firstPaymentDate', { required: true })}/>
      </div>
      <div className="form-group col-md-2 px-3">
        <label htmlFor="loanAmount">Valor do Empréstimo</label>
        <CurrencyInput
          className="form-control"
          id="loanAmount"
          placeholder="Digite um valor"
          decimalsLimit={2}
          prefix="R$ "
          decimalSeparator=","
          groupSeparator="."
          value={getValues('loanAmount')}
          onValueChange={(value) => setValue('loanAmount', value ? parseFloat(value) : 0)}
        />
      </div>
      <div className="form-group col-md-2 px-3">
        <label htmlFor="interestRate">Taxa de Juros</label>
        <NumericFormat
          className="form-control"
          id="interestRate"
          thousandSeparator={false}
          suffix=" %"
          decimalScale={1}
          fixedDecimalScale={true}
          placeholder="Digite um valor"
          decimalSeparator={','}
          value={getValues('interestRate')}
          onValueChange={(values) => setValue('interestRate', values.value ? parseFloat(values.value) : 0)}
        />
      </div>
      <div className="form-group col-md-2 px-3">
        <button type="submit" className="btn btn-primary form-control align-bottom ">Calcular</button>
      </div>
    </FORM>
  )
}

const FORM = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 30px 30px 30px;
`;

export default LoanInputInfo