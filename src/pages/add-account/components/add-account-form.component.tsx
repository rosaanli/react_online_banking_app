import React from "react";
import { Account, createEmptyAccount, createEmptyAccountErrors } from "../add-account.vm";
import { validateAccount } from "../validation"
import classes from "./add-account-form.component.module.css";

interface Props {
  onSubmit : (account : Account) => void
};

export const AddAcountFormComponent : React.FC<Props> = ( props) => {
  const {onSubmit} = props;
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

  const [errors, setErrors] = React.useState(createEmptyAccountErrors());

  const handleFieldChange = ( e: React.ChangeEvent<HTMLSelectElement>|React.ChangeEvent<HTMLInputElement>) => {
    setAccount(
      {...account,
      [e.target.name] : e.target.value
    }
    )
  };

  const handleSubmitAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidateAccount = validateAccount(account);
    setErrors(isValidateAccount.error)
    if(isValidateAccount.succeeded){
      onSubmit(account);
      console.log("cuenta enviada", account)
    }

  };

  return <>
    <form onSubmit={handleSubmitAccount} className={classes.formContainer}>
      <div className={classes.formItem}>
        <div>
          <label htmlFor="accountType">Tipo de cuenta:</label>
          <select id="accountType" name="type"
            onChange={handleFieldChange}
            className={`${classes.select} ${errors.type ? classes['select-error'] : ''} ${classes.medium}`}>
            <option value="">Selecciona un tipo</option>
            <option value="corriente">Cuenta Corriente</option>
            <option value="ahorros">Cuenta de Ahorros</option>
            <option value="nomina">Cuenta Nómina</option>
          </select>
          {errors.type && <p className ={classes.error} > {errors.type}</p>}
        </div>
        <div>
          <label htmlFor="accountName" >Alias:</label>
          <input type="text" id="accountName" name="name"
          onChange={handleFieldChange}
          className={`${classes.input} ${errors.name ? classes['input-error'] : ''} ${classes.medium}`}/>
          {errors.name && <p className={classes.error}>{errors.name}</p>}
        </div>
      </div>
    <div className={classes.buttonContainer}>
      <button type="submit"> GUARDAR </button>
    </div>
    </form>
  </>
};