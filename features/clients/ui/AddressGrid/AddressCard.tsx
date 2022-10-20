import { AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Address } from "../../models/address";
type Props = {
  address: Address;
  className?: string;
  onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    address: Address
  ) => void;
};

const AddressCard = (props: Props) => {
  const { address, className, onClick } = props;

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) onClick(e, address);
  };

  const { city, isMain, street, suite, zipcode, id } = address;

  const cardClicableStyles = onClick
    ? "active:bg-base-300/50 hover:bg-base-300/50 cursor-pointer"
    : "";

  return (
    <div
      onClick={onClickCard}
      className={`card bg-base-300 shadow-xl break-all ${cardClicableStyles} ${className}`}
      key={id}
    >
      <div className="card-body">
        <div className="flex justify-end">
          {!isMain && (
            <span>
              <AiFillDelete className="mr-4 text-2xl text-red-300 hover:text-red-400 cursor-pointer" />
            </span>
          )}
          {isMain && (
            <MdFavorite className="text-2xl text-green-400 hover:text-green-100/80 cursor-pointer" />
          )}
          {!isMain && (
            <MdFavoriteBorder className="text-2xl text-green-100/80 hover:text-green-400 cursor-pointer" />
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
