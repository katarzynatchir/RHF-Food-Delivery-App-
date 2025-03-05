import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import TextField from './TextField';

const FoodItems = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: 'foodItems',
    rules: { required: 'To pole jest wymagane' },
  });

  const onRowAdd = () => {
    console.log('dodaję wiersz');
    append({ name: 'Kalafior', quantity: 0 });
  };

  const onRowDelete = index => {
    remove(index);
  };

  return (
    <table className="table table-borderless table-hover">
      <thead>
        <tr>
          <th colSpan={3}>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={onRowAdd}
            >
              Add
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field, index) => (
          <tr key={field.id}>
            <td>
              <TextField
                label="Food 1"
                {...register(`foodItems.${index}.name`, {
                  required: 'This field is required',
                })}
                error={errors.foodItems && errors.foodItems[index]?.name}
              />
            </td>
            <td>
              <TextField
                type="number"
                min={0}
                label="Quantity"
                {...register(`foodItems.${index}.quantity`, {
                  required: 'This field is required',
                })}
                error={errors.foodItems && errors.foodItems[index]?.quantity}
              />
            </td>
            <td>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => onRowDelete(index)}
              >
                - Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FoodItems;
