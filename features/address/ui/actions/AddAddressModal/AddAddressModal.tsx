import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import * as yup from "yup";
import AddAddressFrom from "../../forms/AddAddressForm/AddAddressFrom";
export interface AddAddressFormData {
  suite: string;
  street: string;
  city: string;
  zipcode: string;
  isMain: boolean;
}

const schema = yup
  .object()
  .shape({
    suite: yup.string().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.string().required(),
    isMain: yup.boolean().default(false).required(),
  })
  .required();

type Props = {
  isModalOpen: boolean;
  toggleModal: () => void;
  onSubmit: (data: AddAddressFormData) => void;
};

const AddAddressModal = (props: Props) => {
  const { isModalOpen, toggleModal, onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<AddAddressFormData>({
    resolver: yupResolver(schema),
  });

  const onAddAddressSubmit = handleSubmit((data) => {
    toggleModal();
    reset();
    clearErrors();
    onSubmit(data);
  });

  const hasErrors = () => {
    if (errors.city && errors.city.type === "required") {
      return true;
    }

    if (errors.street && errors.street.type === "required") {
      return true;
    }
    if (errors.suite && errors.suite.type === "required") {
      return true;
    }
    if (errors.zipcode && errors.zipcode.type === "required") {
      return true;
    }
    if (errors.isMain && errors.isMain.type === "required") {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box relative">
          <AiFillCloseCircle
            onClick={() => {
              reset();
              clearErrors();
              toggleModal();
            }}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          />

          <AddAddressFrom register={register} onSubmit={onAddAddressSubmit} />

          <div className="flex justify-center items-center text-red-400">
            {hasErrors() && <span>All fields are required !</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal;
