import React from 'react';
import TextField from './TextField';
import { useFormContext } from 'react-hook-form';

const DeliveryAddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Street Addres"
            {...register('address.streetAddress', {
              required: 'This field is required',
            })}
            error={errors.address?.streetAddress}
          />
        </div>
        <div className="col">
          <TextField
            label="City"
            {...register('address.city', {
              required: 'This field is required',
            })}
            error={errors.address?.city}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <TextField label="Landmark" {...register('address.landmark')} />
        </div>
        <div className="col">
          <TextField label="State" {...register('address.state')} />
        </div>
      </div>
    </>
  );
};

export default DeliveryAddressForm;
