import { UseFormRegister } from "react-hook-form";
import FormControl from "../../../../core/ui/forms/FormControl/FormControl";
import { AddAddressFormData } from "../../actions/AddAddressModal/AddAddressModal";

type Props = {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  register: UseFormRegister<AddAddressFormData>;
};

const AddAddressFrom = (props: Props) => {
  const { register, onSubmit } = props;

  return (
    <form onSubmit={(e) => onSubmit(e)} className="[&>*]:m-2">
      <FormControl htmlForm="suite" labelText="Suite">
        <input
          {...register("suite")}
          placeholder="Ex: Apt. 1"
          className="input input-bordered w-full max-w-xs"
        />
      </FormControl>
      <FormControl htmlForm="street" labelText="Street">
        <textarea
          {...register("street")}
          placeholder="Bio"
          className="textarea textarea-bordered"
        ></textarea>
      </FormControl>
      <FormControl htmlForm="city" labelText="City">
        <input
          {...register("city")}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </FormControl>
      <FormControl htmlForm="zipcode" labelText="Zip code">
        <input
          {...register("zipcode")}
          placeholder="Type here"
          className="input input-bordered w-40"
        />
      </FormControl>
      <FormControl htmlForm="isMain" labelText="Is main address">
        <input type={"checkbox"} {...register("isMain")} className="checkbox" />
      </FormControl>
      <div className="modal-action">
        <input type="submit" className="btn" value="Save address" />
      </div>
    </form>
  );
};

export default AddAddressFrom;
