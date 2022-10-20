import { AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Address } from "../../../models/address";
type Props = {
  address: Address;
  className?: string;
  onClickDelete?: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    address: Address
  ) => void;
  onClickUpdateMainAddress?: (address: Address) => void;
};

const AddressCard = (props: Props) => {
  const { address, className, onClickDelete, onClickUpdateMainAddress } = props;

  const { city, isMain, street, suite, zipcode, id } = address;

  const handleDelete = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (onClickDelete) onClickDelete(e, address);
  };

  const handleUpdateMainAddress = () => {
    if (onClickUpdateMainAddress) onClickUpdateMainAddress(address);
  };

  return (
    <div
      className={`card bg-base-300 shadow-xl break-all ${className}`}
      key={id}
    >
      <div className="card-body">
        <div className="flex">
          <div className="grow">
            <span className="text-lg text-gradient-primary">Address</span>
          </div>
          {!isMain && (
            <span>
              <AiFillDelete
                onClick={handleDelete}
                className="mr-4 text-2xl text-red-300 hover:text-red-400 cursor-pointer"
              />
            </span>
          )}
          {isMain && (
            <MdFavorite className="text-2xl text-green-400 hover:text-green-100/80 cursor-pointer" />
          )}
          {!isMain && (
            <MdFavoriteBorder
              onClick={handleUpdateMainAddress}
              className="text-2xl text-green-100/80 hover:text-green-400 cursor-pointer"
            />
          )}
        </div>
        <p>
          <span>{suite}, </span>
          <span>{street}</span>
          <br></br>
          <span>{city}</span>
          <br></br>
          <span>{zipcode}</span>
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
