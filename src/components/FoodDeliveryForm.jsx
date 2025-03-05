import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import TextField from './TextField';
import CheckoutForm from './CheckoutForm';
import DeliveryAddressForm from './DeliveryAddressForm';
import FoodDeliveryMaster from './FoodDeliveryMaster';
import FoodItems from './FoodItems';

const FoodDeliveryForm = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: '',
      mobile: '',
      email: '',
      paymentMethod: '',
      deliveryIn: '',
      foodItems: [{ name: '', quantity: 0 }],
      address: {
        streetAddress: '',
        landmark: '',
        city: '',
        state: '',
      },
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = data => console.log('data', data);
  const onError = errors => console.log('validation errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div>list of order food items</div>
      <FormProvider {...methods}>
        <FoodDeliveryMaster />
        <FoodItems />
        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>
      <button className="btn btn-primary mt-3">Send form</button>
    </form>
  );
};

export default FoodDeliveryForm;
