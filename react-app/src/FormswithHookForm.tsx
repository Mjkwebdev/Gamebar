import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "./Message";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 numbers" }),
  age: z
    .number({ invalid_type_error: "Required" })
    .min(18, { message: "number must be greater than 18" }),
});
type FormData = z.infer<typeof schema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />

        {errors.name && <p className="text-danger"> {errors.name.message} </p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger"> {errors.age.message} </p>}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        {" "}
        Submit
      </button>
    </form>
  );
};

export default Form;
