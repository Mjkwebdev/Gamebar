import React from "react";
import Categoriies from "../category";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
interface Props {
  onSubmit: (data: ExpenseForrmData) => void;
}
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Please enter more than 3 letters" })
    .max(30),
  amount: z.number({ invalid_type_error: "Required" }).min(0.001).max(100_000),
  category: z.enum(Categoriies, {
    errorMap: () => ({ message: "Required" }),
  }),
});
type ExpenseForrmData = z.infer<typeof schema>;
const ExpenseForrm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseForrmData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="descriptiom" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="descriptiom"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""> </option>
          {Categoriies.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary"> Submit</button>
    </form>
  );
};

export default ExpenseForrm;
