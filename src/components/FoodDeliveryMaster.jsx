import React from 'react';
import TextField from './TextField';
import { useFormContext } from 'react-hook-form';

const FoodDeliveryMaster = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <TextField label="#Order No." {...register('orderNo')} disabled />
        </div>
        <div className="col">
          <TextField
            label="Mobile"
            {...register('mobile', {
              minLength: {
                value: 9,
                message: 'Must be 9 digit',
              },
              maxLength: {
                value: 9,
                message: 'Must be 9 digit',
              },
              required: 'This field is required',
            })}
            error={errors.mobile}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextField
            label="Customer Name"
            {...register('customerName', {
              required: 'This field is required',
            })}
            error={errors.customerName}
          />
        </div>
        <div className="col">
          <TextField
            type="email"
            label="Email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Incorrect email format',
              },
            })}
            error={errors.email}
          />
        </div>
      </div>
    </>
  );
};

export default FoodDeliveryMaster;
