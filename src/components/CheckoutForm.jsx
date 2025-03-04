import React from 'react';
import Select from './Select';
import { useFormContext } from 'react-hook-form';

const deliveryInOption = [
  { value: 0, text: 'Select' },
  { value: 30, text: 'Half an Hour' },
  { value: 60, text: '1 Hour' },
  { value: 120, text: '2 Hour' },
  { value: 180, text: '3 Hour' },
];

const paymentOptions = [
  { value: '', text: 'Select' },
  { value: 'Online', text: 'Paid Online' },
  { value: 'COD', text: 'Cash on Delivery' },
];

const CheckoutForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
      <div className="row mb-2">
        <div className="col">
          <Select
            label="Payment Method"
            options={paymentOptions}
            {...register('paymentMethod', {
              required: 'This field is required',
            })}
            error={errors.paymentMethod}
          />
        </div>
        <div className="col">
          <Select
            label="Delivery within"
            options={deliveryInOption}
            {...register('deliveryIn', {
              required: 'This field is required',
            })}
            error={errors.deliveryIn}
          />
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
